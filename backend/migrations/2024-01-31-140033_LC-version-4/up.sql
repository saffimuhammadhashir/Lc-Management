ALTER TABLE CUSTOMER_INFO_TABLE ADD COLUMN tsvector_customer_column tsvector;


UPDATE CUSTOMER_INFO_TABLE 
SET tsvector_customer_column = to_tsvector('english',
     coalesce(customer_fax, '') || ' ' ||
    coalesce(customer_full_name, '') || ' ' ||
    coalesce(customer_address, '') || ' ' ||
    coalesce(customer_code, '') || ' ' ||
    coalesce(customer_country, '') || ' ' ||
    coalesce(customer_states, '') || ' ' ||
    coalesce(customer_city, '') || ' ' ||
    coalesce(customer_forwarder_shipper_bank, '') || ' ' ||
    coalesce(customer_default_preparer, '') || ' ' ||
    coalesce(customer_customer_procedures, '') || ' ' ||
    coalesce(customer_zipcode, '') || ' ' ||
    coalesce(customer_phone, '') || ' ' ||
    coalesce(customer_mailto, '') || ' ' ||
    coalesce(customer_currency, '') || ' ' ||
    coalesce(customer_type, '') || ' ' ||
    coalesce(customer_toll_free, '') || ' ' ||
    coalesce(customer_affiliated_with, '') || ' ' ||
    coalesce(customer_uan, '') || ' ' ||
    coalesce(customer_charges, '') || ' ' ||
    coalesce(customer_fedex_account_no, '') || ' ' ||
    coalesce(customer_dhl_account_no, '') || ' ' ||
    coalesce(customer_ups_account_no, '') || ' ' ||
    coalesce(customer_account_number, '') || ' ' ||
    coalesce(customer_aba, '') || ' ' ||
    coalesce(customer_bank_name, '') || ' ' ||
    coalesce(customer_payee_name, '') || ' ' ||
    coalesce(customer_remarks, '')

);

CREATE INDEX index_on_customer_tsvector ON CUSTOMER_INFO_TABLE USING GIN (tsvector_customer_column);


CREATE OR REPLACE FUNCTION customer_tsvector_update_function() RETURNS trigger AS $$
begin
    new.tsvector_customer_column := to_tsvector('english', 
    coalesce(new.customer_fax, '') || ' ' ||
    coalesce(new.customer_full_name, '') || ' ' ||
    coalesce(new.customer_address, '') || ' ' ||
    coalesce(new.customer_code, '') || ' ' ||
    coalesce(new.customer_country, '') || ' ' ||
    coalesce(new.customer_states, '') || ' ' ||
    coalesce(new.customer_city, '') || ' ' ||
    coalesce(new.customer_forwarder_shipper_bank, '') || ' ' ||
    coalesce(new.customer_default_preparer, '') || ' ' ||
    coalesce(new.customer_customer_procedures, '') || ' ' ||
    coalesce(new.customer_zipcode, '') || ' ' ||
    coalesce(new.customer_phone, '') || ' ' ||
    coalesce(new.customer_mailto, '') || ' ' ||
    coalesce(new.customer_currency, '') || ' ' ||
    coalesce(new.customer_type, '') || ' ' ||
    coalesce(new.customer_toll_free, '') || ' ' ||
    coalesce(new.customer_affiliated_with, '') || ' ' ||
    coalesce(new.customer_uan, '') || ' ' ||
    coalesce(new.customer_charges, '') || ' ' ||
    coalesce(new.customer_fedex_account_no, '') || ' ' ||
    coalesce(new.customer_dhl_account_no, '') || ' ' ||
    coalesce(new.customer_ups_account_no, '') || ' ' ||
    coalesce(new.customer_account_number, '') || ' ' ||
    coalesce(new.customer_aba, '') || ' ' ||
    coalesce(new.customer_bank_name, '') || ' ' ||
    coalesce(new.customer_payee_name, '') || ' ' ||
    coalesce(new.customer_remarks, '')
);

    RETURN new;
end
$$ LANGUAGE plpgsql;


CREATE TRIGGER customer_tsvector_update_trigger
BEFORE INSERT OR UPDATE ON CUSTOMER_INFO_TABLE
FOR EACH ROW
EXECUTE PROCEDURE customer_tsvector_update_function();