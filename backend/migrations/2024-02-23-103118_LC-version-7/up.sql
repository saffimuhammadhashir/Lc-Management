-- Your SQL goes here
INSERT INTO "public"."bank_info_table" ("bank_id","bank_name","bank_fax_number","bank_address","bank_main_bank","bank_country","bank_state","bank_city","bank_zipcode","bank_email","bank_phone","tsvector_bank_column") VALUES (1,'Sherry Bank','123','Sherry Bank','Sherry Bank','Sherry Bank','Sherry Bank','Sherry Bank','123','123','123','''123'':3,14,15,16 ''bank'':2,5,7,9,11,13 ''sherri'':1,4,6,8,10,12');

INSERT INTO "public"."customer_info_table" ("customer_id","customer_fax","customer_full_name","customer_address","customer_code","customer_country","customer_states","customer_city","customer_forwarder_shipper_bank","customer_default_preparer","customer_customer_procedures","customer_zipcode","customer_phone","customer_mailto","customer_type","customer_currency","customer_toll_free","customer_affiliated_with","customer_uan","customer_charges","customer_fedex_account_no","customer_dhl_account_no","customer_ups_account_no","customer_account_number","customer_aba","customer_bank_name","customer_payee_name","customer_remarks","customer_contact_name","customer_contact_phone","customer_contact_email","tsvector_customer_column") VALUES (1,NULL,'Sadaat','Islamabad',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'''islamabad'':2 ''sadaat'':1');

INSERT INTO "public"."date_info_table" ("date_id","date_date_received","date_dte_snt_to_legalize","date_legalize_ret_dte","date_maturity_date","date_expiry_date","date_latest_shipment_date","date_date_sent_inspection","date_ship_date","date_awb_bl_recv_date","date_date_paid","date_date_sent_to_bank","date_next_trace_dt","date_last_update","date_issue_date","date_invoice_date","date_1st_flight_date","date_2nd_flight_date") VALUES 
(1,'2024-02-23',NULL,NULL,NULL,'2024-02-01','2024-02-01',NULL,'2024-02-01',NULL,NULL,NULL,NULL,'2024-02-23',NULL,'2024-02-01',NULL,NULL);

INSERT INTO "public"."courier_info_table" ("courier_id","courier_no_of_days_to_present","courier_issuing_bank_courier","courier_issuing_bank_courier_courier_co","courier_latest_presentation_date","courier_domestic_bank_courier","courier_domestic_bank_courier_courier_co","courier_target_date_to_complete","courier_applicant_courier","courier_applicant_courier_courier_co","courier_actual_date_completed","courier_2nd_appt_courier","courier_2nd_appt_courier_courier_co","courier_pc_completed","courier_inbound_courier","courier_inbound_courier_courier_co","courier_date_reimbursment_filed","courier_inbound_rtn_courier","courier_inbound_rtn_courier_courier_co","courier_reimbursment_via","courier_outbound_rtn_courier","courier_outbound_rtn_courier_courier_co","courier_target_paid_date","courier_other_courier","courier_other_courier_courier_co") VALUES 
(1,'','','',NULL,'','',NULL,'','',NULL,'','',NULL,'','',NULL,'','',NULL,'','',NULL,'','');

-- INSERT INTO "public"."lc_info_table" ("lc_location_code","lc_id","lc_preparer","lc_pk_preparer","lc_pc_prep","lc_pc_chker","lc_bill_to","lc_customer_id","lc_status","lc_special_instructions","lc_amount","lc_tolerance","lc_time_draft","lc_number_of_days","lc_country","lc_reference_number","lc_balance","lc_dp","lc_ip","lc_previous_lc_draws","lc_returning_balance","lc_currency","lc_fn","lc_charges","lc_add_charges","lc_fees_due","lc_cargo_ins_cost","lc_cargo_ins_sell_price","lc_rhdc_invoice_for_customer","lc_rhdc_invoice_for_fn_banks","lc_advising_bank_id","lc_advising_bank_ref","lc_issuing_bank_id","lc_issuing_bank_ref","lc_negotiating_bank_id","lc_commission_type","lc_tranche_count","lc_acceptan","lc_doc_prep","lc_confirm","lc_other","lc_discount","lc_phone_forwarder_shipper","lc_pending_inf_tracing_status_in_pc_or_void","lc_net_paid","lc_bank_charges","lc_negotiating_bank_reference","lc_applicant_name","lc_third_party_shipper_name","lc_applicant_address","lc_third_party_shipper_address","lc_applicant_fax","lc_drawee","lc_load_on_board","lc_for_transport_to","lc_tenor_of_draft","lc_drawn_under_statement_of_draft","lc_large_merchandise_description_invoice","lc_sales_terms","lc_location_of_sales_terms","lc_consign_to_party","lc_freight","lc_collect","lc_notify_party","lc_short_merchandise_description_for_bl","lc_short_merchandise_description_for_co","lc_global_field","lc_limited_certifications","lc_awd_or_bl_merchandise_description","lc_insurance_merchandise_description","lc_shipping_advice_merchandise_description","lc_value_for_carriage","lc_value_for_customers","lc_gross_weight","lc_measurements","lc_net_weight","lc_chargeable_weight","lc_weight_in_lbs","lc_other_charges_due_agent","lc_tl_forwarder_name","lc_forwarder_address","lc_partial_or_comp_shipment","lc_carrier_name","lc_vessel_name","lc_place_of_delivery_by","lc_for_transhipment_to","lc_type_of_move","lc_place_of_receipt_by","lc_other_chgs_due_carrier","lc_freight_charge","lc_insurance_chg","lc_insurance_percentage","lc_insurance_amt","lc_invoice_num","lc_mawb_no","lc_mobl_no","lc_hawb_hobl_no","lc_marks_and_numbers","lc_no_of_pieces","lc_dimensions","lc_po_no","lc_city_state_of_origin","lc_country_of_origin","lc_1st_flight_number","lc_2nd_flight_number","lc_1st_to_city_code","lc_1st_to_city_code_value","lc_insurance_company_name","lc_insurance_company_address","lc_insurance_company_fax","lc_other_receipt_name","lc_other_receipt_address","lc_other_receipt_fax","lc_other_courier_name","lc_other_courier_add","lc_type","lc_amount_of_draw","lc_master_id","lc_secondapplicant_header","lc_secondapplicant_name","lc_secondapplicant_address","lc_date_id","lc_courier_id","tsvector_lc_column") VALUES 
-- (10,20,'Sherry','Sherry','Sherry','Sherry','',1,'','',NULL,'','','','2','123','','','','','','3','','','','','','','','',1,'123',1,'123',NULL,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',123,'','','','','','','','','','','','','','','','','','','','','','LC','123',20,'','','',5,4,'''1'':7,11,13 ''10'':1 ''123'':9,12,14,15,17 ''2'':8 ''20'':2,18 ''3'':10 ''lc'':16 ''sherri'':3,4,5,6');



INSERT INTO "public"."lc_info_table" ("lc_location_code","lc_id","lc_preparer","lc_pk_preparer","lc_pc_prep","lc_pc_chker","lc_bill_to","lc_customer_id","lc_status","lc_special_instructions","lc_amount","lc_tolerance","lc_previous_lc_draws","lc_time_draft","lc_number_of_days","lc_country","lc_reference_number","lc_balance","lc_dp","lc_ip","lc_previous_lc_draws_running","lc_returning_balance","lc_currency","lc_fn","lc_charges","lc_add_charges","lc_fees_due","lc_cargo_ins_cost","lc_cargo_ins_sell_price","lc_rhdc_invoice_for_customer","lc_rhdc_invoice_for_fn_banks","lc_advising_bank_id","lc_advising_bank_ref","lc_issuing_bank_id","lc_issuing_bank_ref","lc_negotiating_bank_id","lc_commission_type","lc_tranche_count","lc_acceptan","lc_doc_prep","lc_confirm","lc_other","lc_discount","lc_phone_forwarder_shipper","lc_pending_inf_tracing_status_in_pc_or_void","lc_net_paid","lc_bank_charges","lc_negotiating_bank_reference","lc_applicant_name","lc_third_party_shipper_name","lc_applicant_address","lc_third_party_shipper_address","lc_applicant_fax","lc_drawee","lc_load_on_board","lc_for_transport_to","lc_tenor_of_draft","lc_drawn_under_statement_of_draft","lc_large_merchandise_description_invoice","lc_sales_terms","lc_location_of_sales_terms","lc_consign_to_party","lc_freight","lc_notify_party","lc_short_merchandise_description_for_bl","lc_short_merchandise_description_for_co","lc_global_field","lc_limited_certifications","lc_awd_or_bl_merchandise_description","lc_insurance_merchandise_description","lc_shipping_advice_merchandise_description","lc_value_for_carriage","lc_value_for_customers","lc_gross_weight","lc_measurements","lc_net_weight","lc_chargeable_weight","lc_weight_in_lbs","lc_other_charges_due_agent","lc_tl_forwarder_name","lc_forwarder_address","lc_partial_or_comp_shipment","lc_carrier_name","lc_vessel_name","lc_place_of_delivery_by","lc_for_transhipment_to","lc_type_of_move","lc_place_of_receipt_by","lc_other_chgs_due_carrier","lc_freight_charge","lc_insurance_chg","lc_insurance_percentage","lc_insurance_amt","lc_invoice_num","lc_mawb_no","lc_mobl_no","lc_hawb_hobl_no","lc_marks_and_numbers","lc_no_of_pieces","lc_dimensions","lc_po_no","lc_city_state_of_origin","lc_country_of_origin","lc_1st_flight_number","lc_2nd_flight_number","lc_1st_to_city_code","lc_1st_to_city_code_value","lc_insurance_company_name","lc_insurance_company_address","lc_insurance_company_fax","lc_other_receipt_name","lc_other_receipt_address","lc_other_receipt_fax","lc_other_courier_name","lc_other_courier_add","lc_type","lc_amount_of_draw","lc_master_id","lc_secondapplicant_header","lc_secondapplicant_name","lc_secondapplicant_address","lc_date_id","lc_courier_id","tsvector_lc_column") VALUES 
(10,20,'Sherry','Sherry','Sherry','Sherry','',1,'','',NULL,'','','','','2','123','','','','','','3','','','','','','','','',1,'123',1,'123',NULL,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',123,'','','','','','','','','','','','','','','','','','','','','','LC','123',20,'','','',1,1,'''1'':7,11,13 ''10'':1 ''123'':9,12,14,15,17 ''2'':8 ''20'':2,18 ''3'':10 ''lc'':16 ''sherri'':3,4,5,6');