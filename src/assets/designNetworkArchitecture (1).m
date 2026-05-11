function [nets, opts] = designNetworkArchitecture(data)
% designNetworkArchitecture
% Network architecture + hyperparameters are separated here.

% classification net: 4 hidden layers (assignment asks at least 3)
classLayers = [data.classInputDim, 48, 32, 24, 16, 4];
nets.classInit = initMLP(classLayers);

% regression net: 3 hidden layers
regLayers = [data.regInputDim, 32, 16, 8, 1];
nets.regInit = initMLP(regLayers);

opts.class.epochs = 90;
opts.class.batchSize = 64;
opts.class.lr = 0.03;
opts.class.momentum = 0.9; % SGDM
opts.class.verboseEvery = 10;

opts.reg.epochs = 120;
opts.reg.batchSize = 64;
opts.reg.lr = 0.02;
opts.reg.momentum = 0.9; % SGDM
opts.reg.verboseEvery = 15;
end

function net = initMLP(layerSizes)
L = numel(layerSizes) - 1;
net.W = cell(L,1);
net.b = cell(L,1);
net.vW = cell(L,1);
net.vb = cell(L,1);

for l = 1:L
    fanIn = layerSizes(l);
    fanOut = layerSizes(l+1);
    net.W{l} = randn(fanOut, fanIn) * sqrt(2/fanIn);
    net.b{l} = zeros(fanOut,1);
    net.vW{l} = zeros(fanOut, fanIn);
    net.vb{l} = zeros(fanOut,1);
end
end
