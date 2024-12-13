use argon2::{self, Config};
use diesel::sql_types::Text;
use diesel::{prelude::*, sql_query};
use diesel::r2d2::{self, ConnectionManager};
use dotenv::dotenv;
use std::fmt::Error;
use std::error::Error as StandardError;

use std::collections::HashMap;



extern crate diesel_migrations;


// the default folder for migrations
use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations");

//admin connection
use crate::models::admin::Admin;
// use crate::models::courier_info;
use crate::repository::schema::admin_table::dsl::*;

//Customer connection
use crate::models::customer_info::CustomerInfo;
use crate::models::new_customer::NewCustomerInfo;
use crate::repository::schema::customer_info_table::dsl::*;

//Banks connection
use crate::models::bank_info::BankInfo;
use crate::models::new_bank::NewBankInfo;
use crate::repository::schema::bank_info_table::dsl::*;


//Date connection
use crate::models::date_info::DateInfo;
use crate::models::new_date_info::NewDateInfo;
use crate::repository::schema::date_info_table::dsl::*;

//Courier connection
use crate::models::courier_info::CourierInfo;
use crate::models::new_courier_info::NewCourierInfo;
use crate::repository::schema::courier_info_table::dsl::*;


//Select connection
use crate::models::select_fields::SelectFieldTable;
use crate::repository::schema::select_table::dsl::*;

//LC Information connection
use crate::models::lc_info::LcInfo;
use crate::models::new_lc_info::NewLcInfo;
use crate::repository::schema::lc_info_table::dsl::*;

//Currency Connection
use crate::models::currency_model::Currency;
use crate::repository::schema::currency_table::dsl::*;

//Airport Connection
use crate::models::airport_model::AirportModel;
use crate::models::new_airport_model::NewAirportModel;
use crate::repository::schema::airports::dsl::*;

//Iata Codes Connection
use crate::models::iata_model::IataModel;
use crate::models::new_iata_model::NewIataModel;
use crate::repository::schema::iata_codes::dsl::*;


// CSC
use crate::models::csc_country::CSCCountry;
use crate::repository::schema::csc_countries_table::dsl::*;
use crate::models::csc_state::CSCState;
use crate::repository::schema::csc_states_table::dsl::{country_id as csc_state_country_id, *};
use crate::models::csc_city::CSCCity;
use crate::repository::schema::csc_city_table::dsl::{state_id as csc_city_state_id, *};


//Currency Connection
use crate::models::lc_search_full::LcGlobalSearch;
use crate::models::lc_search_bank::LcGlobalSearchBank;
use crate::models::lc_search_customer::LcGlobalSearchCustomer;




use rand::Rng;
const TEXT_ARGON: &str = "$argon2i$v=19$m=4096,t=3,p=1$";

// Custom Functions
pub fn trim_first_two_chars(string: &str) -> &str {
    let len = string.len();
    if len < 2 {
        return string;
    }
    &string[2..len]
}

type DBPool = r2d2::Pool<ConnectionManager<PgConnection>>;

pub struct Database {
    pool: DBPool,
}

impl Database {
    pub fn new() -> Self {
        dotenv().ok();
        // let database_url = "postgresql://lcPostgres:g,Z=P2jtg,Z=P2jt@lcPostgres:5433/mydatabase";
        let database_url = "postgresql://admin:123456@localhost:5433/lc_database";


        // let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        let manager = ConnectionManager::<PgConnection>::new(database_url);
        let pool: DBPool = r2d2::Pool::builder()
            .build(manager)
            .expect("Failed to create pool.");
        Database { pool }
    }

    pub fn run_migrations(&self) -> Result<(), Box<dyn StandardError + Send + Sync + 'static>> {
        dotenv().ok();
        // let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        // let database_url: &str="postgresql://postgres:mypassword@localhost:5432/mydatabase";
        let database_url = "postgresql://admin:123456@localhost:5433/lc_database";


