ALTER TABLE BANK_INFO_TABLE ADD COLUMN tsvector_bank_column tsvector;


UPDATE BANK_INFO_TABLE 
SET tsvector_bank_column = to_tsvector('english',
    coalesce(BANK_NAME, '') || ' ' ||
    coalesce(BANK_FAX_NUMBER, '') || ' ' ||
    coalesce(BANK_ADDRESS, '') || ' ' ||
    coalesce(BANK_MAIN_BANK, '') || ' ' ||
    coalesce(BANK_COUNTRY, '') || ' ' ||
    coalesce(BANK_STATE, '') || ' ' ||
    coalesce(BANK_CITY, '') || ' ' ||
    coalesce(BANK_ZIPCODE, '') || ' ' ||
    coalesce(BANK_PHONE, '') || ' ' ||
    coalesce(BANK_EMAIL, '')
);

CREATE INDEX index_on_bank_tsvector ON BANK_INFO_TABLE USING GIN (tsvector_bank_column);


CREATE OR REPLACE FUNCTION bank_tsvector_update_function() RETURNS trigger AS $$
begin
    new.tsvector_bank_column := to_tsvector('english', 
    coalesce(new.BANK_NAME, '') || ' ' ||
    coalesce(new.BANK_FAX_NUMBER, '') || ' ' ||
    coalesce(new.BANK_ADDRESS, '') || ' ' ||
    coalesce(new.BANK_MAIN_BANK, '') || ' ' ||
    coalesce(new.BANK_COUNTRY, '') || ' ' ||
    coalesce(new.BANK_STATE, '') || ' ' ||
    coalesce(new.BANK_CITY, '') || ' ' ||
    coalesce(new.BANK_ZIPCODE, '') || ' ' ||
    coalesce(new.BANK_PHONE, '') || ' ' ||
    coalesce(new.BANK_EMAIL, '')
);

    RETURN new;
end
$$ LANGUAGE plpgsql;


CREATE TRIGGER bank_tsvector_update_trigger
BEFORE INSERT OR UPDATE ON BANK_INFO_TABLE
FOR EACH ROW
EXECUTE PROCEDURE bank_tsvector_update_function();