// @generated automatically by Diesel CLI.

pub mod sql_types {
    #[derive(diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "tsvector", schema = "pg_catalog"))]
    pub struct Tsvector;
}

diesel::table! {
    admin_table (admin_username) {
        #[max_length = 255]
        admin_username -> Varchar,
        #[max_length = 255]
        admin_password -> Varchar,
    }
}

diesel::table! {
    airports (airport_id) {
        airport_id -> Int4,
        airport_code -> Nullable<Text>,
        airport_name -> Nullable<Text>,
        city_name -> Nullable<Text>,
        country_name -> Nullable<Text>,
        country_code -> Nullable<Text>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Tsvector;

    bank_info_table (bank_id) {
        bank_id -> Int4,
        bank_name -> Nullable<Text>,
        bank_fax_number -> Nullable<Text>,
        bank_address -> Nullable<Text>,
        bank_main_bank -> Nullable<Text>,
        bank_country -> Nullable<Text>,
        bank_state -> Nullable<Text>,
        bank_city -> Nullable<Text>,
        bank_zipcode -> Nullable<Text>,
        bank_email -> Nullable<Text>,
        bank_phone -> Nullable<Text>,
        tsvector_bank_column -> Nullable<Tsvector>,
    }
}

diesel::table! {
    courier_info_table (courier_id) {
        courier_id -> Int4,
        courier_no_of_days_to_present -> Nullable<Text>,
        courier_issuing_bank_courier -> Nullable<Text>,
        courier_issuing_bank_courier_courier_co -> Nullable<Text>,
        courier_latest_presentation_date -> Nullable<Date>,
        courier_domestic_bank_courier -> Nullable<Text>,
        courier_domestic_bank_courier_courier_co -> Nullable<Text>,
        courier_target_date_to_complete -> Nullable<Date>,
        courier_applicant_courier -> Nullable<Text>,
        courier_applicant_courier_courier_co -> Nullable<Text>,
        courier_actual_date_completed -> Nullable<Date>,
        courier_2nd_appt_courier -> Nullable<Text>,
        courier_2nd_appt_courier_courier_co -> Nullable<Text>,
        courier_pc_completed -> Nullable<Date>,
        courier_inbound_courier -> Nullable<Text>,
        courier_inbound_courier_courier_co -> Nullable<Text>,
        courier_date_reimbursment_filed -> Nullable<Date>,
        courier_inbound_rtn_courier -> Nullable<Text>,
        courier_inbound_rtn_courier_courier_co -> Nullable<Text>,
        courier_reimbursment_via -> Nullable<Text>,
        courier_outbound_rtn_courier -> Nullable<Text>,
        courier_outbound_rtn_courier_courier_co -> Nullable<Text>,
        courier_target_paid_date -> Nullable<Date>,
        courier_other_courier -> Nullable<Text>,
        courier_other_courier_courier_co -> Nullable<Text>,
    }
}

diesel::table! {
    csc_city_table (id) {
        id -> Int4,
        #[max_length = 255]
        name -> Varchar,
        state_id -> Int4,
        #[max_length = 255]
        state_code -> Varchar,
        country_id -> Int4,
        #[max_length = 2]
        country_code -> Bpchar,
    }
}

diesel::table! {
    csc_countries_table (id) {
        id -> Int4,
        #[max_length = 100]
        name -> Varchar,
        #[max_length = 3]
        iso3 -> Nullable<Bpchar>,
        #[max_length = 2]
        iso2 -> Nullable<Bpchar>,
        #[max_length = 255]
        phonecode -> Nullable<Varchar>,
        #[max_length = 255]
        capital -> Nullable<Varchar>,
        #[max_length = 255]
        currency -> Nullable<Varchar>,
        #[max_length = 255]
        currency_symbol -> Nullable<Varchar>,
    }
}

diesel::table! {
    csc_states_table (id) {
        id -> Int4,
        #[max_length = 255]
        name -> Varchar,
        country_id -> Int4,
        #[max_length = 2]
        country_code -> Bpchar,
        #[max_length = 255]
        fips_code -> Nullable<Varchar>,
        #[max_length = 255]
        iso2 -> Nullable<Varchar>,
    }
}

diesel::table! {
    currency_table (currency_id) {
        currency_id -> Int4,
        currency_name_singular -> Nullable<Text>,
        currency_name_plural -> Nullable<Text>,
        currency_code -> Nullable<Text>,
        currency_symbol -> Nullable<Text>,
        currency_denomination -> Nullable<Text>,
        currency_fraction_name_singular -> Nullable<Text>,
        currency_fraction_name_plural -> Nullable<Text>,
        currency_fraction_unit -> Nullable<Text>,
        currency_delimiter -> Nullable<Text>,
        currency_separator -> Nullable<Text>,
        currency_description -> Nullable<Text>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Tsvector;

    customer_info_table (customer_id) {
        customer_id -> Int4,
        customer_fax -> Nullable<Text>,
        customer_full_name -> Nullable<Text>,
        customer_address -> Nullable<Text>,
        customer_code -> Nullable<Text>,
        customer_country -> Nullable<Text>,
        customer_states -> Nullable<Text>,
        customer_city -> Nullable<Text>,
        customer_forwarder_shipper_bank -> Nullable<Text>,
        customer_default_preparer -> Nullable<Text>,
        customer_customer_procedures -> Nullable<Text>,
        customer_zipcode -> Nullable<Text>,
        customer_phone -> Nullable<Text>,
        customer_mailto -> Nullable<Text>,
        customer_type -> Nullable<Text>,
        customer_currency -> Nullable<Text>,
        customer_toll_free -> Nullable<Text>,
        customer_affiliated_with -> Nullable<Text>,
        customer_uan -> Nullable<Text>,
        customer_charges -> Nullable<Text>,
        customer_fedex_account_no -> Nullable<Text>,
        customer_dhl_account_no -> Nullable<Text>,
        customer_ups_account_no -> Nullable<Text>,
        customer_account_number -> Nullable<Text>,
        customer_aba -> Nullable<Text>,
        customer_bank_name -> Nullable<Text>,
        customer_payee_name -> Nullable<Text>,
        customer_remarks -> Nullable<Text>,
        customer_contact_name -> Nullable<Text>,
        customer_contact_phone -> Nullable<Text>,
        customer_contact_email -> Nullable<Text>,
        tsvector_customer_column -> Nullable<Tsvector>,
    }
}

diesel::table! {
    date_info_table (date_id) {
        date_id -> Int4,
        date_date_received -> Nullable<Date>,
        date_dte_snt_to_legalize -> Nullable<Date>,
        date_legalize_ret_dte -> Nullable<Date>,
        date_maturity_date -> Nullable<Date>,
        date_expiry_date -> Nullable<Date>,
        date_latest_shipment_date -> Nullable<Date>,
        date_date_sent_inspection -> Nullable<Date>,
        date_ship_date -> Nullable<Date>,
        date_awb_bl_recv_date -> Nullable<Date>,
        date_date_paid -> Nullable<Date>,
        date_date_sent_to_bank -> Nullable<Date>,
        date_next_trace_dt -> Nullable<Date>,
        date_last_update -> Nullable<Date>,
        date_issue_date -> Nullable<Date>,
        date_invoice_date -> Nullable<Date>,
        date_1st_flight_date -> Nullable<Date>,
        date_2nd_flight_date -> Nullable<Date>,
    }
}

diesel::table! {
    iata_codes (iata_id) {
        iata_id -> Int4,
        mawb_code -> Nullable<Text>,
        iata_code -> Nullable<Text>,
        airline_name -> Nullable<Text>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Tsvector;

    lc_info_table (lc_id) {
        lc_location_code -> Nullable<Int4>,
        lc_id -> Int4,
        lc_preparer -> Nullable<Text>,
        lc_pk_preparer -> Nullable<Text>,
        lc_pc_prep -> Nullable<Text>,
        lc_pc_chker -> Nullable<Text>,
        lc_bill_to -> Nullable<Text>,
        lc_customer_id -> Nullable<Int4>,
        lc_status -> Nullable<Text>,
        lc_special_instructions -> Nullable<Text>,
        lc_amount -> Nullable<Float8>,
        lc_tolerance -> Nullable<Text>,
        lc_previous_lc_draws -> Nullable<Text>,
        lc_time_draft -> Nullable<Text>,
        lc_number_of_days -> Nullable<Text>,
        lc_country -> Nullable<Text>,
        lc_reference_number -> Nullable<Text>,
        lc_balance -> Nullable<Text>,
        lc_dp -> Nullable<Text>,
        lc_ip -> Nullable<Text>,
        lc_previous_lc_draws_running -> Nullable<Text>,
        lc_returning_balance -> Nullable<Text>,
        lc_currency -> Nullable<Text>,
        lc_fn -> Nullable<Text>,
        lc_charges -> Nullable<Text>,
        lc_add_charges -> Nullable<Text>,
        lc_fees_due -> Nullable<Text>,
        lc_cargo_ins_cost -> Nullable<Text>,
        lc_cargo_ins_sell_price -> Nullable<Text>,
        lc_rhdc_invoice_for_customer -> Nullable<Text>,
        lc_rhdc_invoice_for_fn_banks -> Nullable<Text>,
        lc_advising_bank_id -> Nullable<Int4>,
        lc_advising_bank_ref -> Nullable<Text>,
        lc_issuing_bank_id -> Nullable<Int4>,
        lc_issuing_bank_ref -> Nullable<Text>,
        lc_negotiating_bank_id -> Nullable<Int4>,
        lc_commission_type -> Nullable<Text>,
        lc_tranche_count -> Nullable<Text>,
        lc_acceptan -> Nullable<Text>,
        lc_doc_prep -> Nullable<Text>,
        lc_confirm -> Nullable<Text>,
        lc_other -> Nullable<Text>,
        lc_discount -> Nullable<Text>,
        lc_phone_forwarder_shipper -> Nullable<Text>,
        lc_pending_inf_tracing_status_in_pc_or_void -> Nullable<Text>,
        lc_net_paid -> Nullable<Text>,
        lc_bank_charges -> Nullable<Text>,
        lc_negotiating_bank_reference -> Nullable<Text>,
        lc_applicant_name -> Nullable<Text>,
        lc_third_party_shipper_name -> Nullable<Text>,
        lc_applicant_address -> Nullable<Text>,
        lc_third_party_shipper_address -> Nullable<Text>,
        lc_applicant_fax -> Nullable<Text>,
        lc_drawee -> Nullable<Text>,
        lc_load_on_board -> Nullable<Text>,
        lc_for_transport_to -> Nullable<Text>,
        lc_tenor_of_draft -> Nullable<Text>,
        lc_drawn_under_statement_of_draft -> Nullable<Text>,
        lc_large_merchandise_description_invoice -> Nullable<Text>,
        lc_sales_terms -> Nullable<Text>,
        lc_location_of_sales_terms -> Nullable<Text>,
        lc_consign_to_party -> Nullable<Text>,
        lc_freight -> Nullable<Text>,
        lc_notify_party -> Nullable<Text>,
        lc_short_merchandise_description_for_bl -> Nullable<Text>,
        lc_short_merchandise_description_for_co -> Nullable<Text>,
        lc_global_field -> Nullable<Text>,
        lc_limited_certifications -> Nullable<Text>,
        lc_awd_or_bl_merchandise_description -> Nullable<Text>,
        lc_insurance_merchandise_description -> Nullable<Text>,
        lc_shipping_advice_merchandise_description -> Nullable<Text>,
        lc_value_for_carriage -> Nullable<Text>,
        lc_value_for_customers -> Nullable<Text>,
        lc_gross_weight -> Nullable<Text>,
        lc_measurements -> Nullable<Text>,
        lc_net_weight -> Nullable<Text>,
        lc_chargeable_weight -> Nullable<Text>,
        lc_weight_in_lbs -> Nullable<Text>,
        lc_other_charges_due_agent -> Nullable<Text>,
        lc_tl_forwarder_name -> Nullable<Text>,
        lc_forwarder_address -> Nullable<Text>,
        lc_partial_or_comp_shipment -> Nullable<Text>,
        lc_carrier_name -> Nullable<Text>,
        lc_vessel_name -> Nullable<Text>,
        lc_place_of_delivery_by -> Nullable<Text>,
        lc_for_transhipment_to -> Nullable<Text>,
        lc_type_of_move -> Nullable<Text>,
        lc_place_of_receipt_by -> Nullable<Text>,
        lc_other_chgs_due_carrier -> Nullable<Text>,
        lc_freight_charge -> Nullable<Text>,
        lc_insurance_chg -> Nullable<Text>,
        lc_insurance_percentage -> Nullable<Text>,
        lc_insurance_amt -> Nullable<Text>,
        lc_invoice_num -> Nullable<Int4>,
        lc_mawb_no -> Nullable<Text>,
        lc_mobl_no -> Nullable<Text>,
        lc_hawb_hobl_no -> Nullable<Text>,
        lc_marks_and_numbers -> Nullable<Text>,
        lc_no_of_pieces -> Nullable<Text>,
        lc_dimensions -> Nullable<Text>,
        lc_po_no -> Nullable<Text>,
        lc_city_state_of_origin -> Nullable<Text>,
        lc_country_of_origin -> Nullable<Text>,
        lc_1st_flight_number -> Nullable<Text>,
        lc_2nd_flight_number -> Nullable<Text>,
        lc_1st_to_city_code -> Nullable<Text>,
        lc_1st_to_city_code_value -> Nullable<Text>,
        lc_insurance_company_name -> Nullable<Text>,
        lc_insurance_company_address -> Nullable<Text>,
        lc_insurance_company_fax -> Nullable<Text>,
        lc_other_receipt_name -> Nullable<Text>,
        lc_other_receipt_address -> Nullable<Text>,
        lc_other_receipt_fax -> Nullable<Text>,
        lc_other_courier_name -> Nullable<Text>,
        lc_other_courier_add -> Nullable<Text>,
        lc_type -> Nullable<Text>,
        lc_amount_of_draw -> Nullable<Text>,
        lc_master_id -> Nullable<Int4>,
        lc_secondapplicant_header -> Nullable<Text>,
        lc_secondapplicant_name -> Nullable<Text>,
        lc_secondapplicant_address -> Nullable<Text>,
        lc_date_id -> Nullable<Int4>,
        lc_courier_id -> Nullable<Int4>,
        lc_information_currency -> Nullable<Text>,
        tsvector_lc_column -> Nullable<Tsvector>,
    }
}

diesel::table! {
    select_table (select_table_id) {
        select_table_id -> Int4,
        field_name -> Nullable<Text>,
        field_value -> Nullable<Text>,
    }
}

diesel::joinable!(csc_city_table -> csc_countries_table (country_id));
diesel::joinable!(csc_city_table -> csc_states_table (state_id));
diesel::joinable!(lc_info_table -> bank_info_table (lc_issuing_bank_id));
diesel::joinable!(lc_info_table -> courier_info_table (lc_courier_id));
diesel::joinable!(lc_info_table -> customer_info_table (lc_customer_id));
diesel::joinable!(lc_info_table -> date_info_table (lc_date_id));

diesel::allow_tables_to_appear_in_same_query!(
    admin_table,
    airports,
    bank_info_table,
    courier_info_table,
    csc_city_table,
    csc_countries_table,
    csc_states_table,
    currency_table,
    customer_info_table,
    date_info_table,
    iata_codes,
    lc_info_table,
    select_table,
);
