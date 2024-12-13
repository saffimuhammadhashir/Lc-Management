use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};

#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset, Selectable)]
#[diesel(table_name = crate::repository::schema::customer_info_table)]

pub struct CustomerInfo {
    pub customer_id: i32,
    pub customer_fax: Option<String>,
    pub customer_full_name: Option<String>,
    pub customer_address: Option<String>,
    pub customer_code: Option<String>,
    pub customer_country: Option<String>,
    pub customer_states: Option<String>,
    pub customer_city: Option<String>,
    pub customer_forwarder_shipper_bank: Option<String>,
    pub customer_default_preparer: Option<String>,
    pub customer_customer_procedures: Option<String>,
    pub customer_zipcode: Option<String>,
    pub customer_phone: Option<String>,
    pub customer_mailto: Option<String>,
    pub customer_type: Option<String>,
    pub customer_currency: Option<String>,
    pub customer_toll_free: Option<String>,
    pub customer_affiliated_with: Option<String>,
    pub customer_uan: Option<String>,
    pub customer_charges: Option<String>,
    pub customer_fedex_account_no: Option<String>,
    pub customer_dhl_account_no: Option<String>,
    pub customer_ups_account_no: Option<String>,
    pub customer_account_number: Option<String>,
    pub customer_aba: Option<String>,
    pub customer_bank_name: Option<String>,
    pub customer_payee_name: Option<String>,
    pub customer_remarks: Option<String>,
    pub customer_contact_name: Option<String>,
    pub customer_contact_phone: Option<String>,
    pub customer_contact_email: Option<String>,
}