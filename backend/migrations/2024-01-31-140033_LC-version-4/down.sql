-- Drop the trigger
DROP TRIGGER IF EXISTS customer_tsvector_update_trigger ON CUSTOMER_INFO_TABLE;

-- Revert the function creation
DROP FUNCTION IF EXISTS customer_tsvector_update_function();

-- Revert the index creation
DROP INDEX IF EXISTS index_on_customer_tsvector;

-- Revert the column addition
ALTER TABLE CUSTOMER_INFO_TABLE DROP COLUMN IF EXISTS tsvector_customer_column;
