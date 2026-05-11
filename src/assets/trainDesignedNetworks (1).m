function results = trainDesignedNetworks(data, nets, opts)
% trainDesignedNetworks
% This file handles training (single CPU + bonus multi-CPU).

fprintf('\n================ CLASSIFICATION (Single CPU) ================\n');
[netClassSingle, histClassSingle] = trainSingleCPU( ...
    nets.classInit, data.XcTrain, data.TcTrain, opts.class, 'classification');

results.class.trainAccSingle = classificationAccuracy(netClassSingle, data.XcTrain, data.TcTrain);
results.class.testAccSingle = classificationAccuracy(netClassSingle, data.XcTest, data.TcTest);
results.class.histSingle = histClassSingle;

fprintf('\n================ BONUS: Multi-CPU Data Parallel ================\n');
P = pickWorkerCount();
results.bonus.P = P;
results.bonus.available = false;

hasParallel = license('test', 'Distrib_Computing_Toolbox') && ...
    exist('parpool', 'file') == 2 && exist('gcp', 'file') == 2;

if hasParallel
    results.bonus.available = true;
    try
        [netClassMulti, histClassMulti] = trainMultiCPU( ...
            nets.classInit, data.XcTrain, data.TcTrain, opts.class, P);
        results.class.trainAccMulti = classificationAccuracy(netClassMulti, data.XcTrain, data.TcTrain);
        results.class.testAccMulti = classificationAccuracy(netClassMulti, data.XcTest, data.TcTest);
        results.class.histMulti = histClassMulti;
        results.bonus.ran = true;
    catch ME
        warning('Multi-CPU section failed: %s', ME.message);
        results.bonus.ran = false;
        results.bonus.error = ME.message;
    end
else
    results.bonus.ran = false;
    results.bonus.error = 'Parallel Toolbox not available in this environment.';
end

fprintf('\n================ REGRESSION (Single CPU) ================\n');
[netReg, histReg] = trainSingleCPU( ...
    nets.regInit, data.XrTrain, data.yTrainNorm, opts.reg, 'regression');

predTrainNorm = predictRegression(netReg, data.XrTrain);
predTestNorm  = predictRegression(netReg, data.XrTest);
predTrain = predTrainNorm * data.ySigma + data.yMu;
predTest  = predTestNorm * data.ySigma + data.yMu;

results.reg.rmseTrain = calcRmse(predTrain, data.yrTrain);
results.reg.rmseTest = calcRmse(predTest, data.yrTest);
results.reg.hist = histReg;
end

function [net, history] = trainSingleCPU(net, X, T, opts, task)
N = size(X,2);
nBatches = ceil(N / opts.batchSize);
history.loss = zeros(opts.epochs,1);
history.epochTimes = zeros(opts.epochs,1);
tAll = tic;

for ep = 1:opts.epochs
    tEpoch = tic;
    order = randperm(N);
    lossAccum = 0;

    for b = 1:nBatches
        s = (b-1)*opts.batchSize + 1;
        e = min(b*opts.batchSize, N);
        idx = order(s:e);
        Xb = X(:, idx);
        Tb = T(:, idx);

        [grads, lossBatch] = batchGradients(net, Xb, Tb, task, true);
        lossAccum = lossAccum + lossBatch;
        net = sgdmUpdate(net, grads, opts.lr, opts.momentum);
    end

    history.loss(ep) = lossAccum / nBatches;
    history.epochTimes(ep) = toc(tEpoch);

    if mod(ep, opts.verboseEvery) == 0 || ep == 1 || ep == opts.epochs
        fprintf('[SingleCPU][%s] epoch %d/%d, avg batch loss = %.6f\n', ...
            task, ep, opts.epochs, history.loss(ep));
    end
end
history.totalTime = toc(tAll);
end

function [net, history] = trainMultiCPU(net, X, T, opts, P)
if P < 2
    error('P must be >= 2 for multi-CPU mode.');
end
pool = gcp('nocreate');
if isempty(pool)
    parpool('local', P);
elseif pool.NumWorkers ~= P
    delete(pool);
    parpool('local', P);
end

N = size(X,2);
nBatches = ceil(N / opts.batchSize);
history.loss = zeros(opts.epochs,1);
history.epochTimes = zeros(opts.epochs,1);
tAll = tic;

