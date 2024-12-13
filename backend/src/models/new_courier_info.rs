use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset};
use chrono::NaiveDate;

#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset)]

#[diesel(table_name = crate::repository::schema::courier_info_table)]

pub struct NewCourierInfo {
    pub courier_no_of_days_to_present: Option<String>,
    pub courier_issuing_bank_courier: Option<String>,
    pub courier_issuing_bank_courier_courier_co: Option<String>,
    pub courier_latest_presentation_date: Option<NaiveDate>,
    pub courier_domestic_bank_courier: Option<String>,
    pub courier_domestic_bank_courier_courier_co: Option<String>,
    pub courier_target_date_to_complete: Option<NaiveDate>,
    pub courier_applicant_courier: Option<String>,
    pub courier_applicant_courier_courier_co: Option<String>,
    pub courier_actual_date_completed: Option<NaiveDate>,
    pub courier_2nd_appt_courier: Option<String>,
    pub courier_2nd_appt_courier_courier_co: Option<String>,
    pub courier_pc_completed: Option<NaiveDate>,
    pub courier_inbound_courier: Option<String>,
    pub courier_inbound_courier_courier_co: Option<String>,
    pub courier_date_reimbursment_filed: Option<NaiveDate>,
    pub courier_inbound_rtn_courier: Option<String>,
    pub courier_inbound_rtn_courier_courier_co: Option<String>,
    pub courier_reimbursment_via: Option<String>,
    pub courier_outbound_rtn_courier: Option<String>,
    pub courier_outbound_rtn_courier_courier_co: Option<String>,
    pub courier_target_paid_date: Option<NaiveDate>,
    pub courier_other_courier: Option<String>,
    pub courier_other_courier_courier_co: Option<String>,

}