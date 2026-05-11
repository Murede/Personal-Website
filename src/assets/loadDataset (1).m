function data = loadDataset(dataFile)
% loadDataset
% This function loads and preprocesses the provided car dataset.
% I kept everything in one place so main.m stays clean.

if ~isfile(dataFile)
    error('Could not find %s in current folder.', dataFile);
end

fid = fopen(dataFile, 'r');
if fid < 0
    error('Could not open %s.', dataFile);
end
cleaner = onCleanup(@() fclose(fid));
C = textscan(fid, '%s%s%s%s%s%s%s', 'Delimiter', ',', 'CollectOutput', true);
raw = C{1};

% ---------- Classification data ----------
Xclass = encodeFeatures(raw(:,1:6), [1 2 3 4 5 6]);
yclass = encodeClass(raw(:,7));
Tclass = oneHot(yclass, 4);
[trC, teC] = stratifiedSplit(yclass, 0.8);

data.XcTrain = Xclass(:, trC);
data.TcTrain = Tclass(:, trC);
data.XcTest  = Xclass(:, teC);
data.TcTest  = Tclass(:, teC);

% ---------- Regression data ----------
% Regression target is numeric doors value. I remove doors from input.
Xreg = encodeFeatures(raw(:,1:6), [1 2 4 5 6]);
yreg = mapDoors(raw(:,3));
[trR, teR] = randomSplit(numel(yreg), 0.8);

data.XrTrain = Xreg(:, trR);
data.yrTrain = yreg(trR);
data.XrTest  = Xreg(:, teR);
data.yrTest  = yreg(teR);

[data.yTrainNorm, data.yMu, data.ySigma] = zscoreVec(data.yrTrain);
data.yTestNorm = (data.yrTest - data.yMu) / data.ySigma;

data.classInputDim = size(data.XcTrain,1);
data.regInputDim = size(data.XrTrain,1);
end

function X = encodeFeatures(raw6, featureIds)
buyingLevels = {'low','med','high','vhigh'};
maintLevels = {'low','med','high','vhigh'};
doorsLevels = {'2','3','4','5more'};
personLevels = {'2','4','more'};
lugLevels = {'small','med','big'};
safetyLevels = {'low','med','high'};
levelSets = {buyingLevels, maintLevels, doorsLevels, personLevels, lugLevels, safetyLevels};

N = size(raw6,1);
dims = 0;
for k = 1:numel(featureIds)
    dims = dims + numel(levelSets{featureIds(k)});
end
X = zeros(dims, N);

rowStart = 1;
for k = 1:numel(featureIds)
    fid = featureIds(k);
    levels = levelSets{fid};
    oh = oneHotLevels(raw6(:,fid), levels);
    rows = size(oh,1);
    X(rowStart:rowStart+rows-1, :) = oh;
    rowStart = rowStart + rows;
end
end

function y = encodeClass(classCol)
levels = {'unacc','acc','good','vgood'};
N = numel(classCol);
y = zeros(1, N);
for i = 1:N
    idx = find(strcmp(classCol{i}, levels), 1);
    if isempty(idx)
        error('Unexpected class token: %s', classCol{i});
    end
    y(i) = idx;
end
end

function y = mapDoors(doorsCol)
N = numel(doorsCol);
y = zeros(1,N);
for i = 1:N
    switch doorsCol{i}
        case '2'
            y(i) = 2;
        case '3'
            y(i) = 3;
        case '4'
            y(i) = 4;
        case '5more'
            y(i) = 5;
        otherwise
            error('Unexpected doors token: %s', doorsCol{i});
    end
end
end

function oh = oneHotLevels(col, levels)
N = numel(col);
K = numel(levels);
oh = zeros(K, N);
for i = 1:N
    idx = find(strcmp(col{i}, levels), 1);
    if isempty(idx)
        error('Unexpected category: %s', col{i});
    end
    oh(idx, i) = 1;
end
end

function T = oneHot(y, K)
N = numel(y);
T = zeros(K, N);
for i = 1:N
    T(y(i), i) = 1;
end
end

function [trainIdx, testIdx] = stratifiedSplit(y, trainRatio)
classes = unique(y);
trainIdx = [];
testIdx = [];
for c = classes
    idx = find(y == c);
    idx = idx(randperm(numel(idx)));
    nTrain = max(1, round(trainRatio * numel(idx)));
    trainIdx = [trainIdx, idx(1:nTrain)]; %#ok<AGROW>
    testIdx = [testIdx, idx(nTrain+1:end)]; %#ok<AGROW>
end
trainIdx = trainIdx(randperm(numel(trainIdx)));
testIdx = testIdx(randperm(numel(testIdx)));
end

function [trainIdx, testIdx] = randomSplit(N, trainRatio)
idx = randperm(N);
nTrain = round(trainRatio * N);
trainIdx = idx(1:nTrain);
testIdx = idx(nTrain+1:end);
end

function [z, mu, sigma] = zscoreVec(x)
mu = mean(x);
sigma = std(x);
if sigma < 1e-12
    sigma = 1;
end
z = (x - mu) / sigma;
end
