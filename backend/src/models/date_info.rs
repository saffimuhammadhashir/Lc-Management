use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};
use diesel::QueryableByName;
use chrono::NaiveDate;


#[derive(Queryable, Selectable, Debug, PartialEq, Clone, Serialize, Deserialize, Insertable, AsChangeset, QueryableByName)]
#[diesel(table_name = crate::repository::schema::date_info_table)]



pub struct DateInfo {
    pub date_id: i32,
    pub date_date_received: Option<NaiveDate>,
    pub date_dte_snt_to_legalize: Option<NaiveDate>,
    pub date_legalize_ret_dte: Option<NaiveDate>,
    pub date_maturity_date: Option<NaiveDate>,
    pub date_expiry_date: Option<NaiveDate>,
    pub date_latest_shipment_date: Option<NaiveDate>,
    pub date_date_sent_inspection: Option<NaiveDate>,
    pub date_ship_date: Option<NaiveDate>,
    pub date_awb_bl_recv_date: Option<NaiveDate>,
    pub date_date_paid: Option<NaiveDate>,
    pub date_date_sent_to_bank: Option<NaiveDate>,
    pub date_next_trace_dt: Option<NaiveDate>,
    pub date_last_update: Option<NaiveDate>,
    pub date_issue_date: Option<NaiveDate>,
    pub date_invoice_date: Option<NaiveDate>,
    pub date_1st_flight_date: Option<NaiveDate>,
    pub date_2nd_flight_date: Option<NaiveDate>,

}