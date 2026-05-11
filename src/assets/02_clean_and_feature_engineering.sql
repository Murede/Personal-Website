-- AISE3010 Final Project
-- Build a clean feature table for predicting product reorder in the train set.
--
-- Project id used below: `aise3010project-493223`
-- This script creates:
--   aise3010project-493223.instacart_ml.reorder_prediction_features

CREATE SCHEMA IF NOT EXISTS `aise3010project-493223.instacart_ml`;

CREATE OR REPLACE TABLE `aise3010project-493223.instacart_ml.reorder_prediction_features` AS
WITH prior_orders AS (
  SELECT
    order_id,
    user_id,
    order_number,
    order_dow,
    order_hour_of_day,
    days_since_prior_order
  FROM `aise3010project-493223.instacart_raw.orders`
  WHERE eval_set = 'prior'
),
train_orders AS (
  SELECT
    order_id,
    user_id,
    order_number,
    order_dow,
    order_hour_of_day,
    days_since_prior_order
  FROM `aise3010project-493223.instacart_raw.orders`
  WHERE eval_set = 'train'
),
product_dim AS (
  SELECT
    p.product_id,
    p.product_name,
    p.aisle_id,
    a.aisle,
    p.department_id,
    d.department
  FROM `aise3010project-493223.instacart_raw.products` p
  LEFT JOIN `aise3010project-493223.instacart_raw.aisles` a
    ON p.aisle_id = a.aisle_id
  LEFT JOIN `aise3010project-493223.instacart_raw.departments` d
    ON p.department_id = d.department_id
),
prior_with_users AS (
  SELECT
    po.user_id,
    po.order_id,
    po.order_number,
    po.order_dow,
    po.order_hour_of_day,
    po.days_since_prior_order,
    opp.product_id,
    opp.add_to_cart_order,
    opp.reordered
  FROM prior_orders po
  JOIN `aise3010project-493223.instacart_raw.order_products__prior` opp
    ON po.order_id = opp.order_id
),
user_features AS (
  SELECT
    user_id,
    COUNT(DISTINCT order_id) AS user_prior_order_count,
    COUNT(*) AS user_prior_item_count,
    COUNT(DISTINCT product_id) AS user_distinct_product_count,
    AVG(COALESCE(days_since_prior_order, 0)) AS user_avg_days_since_prior_order,
    AVG(order_hour_of_day) AS user_avg_order_hour,
    AVG(order_dow) AS user_avg_order_dow,
    AVG(add_to_cart_order) AS user_avg_add_to_cart_order
  FROM prior_with_users
  GROUP BY user_id
),
product_features AS (
  SELECT
    product_id,
    COUNT(*) AS product_prior_purchase_count,
    COUNT(DISTINCT user_id) AS product_distinct_user_count,
    AVG(reordered) AS product_reorder_rate,
    AVG(add_to_cart_order) AS product_avg_add_to_cart_order
  FROM prior_with_users
  GROUP BY product_id
),
user_product_features AS (
  SELECT
    user_id,
    product_id,
    COUNT(*) AS user_product_prior_order_count,
    MAX(order_number) AS user_product_last_order_number,
    AVG(add_to_cart_order) AS user_product_avg_add_to_cart_order,
    AVG(reordered) AS user_product_reorder_rate
  FROM prior_with_users
  GROUP BY user_id, product_id
),
aisle_features AS (
  SELECT
    pd.aisle_id,
    COUNT(*) AS aisle_prior_purchase_count,
    AVG(pwu.reordered) AS aisle_reorder_rate
  FROM prior_with_users pwu
  JOIN product_dim pd
    ON pwu.product_id = pd.product_id
  GROUP BY pd.aisle_id
),
department_features AS (
  SELECT
    pd.department_id,
    COUNT(*) AS department_prior_purchase_count,
    AVG(pwu.reordered) AS department_reorder_rate
  FROM prior_with_users pwu
  JOIN product_dim pd
    ON pwu.product_id = pd.product_id
  GROUP BY pd.department_id
),
train_base AS (
  SELECT
    t.order_id,
    t.user_id,
    t.order_number,
    t.order_dow,
    t.order_hour_of_day,
    COALESCE(t.days_since_prior_order, 0) AS days_since_prior_order,
    opt.product_id,
    opt.add_to_cart_order,
    opt.reordered
  FROM train_orders t
  JOIN `aise3010project-493223.instacart_raw.order_products__train` opt
    ON t.order_id = opt.order_id
)
SELECT
  tb.order_id,
  tb.user_id,
  tb.product_id,
  pd.product_name,
  pd.aisle,
  pd.department,
  tb.order_number,
  tb.order_dow,
  tb.order_hour_of_day,
  tb.days_since_prior_order,
  tb.add_to_cart_order,
  COALESCE(uf.user_prior_order_count, 0) AS user_prior_order_count,
  COALESCE(uf.user_prior_item_count, 0) AS user_prior_item_count,
  COALESCE(uf.user_distinct_product_count, 0) AS user_distinct_product_count,
  COALESCE(uf.user_avg_days_since_prior_order, 0) AS user_avg_days_since_prior_order,
  COALESCE(uf.user_avg_order_hour, 0) AS user_avg_order_hour,
  COALESCE(uf.user_avg_order_dow, 0) AS user_avg_order_dow,
  COALESCE(uf.user_avg_add_to_cart_order, 0) AS user_avg_add_to_cart_order,
  COALESCE(pf.product_prior_purchase_count, 0) AS product_prior_purchase_count,
  COALESCE(pf.product_distinct_user_count, 0) AS product_distinct_user_count,
  COALESCE(pf.product_reorder_rate, 0) AS product_reorder_rate,
  COALESCE(pf.product_avg_add_to_cart_order, 0) AS product_avg_add_to_cart_order,
  COALESCE(af.aisle_prior_purchase_count, 0) AS aisle_prior_purchase_count,
  COALESCE(af.aisle_reorder_rate, 0) AS aisle_reorder_rate,
  COALESCE(df.department_prior_purchase_count, 0) AS department_prior_purchase_count,
  COALESCE(df.department_reorder_rate, 0) AS department_reorder_rate,
  tb.reordered
FROM train_base tb
LEFT JOIN product_dim pd
  ON tb.product_id = pd.product_id
LEFT JOIN user_features uf
  ON tb.user_id = uf.user_id
LEFT JOIN product_features pf
  ON tb.product_id = pf.product_id
LEFT JOIN aisle_features af
  ON pd.aisle_id = af.aisle_id
LEFT JOIN department_features df
  ON pd.department_id = df.department_id;

-- Optional validation query.
SELECT
  COUNT(*) AS total_rows,
  SUM(reordered) AS positive_class_rows,
  ROUND(AVG(reordered), 4) AS positive_class_rate
FROM `aise3010project-493223.instacart_ml.reorder_prediction_features`;
