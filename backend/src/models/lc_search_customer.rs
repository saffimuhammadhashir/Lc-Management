use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable, QueryableByName};


#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset,Selectable,PartialEq, QueryableByName)]
#[diesel(table_name = crate::repository::schema::customer_info_table)]


pub struct LcGlobalSearchCustomer {
    #[serde(default)]
    pub customer_id: i32,

    
}