        let mut conn = PgConnection::establish(&database_url).unwrap();
        println!("Migrating...");
        let _result = conn.run_pending_migrations(MIGRATIONS).unwrap();
        println!("result from migration running function {:?}", _result);
        Ok(())
    }

    // ---------------------- Database Operations for Customers ----------------------------------------------------
    pub fn get_customers(&self) -> Vec<CustomerInfo> {
        customer_info_table
            .select(CustomerInfo::as_select())
            .load::<CustomerInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all Customers")
    }

    pub fn create_customer(&self, new_customer: NewCustomerInfo) -> Result<NewCustomerInfo, Error> {
        let customer: NewCustomerInfo = NewCustomerInfo {
            customer_fax: new_customer.customer_fax,
            customer_full_name: new_customer.customer_full_name,
            customer_address: new_customer.customer_address,
            customer_code: new_customer.customer_code,
            customer_country: new_customer.customer_country,
            customer_states: new_customer.customer_states,
            customer_city: new_customer.customer_city,
            customer_forwarder_shipper_bank: new_customer.customer_forwarder_shipper_bank,
            customer_default_preparer: new_customer.customer_default_preparer,
            customer_customer_procedures: new_customer.customer_customer_procedures,
            customer_zipcode: new_customer.customer_zipcode,
            customer_phone: new_customer.customer_phone,
            customer_mailto: new_customer.customer_mailto,
            customer_type: new_customer.customer_type,
            customer_currency: new_customer.customer_currency,
            customer_toll_free: new_customer.customer_toll_free,
            customer_affiliated_with: new_customer.customer_affiliated_with,
            customer_uan: new_customer.customer_uan,
            customer_charges: new_customer.customer_charges,
            customer_fedex_account_no: new_customer.customer_fedex_account_no,
            customer_dhl_account_no: new_customer.customer_dhl_account_no,
            customer_ups_account_no: new_customer.customer_ups_account_no,
            customer_account_number: new_customer.customer_account_number,
            customer_aba: new_customer.customer_aba,
            customer_bank_name: new_customer.customer_bank_name,
            customer_payee_name: new_customer.customer_payee_name,
            customer_remarks: new_customer.customer_remarks,
            customer_contact_name: new_customer.customer_contact_name,
            customer_contact_phone: new_customer.customer_contact_phone,
            customer_contact_email: new_customer.customer_contact_email,

        };
        diesel::insert_into(customer_info_table)
            .values(&customer)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new Customer");
        Ok(customer)
    }


    pub fn get_customer_by_id(&self, passing_customer_id: &i32) -> Option<CustomerInfo> {
        let my_customer: CustomerInfo = customer_info_table
            .find(passing_customer_id)
            .select(CustomerInfo::as_select())
            .get_result::<CustomerInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading Customer By ID");
        Some(my_customer)
    }


    pub fn delete_customer_by_id(&self, passing_customer_id: &i32) -> Option<usize> {
        let cust = diesel::delete(customer_info_table.find(passing_customer_id))
            .execute(&mut self.pool.get().unwrap())
            .expect("Error deleting customer by id");
        Some(cust)
    }

    pub fn update_customer_by_id(
        &self,
        passing_customer_id: &i32,
        cust: CustomerInfo,
    ) -> Option<CustomerInfo> {
        let customer = diesel::update(customer_info_table.find(passing_customer_id))
            .set(&cust)
            .returning(CustomerInfo::as_select())     
            .get_result::<CustomerInfo>(&mut self.pool.get().unwrap())
            .expect("Error updating customer by id");
        Some(customer)
    }

    // ---------------------- Database Operations for Banks ----------------------------------------------------
    pub fn get_banks(&self) -> Vec<BankInfo> {
        bank_info_table
            .select(BankInfo::as_select())
            .load::<BankInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all Banks")
    }

    pub fn create_banks(&self, new_bank: NewBankInfo) -> Result<NewBankInfo, Error> {
        let bank = NewBankInfo {
            bank_name: new_bank.bank_name,
            bank_address: new_bank.bank_address,
            bank_phone: new_bank.bank_phone,
            bank_email: new_bank.bank_email,
            bank_city: new_bank.bank_city,
            bank_country: new_bank.bank_country,
            bank_zipcode: new_bank.bank_zipcode,
            bank_fax_number: new_bank.bank_fax_number,
            bank_main_bank: new_bank.bank_main_bank,
            bank_state: new_bank.bank_state,
        };
        diesel::insert_into(bank_info_table)
            .values(&bank)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new Bank");
        Ok(bank)
    }


    pub fn get_bank_by_id(&self, passing_name: &i32) -> Option<BankInfo> {
        let my_bank: BankInfo = bank_info_table
            .find(passing_name)
            .select(BankInfo::as_select())
            .get_result::<BankInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading Bank by id");
        Some(my_bank)
    }



    pub fn delete_bank_by_id(&self, bank_id_del: &i32) -> Option<usize> {
        let bank = diesel::delete(bank_info_table.find(bank_id_del))
            .execute(&mut self.pool.get().unwrap())
            .expect("Error deleting bank by id");
        Some(bank)
    }

    pub fn update_bank_by_id(
        &self,
        bank_id_update: &i32,
        bank_update: BankInfo,
    ) -> Option<BankInfo> {
        let bank = diesel::update(bank_info_table.find(bank_id_update))
            .set(&bank_update)
            .returning(BankInfo::as_select())      
            .get_result::<BankInfo>(&mut self.pool.get().unwrap())
            .expect("Error updating bank by id");
        Some(bank)
    }

    // ---------------------- Database Operations for LC ----------------------------------------------------
    pub fn get_lcs(&self) -> Vec<LcInfo> {
        lc_info_table
            .select(LcInfo::as_select())
            .load::<LcInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all Lcs")
    }

    pub fn create_lcs(&self, new_lc: LcInfo) -> Result<LcInfo, Error> {
        let lc: LcInfo = LcInfo {
            lc_location_code: new_lc.lc_location_code,
            lc_id: new_lc.lc_id,
            lc_preparer: new_lc.lc_preparer,
            lc_pk_preparer: new_lc.lc_pk_preparer,
            lc_pc_prep: new_lc.lc_pc_prep,
            lc_pc_chker: new_lc.lc_pc_chker,
            lc_bill_to: new_lc.lc_bill_to,
            lc_customer_id: new_lc.lc_customer_id,
            lc_status: new_lc.lc_status,
            lc_special_instructions: new_lc.lc_special_instructions,
            lc_amount: new_lc.lc_amount,
            lc_tolerance: new_lc.lc_tolerance,
            lc_previous_lc_draws: new_lc.lc_previous_lc_draws,
            lc_time_draft: new_lc.lc_time_draft,
            lc_number_of_days: new_lc.lc_number_of_days,
            lc_country: new_lc.lc_country,
            lc_reference_number: new_lc.lc_reference_number,
            lc_balance: new_lc.lc_balance,
            lc_dp: new_lc.lc_dp,
            lc_ip: new_lc.lc_ip,
            lc_previous_lc_draws_running: new_lc.lc_previous_lc_draws_running,
            lc_returning_balance: new_lc.lc_returning_balance,
            lc_currency: new_lc.lc_currency,
            lc_fn: new_lc.lc_fn,
            lc_charges: new_lc.lc_charges,
            lc_add_charges: new_lc.lc_add_charges,
            lc_fees_due: new_lc.lc_fees_due,
            lc_cargo_ins_cost: new_lc.lc_cargo_ins_cost,
            lc_cargo_ins_sell_price: new_lc.lc_cargo_ins_sell_price,
            lc_rhdc_invoice_for_customer: new_lc.lc_rhdc_invoice_for_customer,
            lc_rhdc_invoice_for_fn_banks: new_lc.lc_rhdc_invoice_for_fn_banks,
            lc_advising_bank_id: new_lc.lc_advising_bank_id,
            lc_advising_bank_ref: new_lc.lc_advising_bank_ref,
            lc_issuing_bank_id: new_lc.lc_issuing_bank_id,
            lc_issuing_bank_ref: new_lc.lc_issuing_bank_ref,
            lc_negotiating_bank_id: new_lc.lc_negotiating_bank_id,
            lc_commission_type: new_lc.lc_commission_type,
            lc_tranche_count: new_lc.lc_tranche_count,
            lc_acceptan: new_lc.lc_acceptan,
            lc_doc_prep: new_lc.lc_doc_prep,
            lc_confirm: new_lc.lc_confirm,
            lc_other: new_lc.lc_other,
            lc_discount: new_lc.lc_discount,
            lc_phone_forwarder_shipper: new_lc.lc_phone_forwarder_shipper,
            lc_pending_inf_tracing_status_in_pc_or_void: new_lc.lc_pending_inf_tracing_status_in_pc_or_void,
            lc_net_paid: new_lc.lc_net_paid,
            lc_bank_charges: new_lc.lc_bank_charges,
            lc_negotiating_bank_reference: new_lc.lc_negotiating_bank_reference,
            lc_applicant_name: new_lc.lc_applicant_name,
            lc_third_party_shipper_name: new_lc.lc_third_party_shipper_name,
            lc_applicant_address: new_lc.lc_applicant_address,
            lc_third_party_shipper_address: new_lc.lc_third_party_shipper_address,
            lc_applicant_fax: new_lc.lc_applicant_fax,
            lc_drawee: new_lc.lc_drawee,
            lc_load_on_board: new_lc.lc_load_on_board,
            lc_for_transport_to: new_lc.lc_for_transport_to,
            lc_tenor_of_draft: new_lc.lc_tenor_of_draft,
            lc_drawn_under_statement_of_draft: new_lc.lc_drawn_under_statement_of_draft,
            lc_large_merchandise_description_invoice: new_lc.lc_large_merchandise_description_invoice,
            lc_sales_terms: new_lc.lc_sales_terms,
            lc_location_of_sales_terms: new_lc.lc_location_of_sales_terms,
            lc_consign_to_party: new_lc.lc_consign_to_party,
            lc_freight: new_lc.lc_freight,
            lc_notify_party: new_lc.lc_notify_party,
            lc_short_merchandise_description_for_bl: new_lc.lc_short_merchandise_description_for_bl,
            lc_short_merchandise_description_for_co: new_lc.lc_short_merchandise_description_for_co,
            lc_global_field: new_lc.lc_global_field,
            lc_limited_certifications: new_lc.lc_limited_certifications,
            lc_awd_or_bl_merchandise_description: new_lc.lc_awd_or_bl_merchandise_description,
            lc_insurance_merchandise_description: new_lc.lc_insurance_merchandise_description,
            lc_shipping_advice_merchandise_description: new_lc.lc_shipping_advice_merchandise_description,
            lc_value_for_carriage: new_lc.lc_value_for_carriage,
            lc_value_for_customers: new_lc.lc_value_for_customers,
            lc_gross_weight: new_lc.lc_gross_weight,
            lc_measurements: new_lc.lc_measurements,
            lc_net_weight: new_lc.lc_net_weight,
            lc_chargeable_weight: new_lc.lc_chargeable_weight,
            lc_weight_in_lbs: new_lc.lc_weight_in_lbs,
            lc_other_charges_due_agent: new_lc.lc_other_charges_due_agent,
            lc_tl_forwarder_name: new_lc.lc_tl_forwarder_name,
            lc_forwarder_address: new_lc.lc_forwarder_address,
            lc_partial_or_comp_shipment: new_lc.lc_partial_or_comp_shipment,
            lc_carrier_name: new_lc.lc_carrier_name,
            lc_vessel_name: new_lc.lc_vessel_name,
            lc_place_of_delivery_by: new_lc.lc_place_of_delivery_by,
            lc_for_transhipment_to: new_lc.lc_for_transhipment_to,
            lc_type_of_move: new_lc.lc_type_of_move,
            lc_place_of_receipt_by: new_lc.lc_place_of_receipt_by,
            lc_other_chgs_due_carrier: new_lc.lc_other_chgs_due_carrier,
            lc_freight_charge: new_lc.lc_freight_charge,
            lc_insurance_chg: new_lc.lc_insurance_chg,
            lc_insurance_percentage: new_lc.lc_insurance_percentage,
            lc_insurance_amt: new_lc.lc_insurance_amt,
            lc_invoice_num: new_lc.lc_invoice_num,
            lc_mawb_no: new_lc.lc_mawb_no,
            lc_mobl_no: new_lc.lc_mobl_no,
            lc_hawb_hobl_no: new_lc.lc_hawb_hobl_no,
            lc_marks_and_numbers: new_lc.lc_marks_and_numbers,
            lc_no_of_pieces: new_lc.lc_no_of_pieces,
            lc_dimensions: new_lc.lc_dimensions,
            lc_po_no: new_lc.lc_po_no,
            lc_city_state_of_origin: new_lc.lc_city_state_of_origin,
            lc_country_of_origin: new_lc.lc_country_of_origin,
            lc_1st_flight_number: new_lc.lc_1st_flight_number,
            lc_2nd_flight_number: new_lc.lc_2nd_flight_number,
            lc_1st_to_city_code: new_lc.lc_1st_to_city_code,
            lc_1st_to_city_code_value: new_lc.lc_1st_to_city_code_value,
            lc_insurance_company_name: new_lc.lc_insurance_company_name,
            lc_insurance_company_address: new_lc.lc_insurance_company_address,
            lc_insurance_company_fax: new_lc.lc_insurance_company_fax,
            lc_other_receipt_name: new_lc.lc_other_receipt_name,
            lc_other_receipt_address: new_lc.lc_other_receipt_address,
            lc_other_receipt_fax: new_lc.lc_other_receipt_fax,
            lc_other_courier_name: new_lc.lc_other_courier_name,
            lc_other_courier_add: new_lc.lc_other_courier_add,
            lc_type: new_lc.lc_type,
            lc_amount_of_draw: new_lc.lc_amount_of_draw,
            lc_master_id: new_lc.lc_master_id,
            lc_secondapplicant_header: new_lc.lc_secondapplicant_header,
            lc_secondapplicant_name: new_lc.lc_secondapplicant_name,
            lc_secondapplicant_address: new_lc.lc_secondapplicant_address,
            lc_date_id: new_lc.lc_date_id,
            lc_courier_id: new_lc.lc_courier_id,
            lc_information_currency: new_lc.lc_information_currency,
                

            

        };
        diesel::insert_into(lc_info_table)
            .values(&lc)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new Lc");

        // ! Check

            // Start Latest Date ID
            let latest_id_date = date_info_table
            .order(date_id.desc())
            .limit(1)
            .select(DateInfo::as_select())

            .load::<DateInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all date");
        let mut recent_date = 1;
        if !latest_id_date.is_empty() {
            let whole_recent_date_row= latest_id_date[0].clone();
            recent_date = whole_recent_date_row.date_id;
        }

        println!("{}", recent_date);

        // End Latest Date ID

        // Start Latest Courier ID
        let latest_id_courier = courier_info_table
            .order(courier_id.desc())
            .limit(1)
            .select(CourierInfo::as_select())

            .load::<CourierInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all date");
        let mut recent_courier = 1;

        if !latest_id_courier.is_empty() {
            let whole_recent_courier_row= latest_id_courier[0].clone();
            recent_courier = whole_recent_courier_row.courier_id;
        }

        println!("{}", recent_courier);

        // End Latest Courier ID


        // Start Latest LC ID
        let latest_id_lc = lc_info_table
            .order(lc_id.desc())
            .limit(1)
            .select(LcInfo::as_select())
            .load::<LcInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all date");


        let mut recent_lc = 1;

        if !latest_id_lc.is_empty() {
            let whole_recent_lc_row= latest_id_lc[0].clone();
            recent_lc = whole_recent_lc_row.lc_id;
        }

        println!("{}", recent_lc);

        // End Latest LC ID


        // Start Insert Date ID and Courier ID in Latest LC
        let _update_result = diesel::update(lc_info_table.filter(lc_id.eq(recent_lc)))
        .set((lc_date_id.eq(recent_date), lc_courier_id.eq(recent_courier)))
        .execute(&mut self.pool.get().unwrap())
        .expect("Error updating LC info table");



        // End Insert Date ID and Courier ID in Latest LC



        // ! Check



        Ok(lc)
    }

    pub fn get_lc_by_id(&self, lc_id_find: &i32) -> Option<LcInfo> {
        let lc = lc_info_table
            .find(lc_id_find)
            .select(LcInfo::as_select())
            .get_result::<LcInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading LC by id");
        Some(lc)
    }

    pub fn delete_lc_by_id(&self, lc_id_del: &i32) -> Option<usize> {
        let lc = diesel::delete(lc_info_table.find(lc_id_del))
            .execute(&mut self.pool.get().unwrap())
            .expect("Error deleting LC by id");
        Some(lc)
    }

    pub fn update_lc_by_id(&self, lc_id_update: &i32, lc_update: LcInfo) -> Option<LcInfo> {
        let lc = diesel::update(lc_info_table.find(lc_id_update))
            .set(&lc_update)
            .returning(LcInfo::as_select())

            .get_result::<LcInfo>(&mut self.pool.get().unwrap())
            .expect("Error updating LC by id");
        Some(lc)
    }

    pub fn login(&self, new_admin: Admin) -> Result<String, bool> {
        let user_exists = admin_table
            .filter(admin_username.eq(&new_admin.admin_username))
            .load::<Admin>(&mut self.pool.get().unwrap())
            .expect("Error Authentication");
        if user_exists.is_empty() {
            return Err(false);
        }
        let password_to_check = user_exists[0].admin_password.clone();
        let database_hashed_password = TEXT_ARGON.to_string() + &password_to_check;
        println!("Complete Hash: {:?}", database_hashed_password);
        let hashed_password_client = new_admin.admin_password.as_bytes();
        let matches = argon2::verify_encoded(&database_hashed_password, hashed_password_client);
        println!("Matches: {:?}", matches);
        if matches.unwrap_or(false) {
            let user_s = user_exists[0].admin_username.clone();

            Ok(user_s)
        } else {
            Err(false)
        }
    }

    pub fn register_admin(&self, new_admin: Admin) -> Result<Admin, Error> {
        let mut rng = rand::thread_rng();
        let hashed_password = new_admin.admin_password.as_bytes();
        let salt: [u8; 32] = rng.gen();
        println!("salt: {:?}", salt);
        let config = Config::default();
        let hash = argon2::hash_encoded(hashed_password, &salt, &config).unwrap();
        let password_part: Vec<&str> = hash.split('=').collect();
        let mut last_part: &str = "";
        if let Some(part) = password_part.last() {
            last_part = part;
            println!("Last Part: {}", last_part);
        } else {
            println!("Invalid hash format");
        }
        let perfect_hash = trim_first_two_chars(last_part);
        println!("Perfect Hash: {}", perfect_hash);

        let admin_1 = Admin {
            admin_username: new_admin.admin_username,
            admin_password: perfect_hash.to_string(),
        };

        diesel::insert_into(admin_table)
            .values(&admin_1)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new admin");
        Ok(admin_1)
    }

    pub fn recent_lc_information(&self) -> Result<Option<LcInfo>, bool> {
        let latest_id = lc_info_table
            .order(lc_id.desc())
            .limit(1)
            .select(LcInfo::as_select())

            .load::<LcInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all users");

        if !latest_id.is_empty() {
            let recent_lc = latest_id[0].clone();
            Ok(Some(recent_lc))
        } else {
            Err(false)
        }
    }

    pub fn list_of_admins(&self) -> Result<Option<Vec<String>>, Error> {
        let admin_usernames = admin_table
            .select(admin_username)
            .load::<String>(&mut self.pool.get().unwrap())
            .expect("Error loading all users");

        if admin_usernames.is_empty() {
            Ok(None)
        } else {
            Ok(Some(admin_usernames))
        }
    }

    pub fn hello_world(&self) -> String {
        println!("Hello World from RUST");
        return "hello world from API".to_owned();
    }

    // ! Date Table
    pub fn create_date(&self, new_date: NewDateInfo) -> Result<NewDateInfo, Error> {
        let date: NewDateInfo = NewDateInfo {
            date_date_received: new_date.date_date_received,
            date_dte_snt_to_legalize: new_date.date_dte_snt_to_legalize,
            date_legalize_ret_dte: new_date.date_legalize_ret_dte,
            date_maturity_date: new_date.date_maturity_date,
            date_expiry_date: new_date.date_expiry_date,
            date_latest_shipment_date: new_date.date_latest_shipment_date,
            date_date_sent_inspection: new_date.date_date_sent_inspection,
            date_ship_date: new_date.date_ship_date,
            date_awb_bl_recv_date: new_date.date_awb_bl_recv_date,
            date_date_paid: new_date.date_date_paid,
            date_date_sent_to_bank: new_date.date_date_sent_to_bank,
            date_next_trace_dt: new_date.date_next_trace_dt,
            date_last_update: new_date.date_last_update,
            date_issue_date: new_date.date_issue_date,
            date_invoice_date: new_date.date_invoice_date,
            date_1st_flight_date: new_date.date_1st_flight_date,
            date_2nd_flight_date: new_date.date_2nd_flight_date,
        };
    
        diesel::insert_into(date_info_table)
            .values(&date)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new Date");
        
        Ok(date)
    }

    // ! Courier Table
    pub fn create_courier(&self, new_courier: NewCourierInfo) -> Result<NewCourierInfo, Error> {
        let courier: NewCourierInfo = NewCourierInfo {
            courier_no_of_days_to_present: new_courier.courier_no_of_days_to_present,
            courier_issuing_bank_courier: new_courier.courier_issuing_bank_courier_courier_co.clone(),
            courier_issuing_bank_courier_courier_co: new_courier.courier_issuing_bank_courier_courier_co.clone(),
            courier_latest_presentation_date: new_courier.courier_latest_presentation_date,
            courier_domestic_bank_courier: new_courier.courier_domestic_bank_courier,
            courier_domestic_bank_courier_courier_co: new_courier.courier_domestic_bank_courier_courier_co,
            courier_target_date_to_complete: new_courier.courier_target_date_to_complete,
            courier_applicant_courier: new_courier.courier_applicant_courier,
            courier_applicant_courier_courier_co: new_courier.courier_applicant_courier_courier_co,
            courier_actual_date_completed: new_courier.courier_actual_date_completed,
            courier_2nd_appt_courier: new_courier.courier_2nd_appt_courier,
            courier_2nd_appt_courier_courier_co: new_courier.courier_2nd_appt_courier_courier_co,
            courier_pc_completed: new_courier.courier_pc_completed,
            courier_inbound_courier: new_courier.courier_inbound_courier,
            courier_inbound_courier_courier_co: new_courier.courier_inbound_courier_courier_co,
            courier_date_reimbursment_filed: new_courier.courier_date_reimbursment_filed,
            courier_inbound_rtn_courier: new_courier.courier_inbound_rtn_courier,
            courier_inbound_rtn_courier_courier_co: new_courier.courier_inbound_rtn_courier_courier_co,
            courier_reimbursment_via: new_courier.courier_reimbursment_via,
            courier_outbound_rtn_courier: new_courier.courier_outbound_rtn_courier,
            courier_outbound_rtn_courier_courier_co: new_courier.courier_outbound_rtn_courier_courier_co,
            courier_target_paid_date: new_courier.courier_target_paid_date,
            courier_other_courier: new_courier.courier_other_courier,
            courier_other_courier_courier_co: new_courier.courier_other_courier_courier_co,
            

        };
    
        diesel::insert_into(courier_info_table)
            .values(&courier)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new Date");
        
        Ok(courier)
    }


    pub fn country_list(&self) -> Vec<CSCCountry> {
        csc_countries_table
            .load::<CSCCountry>(&mut self.pool.get().unwrap())
            .expect("Error loading all Countries")
    }
    
    pub fn currency_list(&self) -> Vec<Currency> {
        currency_table
            .load::<Currency>(&mut self.pool.get().unwrap())
            .expect("Error loading all Currencies")
    }

    pub fn airport_list(&self) -> Vec<AirportModel> {
        airports
            .load::<AirportModel>(&mut self.pool.get().unwrap())
            .expect("Error loading all Airports")
    }

    pub fn iata_list(&self) -> Vec<IataModel> {
        iata_codes
            .load::<IataModel>(&mut self.pool.get().unwrap())
            .expect("Error loading all Iata list")
    }

    pub fn get_airport_by_id(&self, passing_airport_id: &i32) -> Option<AirportModel> {
        let airport = airports
            .find(passing_airport_id)
            .get_result::<AirportModel>(&mut self.pool.get().unwrap())
            .expect("Error loading airport by id");
        Some(airport)
    }


    // pub fn get_iata_by_id(&self, passing_iatacode_id: &String) -> Option<IataModel> {
    //     let result = iata_codes
    //         .filter(mawb_code.eq(&passing_iatacode_id))
    //         .first::<IataModel>(&mut self.pool.get().unwrap())
    //         .expect("Error loading iatacode by mawb code");
    //     Some(result)
        
        

    // }



    pub fn get_iata_by_id(&self, passing_iatacode_id: &String) -> Option<IataModel> {
        println!("Check iata code");

        match iata_codes
            .filter(mawb_code.eq(passing_iatacode_id))
            .first::<IataModel>(&mut self.pool.get().unwrap())
        {
            Ok(result) => Some(result),
            Err(_) => {
                // Error occurred or record not found, return None
                None
            }
        }
    }
    

    pub fn create_iatacode(&self, new_iata_code: NewIataModel) -> Result<NewIataModel, Error> {
        let result: NewIataModel = NewIataModel {
            mawb_code: new_iata_code.mawb_code,
            iata_code: new_iata_code.iata_code,
            airline_name: new_iata_code.airline_name,
        };
    
        diesel::insert_into(iata_codes)
            .values(&result)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new iata codes");
        
        Ok(result)
    }



    pub fn create_airport(&self, new_airport: NewAirportModel) -> Result<NewAirportModel, Error> {
        let airport: NewAirportModel = NewAirportModel {
            airport_code: new_airport.airport_code,
            airport_name: new_airport.airport_name,
            city_name: new_airport.city_name,
            country_name: new_airport.country_name,
            country_code: new_airport.country_code,
        };
    
        diesel::insert_into(airports)
            .values(&airport)
            .execute(&mut self.pool.get().unwrap())
            .expect("Error creating new Airport");
        
        Ok(airport)
    }













    pub fn get_country_by_id(&self, passing_country_id: &i32) -> Option<CSCCountry> {
        let country = csc_countries_table
            .find(passing_country_id)
            .get_result::<CSCCountry>(&mut self.pool.get().unwrap())
            .expect("Error loading country by id");
        Some(country)
    }

    pub fn get_currency_by_id(&self, passing_currency_id: &i32) -> Option<Currency> {
        let my_currency = currency_table
            .find(passing_currency_id)
            .get_result::<Currency>(&mut self.pool.get().unwrap())
            .expect("Error loading currency by id");
        Some(my_currency)
    }


    pub fn lc_count(&self) -> i64 {
        let row_count = lc_info_table.count()
        .get_result::<i64>(&mut self.pool.get().unwrap())
        .expect("Error loading currency by id");
        return row_count;
    }

    pub fn all_csc_country_name_db_function(&self) -> Vec<CSCCountry> {
        csc_countries_table
            .load::<CSCCountry>(&mut self.pool.get().unwrap())
            .expect("Error loading all Countries")
    }


    pub fn csc_state_by_country(&self, passing_id: &i32) -> Vec<CSCState> {
        let my_state = csc_states_table
            .filter(csc_state_country_id.eq(passing_id))
            // .first::<CSCState>(&mut self.pool.get().unwrap())
            .load::<CSCState>(&mut self.pool.get().unwrap())
            .expect("Error loading all Countries");
            
        my_state
    }


    pub fn csc_city_by_state_and_country(&self, passing_state_id: &i32) -> Vec<CSCCity> {
        let my_city = csc_city_table
            .filter(csc_city_state_id.eq(passing_state_id))
            .load::<CSCCity>(&mut self.pool.get().unwrap())
            .expect("Error loading all Countries");
            
        my_city
    }


    // Get LC Bank Customer by ID
    pub fn get_lc_bank_customer_by_id(&self, passing_id: &i32) -> Option<(LcInfo, BankInfo, CustomerInfo, DateInfo, CourierInfo)> {

    let lc_with_banks_customers_and_dates = lc_info_table
        .inner_join(bank_info_table)
        .inner_join(customer_info_table)
        .inner_join(date_info_table)
        .inner_join(courier_info_table)
        .filter(lc_id.eq(passing_id))
        .select((
            LcInfo::as_select(),
            BankInfo::as_select(),
            CustomerInfo::as_select(),
            DateInfo::as_select(),
            CourierInfo::as_select()
        ))
        .load::<(LcInfo, BankInfo, CustomerInfo, DateInfo, CourierInfo)>(&mut self.pool.get().unwrap())
        .expect("Error loading data");

    lc_with_banks_customers_and_dates.into_iter().next()
}



    pub fn global_search_lc(&self, search_query: &str) -> Vec<LcGlobalSearch> {  
        // println!("lc");

        let mut connection_ = self.pool.get().unwrap();

        let lc_data = sql_query("
        SELECT lc_id FROM lc_info_table WHERE
            tsvector_lc_column @@ plainto_tsquery($1) 
        ORDER BY 
            ts_rank(tsvector_lc_column, plainto_tsquery($1)) 
        DESC LIMIT 10;");

        let lc_data: Vec<LcGlobalSearch> = lc_data
            .bind::<Text, _>(search_query)
            .load::<LcGlobalSearch>(&mut connection_)
            .expect("Error finding lc data by global search");
      
        lc_data

    } 


    pub fn global_search_bank(&self, search_query: &str) -> Vec<LcGlobalSearchBank> {  

        let mut connection_ = self.pool.get().unwrap();

        let lc_data = sql_query("
        SELECT bank_id FROM bank_info_table WHERE
            tsvector_bank_column @@ plainto_tsquery($1) 
        ORDER BY 
            ts_rank(tsvector_bank_column, plainto_tsquery($1)) 
        DESC LIMIT 10;");

        let lc_data: Vec<LcGlobalSearchBank> = lc_data
            .bind::<Text, _>(search_query)
            .load::<LcGlobalSearchBank>(&mut connection_)
            .expect("Error finding bank data by global search");
      
        lc_data

    } 


    pub fn global_search_customer(&self, search_query: &str) -> Vec<LcGlobalSearchCustomer> {  

        let mut connection_ = self.pool.get().unwrap();

        let lc_data = sql_query("
        SELECT customer_id FROM customer_info_table WHERE
            tsvector_customer_column @@ plainto_tsquery($1) 
        ORDER BY 
            ts_rank(tsvector_customer_column, plainto_tsquery($1)) 
        DESC LIMIT 10;");

        let lc_data: Vec<LcGlobalSearchCustomer> = lc_data
            .bind::<Text, _>(search_query)
            .load::<LcGlobalSearchCustomer>(&mut connection_)
            .expect("Error finding customer data by global search");
      
        lc_data

    } 

pub fn convert_bankid_to_lcid(&self, search_query: &str) -> Vec<LcGlobalSearch> {  
    let mut connection_ = self.pool.get().unwrap();

    let lc_data = sql_query("
        SELECT lc_id FROM lc_info_table 
        WHERE lc_issuing_bank_id = CAST($1 AS INTEGER)
        OR lc_advising_bank_id = CAST($1 AS INTEGER);
    ")
    .bind::<Text, _>(search_query)
    .load::<LcGlobalSearch>(&mut connection_)
    .expect("Error finding lc IDs.");

    lc_data
}

    
pub fn global_search_bank_convert_lcid(&self, search_query: &str) -> Vec<LcGlobalSearch> {  
    let mut connection_ = self.pool.get().unwrap();
    // println!("Bank");

    let my_bank_id = sql_query("
    SELECT bank_id FROM bank_info_table WHERE
        tsvector_bank_column @@ plainto_tsquery($1) 
    ORDER BY 
        ts_rank(tsvector_bank_column, plainto_tsquery($1)) 
    DESC LIMIT 10;");

    let bankresult: Vec<LcGlobalSearchBank> = my_bank_id
        .bind::<Text, _>(search_query)
        .load::<LcGlobalSearchBank>(&mut connection_)
        .expect("Error finding bank data by global search");

    // Extracting bank_id values from bankResult
    let bank_ids: Vec<i32> = bankresult.iter().map(|bank| bank.bank_id).collect();

    // Using bank_ids in the second SQL query
    let lc_data = sql_query("
        SELECT lc_id FROM lc_info_table 
        WHERE lc_issuing_bank_id = ANY($1)
        OR lc_advising_bank_id = ANY($1);
    ")
    .bind::<diesel::sql_types::Array<diesel::sql_types::Integer>, _>(bank_ids)
    .load::<LcGlobalSearch>(&mut connection_)
    .expect("Error finding lc IDs.");

    lc_data

} 


pub fn global_search_customer_convert_lcid(&self, search_query: &str) -> Vec<LcGlobalSearch> {  
    // println!("Customer");
    let mut connection_ = self.pool.get().unwrap();

    let my_customer_id = sql_query("
    SELECT customer_id FROM customer_info_table WHERE
        tsvector_customer_column @@ plainto_tsquery($1) 
    ORDER BY 
        ts_rank(tsvector_customer_column, plainto_tsquery($1)) 
    DESC LIMIT 10;");

    let customerresult: Vec<LcGlobalSearchCustomer> = my_customer_id
        .bind::<Text, _>(search_query)
        .load::<LcGlobalSearchCustomer>(&mut connection_)
        .expect("Error finding bank customer by global search");

    // Extracting bank_id values from bankResult
    let customer_ids: Vec<i32> = customerresult.iter().map(|customer| customer.customer_id).collect();

    // Using bank_ids in the second SQL query
    let lc_data = sql_query("
        SELECT lc_id FROM lc_info_table 
        WHERE lc_customer_id = ANY($1)
    ")
    .bind::<diesel::sql_types::Array<diesel::sql_types::Integer>, _>(customer_ids)
    .load::<LcGlobalSearch>(&mut connection_)
    .expect("Error finding lc IDs.");

    lc_data

}


pub fn get_all_ids(&self) -> Vec<LcGlobalSearch> {  
    let mut connection_: r2d2::PooledConnection<ConnectionManager<PgConnection>> = self.pool.get().unwrap();

    let lc_data = sql_query("
        SELECT lc_id FROM lc_info_table;
    ")
    .load::<LcGlobalSearch>(&mut connection_)
    .expect("Error finding lc IDs.");

    lc_data
}




pub fn homepage_search(&self, row_name: &str, row_value: &str) -> Vec<LcGlobalSearch> {
    // Create a hashmap to store the mappings
    let mut id_to_database_name = HashMap::new();

    // Add mappings to the hashmap
    id_to_database_name.insert("Homepage_LID", "lc_location_code");
    id_to_database_name.insert("Homepage_ID", "lc_id");
    id_to_database_name.insert("Homepage_Preparer", "lc_preparer");
    id_to_database_name.insert("Homepage_PkPreparer", "lc_pk_preparer");
    id_to_database_name.insert("Homepage_PcPrep", "lc_pc_prep");
    id_to_database_name.insert("Homepage_PcChker", "lc_pc_chker");
    id_to_database_name.insert("Homepage_DateReceived", "lc_date_received");
    id_to_database_name.insert("Homepage_AdvisingBankRef", "lc_advising_bank_ref");
    id_to_database_name.insert("Homepage_IssuingBankRef", "lc_issuing_bank_ref");
    id_to_database_name.insert("Homepage_BillTo", "lc_bill_to");
    
    // Example usage:
    let frontend_id = row_name;
    println!("row_value: {}", row_value);


    let mut connection_: r2d2::PooledConnection<ConnectionManager<PgConnection>> = self.pool.get().unwrap();

    let lc_data = sql_query(format!(
        "SELECT lc_id FROM lc_info_table WHERE {} = '{}';",
        id_to_database_name[frontend_id], row_value
    ))
    .load::<LcGlobalSearch>(&mut connection_)
    .expect("Error finding lc info.");

    lc_data
    

}

pub fn add_item_select(&self, new_item: SelectFieldTable) -> Result<SelectFieldTable, Error> {
    let my_item: SelectFieldTable = SelectFieldTable {
        field_name: new_item.field_name,
        field_value: new_item.field_value,
    };

    diesel::insert_into(select_table)
        .values(&my_item)
        .execute(&mut self.pool.get().unwrap())
        .expect("Error creating new Date");
    
    Ok(my_item)
}


pub fn remove_item_select(&self, row_name: &str, row_value: &str) -> Result<bool, Error> {
    let mut connection_: r2d2::PooledConnection<ConnectionManager<PgConnection>> = self.pool.get().unwrap();
    println!("Removed Select Field Is Called");

    let field_name_value = row_name;
    let field_value_value = row_value;

    let affected_rows = sql_query(format!(
        "DELETE FROM select_table WHERE field_name = '{}' AND field_value = '{}';",
        field_name_value, field_value_value
    ))
    .execute(&mut connection_)
    .expect("Error deleting rows.");


    if affected_rows > 0 {
    Ok(true)
} else {
    Ok(false)
}
}


pub fn select_find(&self, passing_name: &str) -> Vec<SelectFieldTable> {  
    let mut connection_: r2d2::PooledConnection<ConnectionManager<PgConnection>> = self.pool.get().unwrap();
    
    let field_name_variable = "field_name";
    let field_name_value_variable = passing_name;

    let result = sql_query(format!(
        "SELECT * FROM select_table WHERE {} = '{}';",
        field_name_variable, field_name_value_variable
    ))
    .load::<SelectFieldTable>(&mut connection_)
    .expect("Error finding lc IDs.");

  
    result

} 



pub fn date_courier_set(&self) -> Result<String, String> {

    // Start Latest Date ID
    let latest_id_date = date_info_table
            .order(date_id.desc())
            .limit(1)
            .select(DateInfo::as_select())

            .load::<DateInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all date");
        let mut recent_date = 1;
        if !latest_id_date.is_empty() {
            let whole_recent_date_row= latest_id_date[0].clone();
            recent_date = whole_recent_date_row.date_id;
        }

        println!("{}", recent_date);
    
    // End Latest Date ID

    // Start Latest Courier ID
    let latest_id_courier = courier_info_table
            .order(courier_id.desc())
            .limit(1)
            .select(CourierInfo::as_select())

            .load::<CourierInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all date");
        let mut recent_courier = 1;

        if !latest_id_courier.is_empty() {
            let whole_recent_courier_row= latest_id_courier[0].clone();
            recent_courier = whole_recent_courier_row.courier_id;
        }

        println!("{}", recent_courier);
    
    // End Latest Courier ID


    // Start Latest LC ID
    let latest_id_lc = lc_info_table
            .order(lc_id.desc())
            .limit(1)
            .select(LcInfo::as_select())
            .load::<LcInfo>(&mut self.pool.get().unwrap())
            .expect("Error loading all date");

        
        let mut recent_lc = 1;

        if !latest_id_lc.is_empty() {
            let whole_recent_lc_row= latest_id_lc[0].clone();
            recent_lc = whole_recent_lc_row.lc_id;
        }

        println!("{}", recent_lc);

    // End Latest LC ID


    // Start Insert Date ID and Courier ID in Latest LC
    #[warn(unused_variables)]
    let _update_result = diesel::update(lc_info_table.filter(lc_id.eq(recent_lc)))
    .set((lc_date_id.eq(recent_date), lc_courier_id.eq(recent_courier)))
    .execute(&mut self.pool.get().unwrap())
    .expect("Error updating LC info table");

    
    
    // End Insert Date ID and Courier ID in Latest LC


    

    
    Ok(String::from("hello world"))


}

// ! Update Table Listeners

// Update Courier 
pub fn update_courier_table(
    &self,
    pagelcid: &i32,
    updated_lc: NewCourierInfo,
) -> Option<CourierInfo> {
    let updated_courier = diesel::update(courier_info_table.filter(courier_id.eq(pagelcid)))
        .set((
            courier_no_of_days_to_present.eq(updated_lc.courier_no_of_days_to_present),
            courier_issuing_bank_courier.eq(updated_lc.courier_issuing_bank_courier),
            courier_issuing_bank_courier_courier_co.eq(updated_lc.courier_issuing_bank_courier_courier_co),
            courier_latest_presentation_date.eq(updated_lc.courier_latest_presentation_date),
            courier_domestic_bank_courier.eq(updated_lc.courier_domestic_bank_courier),
            courier_domestic_bank_courier_courier_co.eq(updated_lc.courier_domestic_bank_courier_courier_co),
            courier_target_date_to_complete.eq(updated_lc.courier_target_date_to_complete),
            courier_applicant_courier.eq(updated_lc.courier_applicant_courier),
            courier_applicant_courier_courier_co.eq(updated_lc.courier_applicant_courier_courier_co),
            courier_actual_date_completed.eq(updated_lc.courier_actual_date_completed),
            courier_2nd_appt_courier.eq(updated_lc.courier_2nd_appt_courier),
            courier_2nd_appt_courier_courier_co.eq(updated_lc.courier_2nd_appt_courier_courier_co),
            courier_pc_completed.eq(updated_lc.courier_pc_completed),
            courier_inbound_courier.eq(updated_lc.courier_inbound_courier),
            courier_inbound_courier_courier_co.eq(updated_lc.courier_inbound_courier_courier_co),
            courier_date_reimbursment_filed.eq(updated_lc.courier_date_reimbursment_filed),
            courier_inbound_rtn_courier.eq(updated_lc.courier_inbound_rtn_courier),
            courier_inbound_rtn_courier_courier_co.eq(updated_lc.courier_inbound_rtn_courier_courier_co),
            courier_reimbursment_via.eq(updated_lc.courier_reimbursment_via),
            courier_outbound_rtn_courier.eq(updated_lc.courier_outbound_rtn_courier),
            courier_outbound_rtn_courier_courier_co.eq(updated_lc.courier_outbound_rtn_courier_courier_co),
            courier_target_paid_date.eq(updated_lc.courier_target_paid_date),
            courier_other_courier.eq(updated_lc.courier_other_courier),
            courier_other_courier_courier_co.eq(updated_lc.courier_other_courier_courier_co),
        ))
        .returning(CourierInfo::as_select())
        .get_result::<CourierInfo>(&mut self.pool.get().unwrap())
        .expect("Updated Table Courier");

    Some(updated_courier)
}


// Update Date 
pub fn update_date_table(
    &self,
    pagelcid: &i32,
    updated_lc: NewDateInfo,
) -> Option<DateInfo> {
    let updated_date = diesel::update(date_info_table.filter(date_id.eq(pagelcid)))
        .set((
            date_date_received.eq(updated_lc.date_date_received),
            date_dte_snt_to_legalize.eq(updated_lc.date_dte_snt_to_legalize),
            date_legalize_ret_dte.eq(updated_lc.date_legalize_ret_dte),
            date_maturity_date.eq(updated_lc.date_maturity_date),
            date_expiry_date.eq(updated_lc.date_expiry_date),
            date_latest_shipment_date.eq(updated_lc.date_latest_shipment_date),
            date_date_sent_inspection.eq(updated_lc.date_date_sent_inspection),
            date_ship_date.eq(updated_lc.date_ship_date),
            date_awb_bl_recv_date.eq(updated_lc.date_awb_bl_recv_date),
            date_date_paid.eq(updated_lc.date_date_paid),
            date_date_sent_to_bank.eq(updated_lc.date_date_sent_to_bank),
            date_next_trace_dt.eq(updated_lc.date_next_trace_dt),
            date_last_update.eq(updated_lc.date_last_update),
            date_issue_date.eq(updated_lc.date_issue_date),
            date_invoice_date.eq(updated_lc.date_invoice_date),
            date_1st_flight_date.eq(updated_lc.date_1st_flight_date),
            date_2nd_flight_date.eq(updated_lc.date_2nd_flight_date),
        ))
        .returning(DateInfo::as_select())
        .get_result::<DateInfo>(&mut self.pool.get().unwrap())
        .expect("Updated Table Date");

    Some(updated_date)
}



// LC Date 
pub fn update_lc_table(
    &self,
    pagelcid: &i32,
    updated_lc: NewLcInfo,
) -> Option<LcInfo> {
    let updated_lc = diesel::update(lc_info_table.filter(lc_id.eq(pagelcid)))
        .set((
            lc_location_code.eq(updated_lc.lc_location_code),
            lc_preparer.eq(updated_lc.lc_preparer),
            lc_pk_preparer.eq(updated_lc.lc_pk_preparer),
            lc_pc_prep.eq(updated_lc.lc_pc_prep),
            lc_pc_chker.eq(updated_lc.lc_pc_chker),
            lc_bill_to.eq(updated_lc.lc_bill_to),
            lc_customer_id.eq(updated_lc.lc_customer_id),
            lc_status.eq(updated_lc.lc_status),
            lc_special_instructions.eq(updated_lc.lc_special_instructions),
            lc_amount.eq(updated_lc.lc_amount),
            lc_tolerance.eq(updated_lc.lc_tolerance),
            lc_previous_lc_draws.eq(updated_lc.lc_previous_lc_draws),
            lc_time_draft.eq(updated_lc.lc_time_draft),
            lc_number_of_days.eq(updated_lc.lc_number_of_days),
            lc_country.eq(updated_lc.lc_country),
            lc_reference_number.eq(updated_lc.lc_reference_number),
            lc_balance.eq(updated_lc.lc_balance),
            lc_dp.eq(updated_lc.lc_dp),
            lc_ip.eq(updated_lc.lc_ip),
            lc_previous_lc_draws_running.eq(updated_lc.lc_previous_lc_draws_running),
            lc_returning_balance.eq(updated_lc.lc_returning_balance),
            lc_currency.eq(updated_lc.lc_currency),
            lc_fn.eq(updated_lc.lc_fn),
            lc_charges.eq(updated_lc.lc_charges),
            lc_add_charges.eq(updated_lc.lc_add_charges),
            lc_fees_due.eq(updated_lc.lc_fees_due),
            lc_cargo_ins_cost.eq(updated_lc.lc_cargo_ins_cost),
            lc_cargo_ins_sell_price.eq(updated_lc.lc_cargo_ins_sell_price),
            lc_rhdc_invoice_for_customer.eq(updated_lc.lc_rhdc_invoice_for_customer),
            lc_rhdc_invoice_for_fn_banks.eq(updated_lc.lc_rhdc_invoice_for_fn_banks),
            lc_advising_bank_id.eq(updated_lc.lc_advising_bank_id),
            lc_advising_bank_ref.eq(updated_lc.lc_advising_bank_ref),
            lc_issuing_bank_id.eq(updated_lc.lc_issuing_bank_id),
            lc_issuing_bank_ref.eq(updated_lc.lc_issuing_bank_ref),
            lc_negotiating_bank_id.eq(updated_lc.lc_negotiating_bank_id),
            lc_commission_type.eq(updated_lc.lc_commission_type),
            lc_tranche_count.eq(updated_lc.lc_tranche_count),
            lc_acceptan.eq(updated_lc.lc_acceptan),
            lc_doc_prep.eq(updated_lc.lc_doc_prep),
            lc_confirm.eq(updated_lc.lc_confirm),
            lc_other.eq(updated_lc.lc_other),
            lc_discount.eq(updated_lc.lc_discount),
            lc_phone_forwarder_shipper.eq(updated_lc.lc_phone_forwarder_shipper),
            lc_pending_inf_tracing_status_in_pc_or_void.eq(updated_lc.lc_pending_inf_tracing_status_in_pc_or_void),
            lc_net_paid.eq(updated_lc.lc_net_paid),
            lc_bank_charges.eq(updated_lc.lc_bank_charges),
            lc_negotiating_bank_reference.eq(updated_lc.lc_negotiating_bank_reference),
            lc_applicant_name.eq(updated_lc.lc_applicant_name),
            lc_third_party_shipper_name.eq(updated_lc.lc_third_party_shipper_name),
            lc_applicant_address.eq(updated_lc.lc_applicant_address),
            lc_third_party_shipper_address.eq(updated_lc.lc_third_party_shipper_address),
            lc_applicant_fax.eq(updated_lc.lc_applicant_fax),
            lc_drawee.eq(updated_lc.lc_drawee),
            lc_load_on_board.eq(updated_lc.lc_load_on_board),
            lc_for_transport_to.eq(updated_lc.lc_for_transport_to),
            lc_tenor_of_draft.eq(updated_lc.lc_tenor_of_draft),
            lc_drawn_under_statement_of_draft.eq(updated_lc.lc_drawn_under_statement_of_draft),
            lc_large_merchandise_description_invoice.eq(updated_lc.lc_large_merchandise_description_invoice),
            lc_sales_terms.eq(updated_lc.lc_sales_terms),
            lc_location_of_sales_terms.eq(updated_lc.lc_location_of_sales_terms),
            lc_consign_to_party.eq(updated_lc.lc_consign_to_party),
            lc_freight.eq(updated_lc.lc_freight),
            lc_notify_party.eq(updated_lc.lc_notify_party),
            lc_short_merchandise_description_for_bl.eq(updated_lc.lc_short_merchandise_description_for_bl),
            lc_short_merchandise_description_for_co.eq(updated_lc.lc_short_merchandise_description_for_co),
            lc_global_field.eq(updated_lc.lc_global_field),
            lc_limited_certifications.eq(updated_lc.lc_limited_certifications),
            lc_awd_or_bl_merchandise_description.eq(updated_lc.lc_awd_or_bl_merchandise_description),
            lc_insurance_merchandise_description.eq(updated_lc.lc_insurance_merchandise_description),
            lc_shipping_advice_merchandise_description.eq(updated_lc.lc_shipping_advice_merchandise_description),
            lc_value_for_carriage.eq(updated_lc.lc_value_for_carriage),
            lc_value_for_customers.eq(updated_lc.lc_value_for_customers),
            lc_gross_weight.eq(updated_lc.lc_gross_weight),
            lc_measurements.eq(updated_lc.lc_measurements),
            lc_net_weight.eq(updated_lc.lc_net_weight),
            lc_chargeable_weight.eq(updated_lc.lc_chargeable_weight),
            lc_weight_in_lbs.eq(updated_lc.lc_weight_in_lbs),
            lc_other_charges_due_agent.eq(updated_lc.lc_other_charges_due_agent),
            lc_tl_forwarder_name.eq(updated_lc.lc_tl_forwarder_name),
            lc_forwarder_address.eq(updated_lc.lc_forwarder_address),
            lc_partial_or_comp_shipment.eq(updated_lc.lc_partial_or_comp_shipment),
            lc_carrier_name.eq(updated_lc.lc_carrier_name),
            lc_vessel_name.eq(updated_lc.lc_vessel_name),
            lc_place_of_delivery_by.eq(updated_lc.lc_place_of_delivery_by),
            lc_for_transhipment_to.eq(updated_lc.lc_for_transhipment_to),
            lc_type_of_move.eq(updated_lc.lc_type_of_move),
            lc_place_of_receipt_by.eq(updated_lc.lc_place_of_receipt_by),
            lc_other_chgs_due_carrier.eq(updated_lc.lc_other_chgs_due_carrier),
            lc_freight_charge.eq(updated_lc.lc_freight_charge),
            lc_insurance_chg.eq(updated_lc.lc_insurance_chg),
            lc_insurance_percentage.eq(updated_lc.lc_insurance_percentage),
            lc_insurance_amt.eq(updated_lc.lc_insurance_amt),
            lc_invoice_num.eq(updated_lc.lc_invoice_num),
            lc_mawb_no.eq(updated_lc.lc_mawb_no),
            lc_mobl_no.eq(updated_lc.lc_mobl_no),
            lc_hawb_hobl_no.eq(updated_lc.lc_hawb_hobl_no),
            lc_marks_and_numbers.eq(updated_lc.lc_marks_and_numbers),
            lc_no_of_pieces.eq(updated_lc.lc_no_of_pieces),
            lc_dimensions.eq(updated_lc.lc_dimensions),
            lc_po_no.eq(updated_lc.lc_po_no),
            lc_city_state_of_origin.eq(updated_lc.lc_city_state_of_origin),
            lc_country_of_origin.eq(updated_lc.lc_country_of_origin),
            lc_1st_flight_number.eq(updated_lc.lc_1st_flight_number),
            lc_2nd_flight_number.eq(updated_lc.lc_2nd_flight_number),
            lc_1st_to_city_code.eq(updated_lc.lc_1st_to_city_code),
            lc_1st_to_city_code_value.eq(updated_lc.lc_1st_to_city_code_value),
            lc_insurance_company_name.eq(updated_lc.lc_insurance_company_name),
            lc_insurance_company_address.eq(updated_lc.lc_insurance_company_address),
            lc_insurance_company_fax.eq(updated_lc.lc_insurance_company_fax),
            lc_other_receipt_name.eq(updated_lc.lc_other_receipt_name),
            lc_other_receipt_address.eq(updated_lc.lc_other_receipt_address),
            lc_other_receipt_fax.eq(updated_lc.lc_other_receipt_fax),
            lc_other_courier_name.eq(updated_lc.lc_other_courier_name),
            lc_other_courier_add.eq(updated_lc.lc_other_courier_add),
            lc_type.eq(updated_lc.lc_type),
            lc_amount_of_draw.eq(updated_lc.lc_amount_of_draw),
            lc_secondapplicant_header.eq(updated_lc.lc_secondapplicant_header),
            lc_secondapplicant_name.eq(updated_lc.lc_secondapplicant_name),
            lc_secondapplicant_address.eq(updated_lc.lc_secondapplicant_address),
            lc_date_id.eq(updated_lc.lc_date_id),
            lc_courier_id.eq(updated_lc.lc_courier_id),
            lc_information_currency.eq(updated_lc.lc_information_currency),
            
        ))
        .returning(LcInfo::as_select())
        .get_result::<LcInfo>(&mut self.pool.get().unwrap())
        .expect("Updated Table LC");

    Some(updated_lc)
}


// Update Customer
pub fn update_customer_table(
    &self,
    pagelcid: &i32,
    updated_lc: NewCustomerInfo,
) -> Option<CustomerInfo> {
    let updated_customer = diesel::update(customer_info_table.filter(customer_id.eq(pagelcid)))
        .set((
            customer_fax.eq(updated_lc.customer_fax),
            customer_full_name.eq(updated_lc.customer_full_name),
            customer_address.eq(updated_lc.customer_address),
            customer_code.eq(updated_lc.customer_code),
            customer_country.eq(updated_lc.customer_country),
            customer_states.eq(updated_lc.customer_states),
            customer_city.eq(updated_lc.customer_city),
            customer_forwarder_shipper_bank.eq(updated_lc.customer_forwarder_shipper_bank),
            customer_default_preparer.eq(updated_lc.customer_default_preparer),
            customer_customer_procedures.eq(updated_lc.customer_customer_procedures),
            customer_zipcode.eq(updated_lc.customer_zipcode),
            customer_phone.eq(updated_lc.customer_phone),
            customer_mailto.eq(updated_lc.customer_mailto),
            customer_type.eq(updated_lc.customer_type),
            customer_currency.eq(updated_lc.customer_currency),
            customer_toll_free.eq(updated_lc.customer_toll_free),
            customer_affiliated_with.eq(updated_lc.customer_affiliated_with),
            customer_uan.eq(updated_lc.customer_uan),
            customer_charges.eq(updated_lc.customer_charges),
            customer_fedex_account_no.eq(updated_lc.customer_fedex_account_no),
            customer_dhl_account_no.eq(updated_lc.customer_dhl_account_no),
            customer_ups_account_no.eq(updated_lc.customer_ups_account_no),
            customer_account_number.eq(updated_lc.customer_account_number),
            customer_aba.eq(updated_lc.customer_aba),
            customer_bank_name.eq(updated_lc.customer_bank_name),
            customer_payee_name.eq(updated_lc.customer_payee_name),
            customer_remarks.eq(updated_lc.customer_remarks),
            customer_contact_name.eq(updated_lc.customer_contact_name),
            customer_contact_phone.eq(updated_lc.customer_contact_phone),
            customer_contact_email.eq(updated_lc.customer_contact_email),
        ))
        .returning(CustomerInfo::as_select())
        .get_result::<CustomerInfo>(&mut self.pool.get().unwrap())
        .expect("Updated Table Customer");

    Some(updated_customer)
}


// Update Customer
pub fn update_bank_table(
    &self,
    pagelcid: &i32,
    updated_lc: NewBankInfo,
) -> Option<BankInfo> {
    let updated_bank = diesel::update(bank_info_table.filter(bank_id.eq(pagelcid)))
        .set((
            bank_name.eq(updated_lc.bank_name),
            bank_fax_number.eq(updated_lc.bank_fax_number),
            bank_address.eq(updated_lc.bank_address),
            bank_main_bank.eq(updated_lc.bank_main_bank),
            bank_country.eq(updated_lc.bank_country),
            bank_state.eq(updated_lc.bank_state),
            bank_city.eq(updated_lc.bank_city),
            bank_zipcode.eq(updated_lc.bank_zipcode),
            bank_email.eq(updated_lc.bank_email),
            bank_phone.eq(updated_lc.bank_phone),
        ))
        .returning(BankInfo::as_select())
        .get_result::<BankInfo>(&mut self.pool.get().unwrap())
        .expect("Updated Table Bank");

    Some(updated_bank)
}




}



// ---------------------- Database Operations End ----------------------------------------------------
