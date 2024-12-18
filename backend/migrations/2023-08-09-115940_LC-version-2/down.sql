ALTER TABLE LC_INFO_TABLE
DROP CONSTRAINT IF EXISTS fk_lc_issuing_bank;

ALTER TABLE LC_INFO_TABLE
DROP CONSTRAINT IF EXISTS fk_lc_customer;

ALTER TABLE LC_INFO_TABLE
DROP CONSTRAINT IF EXISTS fk_lc_date;

ALTER TABLE LC_INFO_TABLE
DROP CONSTRAINT IF EXISTS fk_lc_courier;

ALTER TABLE CSC_STATES_TABLE
DROP CONSTRAINT IF EXISTS fk_states_countries;

ALTER TABLE CSC_CITY_TABLE
DROP CONSTRAINT IF EXISTS fk_city_countries;

ALTER TABLE CSC_CITY_TABLE
DROP CONSTRAINT IF EXISTS fk_city_states;