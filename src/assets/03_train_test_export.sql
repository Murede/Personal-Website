-- AISE3010 Final Project
-- Deterministic train/test split and export prep.
--
-- Project id used below: `aise3010project-493223`
-- Replace only `your_bucket_name` if you later export to GCS.

CREATE OR REPLACE TABLE `aise3010project-493223.instacart_ml.reorder_prediction_train` AS
SELECT *
FROM `aise3010project-493223.instacart_ml.reorder_prediction_features`
WHERE MOD(ABS(FARM_FINGERPRINT(CAST(order_id AS STRING))), 10) < 8;

CREATE OR REPLACE TABLE `aise3010project-493223.instacart_ml.reorder_prediction_test` AS
SELECT *
FROM `aise3010project-493223.instacart_ml.reorder_prediction_features`
WHERE MOD(ABS(FARM_FINGERPRINT(CAST(order_id AS STRING))), 10) >= 8;

SELECT 'train' AS split_name, COUNT(*) AS row_count
FROM `aise3010project-493223.instacart_ml.reorder_prediction_train`
UNION ALL
SELECT 'test', COUNT(*)
FROM `aise3010project-493223.instacart_ml.reorder_prediction_test`;

-- Run these EXPORT statements only after creating a Google Cloud Storage bucket.
-- If you stay in BigQuery Sandbox and cannot export directly, use the
-- BigQuery UI "Save results" option to download CSV files manually.

EXPORT DATA OPTIONS (
  uri = 'gs://your_bucket_name/instacart_reorder_prediction_train/*.csv',
  format = 'CSV',
  overwrite = true,
  header = true
) AS
SELECT * FROM `aise3010project-493223.instacart_ml.reorder_prediction_train`;

EXPORT DATA OPTIONS (
  uri = 'gs://your_bucket_name/instacart_reorder_prediction_test/*.csv',
  format = 'CSV',
  overwrite = true,
  header = true
) AS
SELECT * FROM `aise3010project-493223.instacart_ml.reorder_prediction_test`;
