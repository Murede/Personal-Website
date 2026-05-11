clear; clc;
rng(42); % fixed seed so I can get repeatable results

% Assignment flow with only the 4 required separated functions:
% 1) loadDataset
% 2) designNetworkArchitecture
% 3) trainDesignedNetworks
% 4) displayPerformance

data = loadDataset('car.data');
[nets, opts] = designNetworkArchitecture(data);
results = trainDesignedNetworks(data, nets, opts);
displayPerformance(results);