for ep = 1:opts.epochs
    tEpoch = tic;
    order = randperm(N);
    lossAccum = 0;

    for b = 1:nBatches
        s = (b-1)*opts.batchSize + 1;
        e = min(b*opts.batchSize, N);
        idxBatch = order(s:e);
        chunks = splitIndices(numel(idxBatch), P);

        gradsLocal = cell(P,1);
        lossLocal = zeros(P,1);
        countLocal = zeros(P,1);
        netSnapshot = net;

        parfor p = 1:P
            localPos = chunks{p};
            if isempty(localPos)
                gradsLocal{p} = zeroGradsLike(netSnapshot);
                lossLocal(p) = 0;
                countLocal(p) = 0;
            else
                idx = idxBatch(localPos);
                Xp = X(:, idx);
                Tp = T(:, idx);
                [g, lossSum, nLocal] = batchGradients(netSnapshot, Xp, Tp, 'classification', false);
                gradsLocal{p} = g;
                lossLocal(p) = lossSum;
                countLocal(p) = nLocal;
            end
        end

        grads = zeroGradsLike(net);
        totalCount = sum(countLocal);
        for p = 1:P
            grads = addGrads(grads, gradsLocal{p});
        end
        grads = scaleGrads(grads, 1 / max(totalCount,1));
        net = sgdmUpdate(net, grads, opts.lr, opts.momentum);
        lossAccum = lossAccum + sum(lossLocal) / max(totalCount,1);
    end

    history.loss(ep) = lossAccum / nBatches;
    history.epochTimes(ep) = toc(tEpoch);
    if mod(ep, opts.verboseEvery) == 0 || ep == 1 || ep == opts.epochs
        fprintf('[MultiCPU][classification] epoch %d/%d, avg batch CE = %.6f\n', ...
            ep, opts.epochs, history.loss(ep));
    end
end
history.totalTime = toc(tAll);
end

function [grads, lossOut, count] = batchGradients(net, Xb, Tb, task, normalize)
[A, Z] = forwardPass(net, Xb, task);
Y = A{end};
m = size(Xb,2);

switch task
    case 'classification'
        ceTotal = -sum(sum(Tb .* log(Y + 1e-12)));
        dZ = (Y - Tb);
        lossOut = ceTotal;
        count = m;
    case 'regression'
        err = Y - Tb;
        lossOut = mean(err.^2, 'all');
        dZ = err;
        count = m;
    otherwise
        error('Unknown task: %s', task);
end

L = numel(net.W);
grads = zeroGradsLike(net);
if normalize
    scale = 1 / m;
else
    scale = 1;
end

for l = L:-1:1
    grads.dW{l} = (dZ * A{l}') * scale;
    grads.db{l} = sum(dZ,2) * scale;
    if l > 1
        dAprev = net.W{l}' * dZ;
        dZ = dAprev .* reluDeriv(Z{l-1});
    end
end
end

function [A, Z] = forwardPass(net, X, task)
L = numel(net.W);
A = cell(L+1,1);
Z = cell(L,1);
A{1} = X;
for l = 1:L
    Z{l} = net.W{l} * A{l} + net.b{l};
    if l < L
        A{l+1} = relu(Z{l});
    else
        if strcmp(task, 'classification')
            A{l+1} = softmaxCols(Z{l});
        else
            A{l+1} = Z{l};
        end
    end
end
end

function out = relu(x)
out = max(0, x);
end

function d = reluDeriv(x)
d = double(x > 0);
end

function S = softmaxCols(Z)
Zs = Z - max(Z, [], 1);
E = exp(Zs);
S = E ./ sum(E, 1);
end

function net = sgdmUpdate(net, grads, lr, momentum)
L = numel(net.W);
for l = 1:L
    net.vW{l} = momentum * net.vW{l} - lr * grads.dW{l};
    net.vb{l} = momentum * net.vb{l} - lr * grads.db{l};
    net.W{l} = net.W{l} + net.vW{l};
    net.b{l} = net.b{l} + net.vb{l};
end
end

function g = zeroGradsLike(net)
L = numel(net.W);
g.dW = cell(L,1);
g.db = cell(L,1);
for l = 1:L
    g.dW{l} = zeros(size(net.W{l}));
    g.db{l} = zeros(size(net.b{l}));
end
end

function g = addGrads(g1, g2)
L = numel(g1.dW);
g = g1;
for l = 1:L
    g.dW{l} = g1.dW{l} + g2.dW{l};
    g.db{l} = g1.db{l} + g2.db{l};
end
end

function g = scaleGrads(g, scalar)
L = numel(g.dW);
for l = 1:L
    g.dW{l} = g.dW{l} * scalar;
    g.db{l} = g.db{l} * scalar;
end
end

function chunks = splitIndices(N, P)
chunks = cell(P,1);
edges = round(linspace(0, N, P+1));
for p = 1:P
    s = edges(p) + 1;
    e = edges(p+1);
    if s <= e
        chunks{p} = s:e;
    else
        chunks{p} = [];
    end
end
end

function acc = classificationAccuracy(net, X, T)
[A, ~] = forwardPass(net, X, 'classification');
[~, pred] = max(A{end}, [], 1);
[~, truth] = max(T, [], 1);
acc = mean(pred == truth);
end

function yhat = predictRegression(net, X)
[A, ~] = forwardPass(net, X, 'regression');
yhat = A{end};
end

function e = calcRmse(pred, truth)
e = sqrt(mean((pred - truth).^2));
end

function P = pickWorkerCount()
cores = feature('numcores');
P = min(4, max(2, cores - 1));
end
