function displayPerformance(results)
% displayPerformance
% Final reporting in one place so output is easy to read.

fprintf('Single CPU - Final Train Accuracy: %.2f%%\n', 100 * results.class.trainAccSingle);
fprintf('Single CPU - Final Test Accuracy : %.2f%%\n', 100 * results.class.testAccSingle);
fprintf('Single CPU - Total Train Time    : %.3f sec\n', results.class.histSingle.totalTime);
fprintf('Single CPU - Avg Time / Epoch    : %.3f sec\n', mean(results.class.histSingle.epochTimes));

fprintf('\n-- Bonus (Multi-CPU) --\n');
fprintf('Requested workers P: %d\n', results.bonus.P);
if results.bonus.ran
    fprintf('Multi CPU  - Final Train Accuracy: %.2f%%\n', 100 * results.class.trainAccMulti);
    fprintf('Multi CPU  - Final Test Accuracy : %.2f%%\n', 100 * results.class.testAccMulti);
    fprintf('Multi CPU  - Total Train Time    : %.3f sec\n', results.class.histMulti.totalTime);
    fprintf('Multi CPU  - Avg Time / Epoch    : %.3f sec\n', mean(results.class.histMulti.epochTimes));
    fprintf('Comparison - Single avg epoch: %.3f sec | Multi avg epoch: %.3f sec\n', ...
        mean(results.class.histSingle.epochTimes), mean(results.class.histMulti.epochTimes));
else
    fprintf('Bonus run skipped: %s\n', results.bonus.error);
end

fprintf('\nRegression - Train RMSE: %.4f\n', results.reg.rmseTrain);
fprintf('Regression - Test RMSE : %.4f\n', results.reg.rmseTest);
fprintf('Regression - Total Time: %.3f sec\n', results.reg.hist.totalTime);

fprintf('\nDone. Script completed all required parts.\n');
end
