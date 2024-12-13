-- This file should undo anything in `up.sql`
-- Your SQL goes here

-- Drop the rows inserted into "public"."lc_info_table"
DELETE FROM "public"."lc_info_table" WHERE "lc_id" = 20;

-- Drop the rows inserted into "public"."date_info_table"
DELETE FROM "public"."date_info_table" WHERE "date_id" = 5;

-- Drop the rows inserted into "public"."courier_info_table"
DELETE FROM "public"."courier_info_table" WHERE "courier_id" = 4;

-- Drop the rows inserted into "public"."customer_info_table"
DELETE FROM "public"."customer_info_table" WHERE "customer_id" = 1;

-- Drop the rows inserted into "public"."bank_info_table"
DELETE FROM "public"."bank_info_table" WHERE "bank_id" = 1;
