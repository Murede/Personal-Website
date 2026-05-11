-- AISE3010 Final Project
-- BigQuery setup notes for the Instacart dataset.
--
-- Project id used below: `aise3010project-493223`
-- Create a BigQuery dataset first, for example:
--   project: your_project_id
--   dataset: instacart_raw

-- Required table names:
-- your_project_id.instacart_raw.orders
-- your_project_id.instacart_raw.order_products__prior
-- your_project_id.instacart_raw.order_products__train
-- your_project_id.instacart_raw.products
-- your_project_id.instacart_raw.aisles
-- your_project_id.instacart_raw.departments

-- Suggested upload settings:
-- 1. Source format: CSV
-- 2. Header rows to skip: 1
-- 3. Auto detect schema: enabled
-- 4. Write preference: overwrite if you are re-uploading

-- Quick row count checks after upload.
SELECT 'orders' AS table_name, COUNT(*) AS row_count
FROM `aise3010project-493223.instacart_raw.orders`
UNION ALL
SELECT 'order_products__prior', COUNT(*)
FROM `aise3010project-493223.instacart_raw.order_products__prior`
UNION ALL
SELECT 'order_products__train', COUNT(*)
FROM `aise3010project-493223.instacart_raw.order_products__train`
UNION ALL
SELECT 'products', COUNT(*)
FROM `aise3010project-493223.instacart_raw.products`
UNION ALL
SELECT 'aisles', COUNT(*)
FROM `aise3010project-493223.instacart_raw.aisles`
UNION ALL
SELECT 'departments', COUNT(*)
FROM `aise3010project-493223.instacart_raw.departments`;

-- Quick relationship sanity checks.
SELECT
  COUNT(DISTINCT o.order_id) AS distinct_orders,
  COUNT(DISTINCT op.product_id) AS distinct_products_in_prior,
  COUNT(DISTINCT o.user_id) AS distinct_users
FROM `aise3010project-493223.instacart_raw.orders` o
JOIN `aise3010project-493223.instacart_raw.order_products__prior` op
  ON o.order_id = op.order_id
WHERE o.eval_set = 'prior';
