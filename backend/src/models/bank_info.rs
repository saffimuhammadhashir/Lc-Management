use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};
use diesel::QueryableByName;


#[derive(Queryable, Selectable, Debug, PartialEq, Clone, Serialize, Deserialize, Insertable, AsChangeset, QueryableByName)]
#[diesel(table_name = crate::repository::schema::bank_info_table)]



pub struct BankInfo {
    pub bank_id: i32,
    pub bank_name: Option<String>,
    pub bank_fax_number: Option<String>,
    pub bank_main_bank: Option<String>,
    pub bank_address: Option<String>,
    pub bank_country: Option<String>,
    pub bank_state: Option<String>,
    pub bank_city: Option<String>,
    pub bank_zipcode: Option<String>,
    pub bank_phone: Option<String>,
    pub bank_email: Option<String>,

}