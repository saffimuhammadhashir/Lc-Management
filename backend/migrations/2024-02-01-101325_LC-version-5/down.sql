-- Drop the trigger
DROP TRIGGER IF EXISTS bank_tsvector_update_trigger ON BANK_INFO_TABLE;

-- Revert the function creation
DROP FUNCTION IF EXISTS bank_tsvector_update_function();

-- Revert the index creation
DROP INDEX IF EXISTS index_on_bank_tsvector;

-- Revert the column addition
ALTER TABLE BANK_INFO_TABLE DROP COLUMN IF EXISTS tsvector_bank_column;
