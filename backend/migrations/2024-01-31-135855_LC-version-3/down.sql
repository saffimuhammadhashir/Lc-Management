-- Drop the trigger
DROP TRIGGER IF EXISTS lc_tsvector_update_trigger ON LC_INFO_TABLE;

-- Revert the function creation
DROP FUNCTION IF EXISTS lc_tsvector_update_function();

-- Revert the index creation
DROP INDEX IF EXISTS index_on_lc_tsvector;

-- Revert the column addition
ALTER TABLE LC_INFO_TABLE DROP COLUMN IF EXISTS tsvector_lc_column;
