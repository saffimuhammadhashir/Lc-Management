use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable, QueryableByName};


#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset,Selectable,PartialEq, QueryableByName)]
#[diesel(table_name = crate::repository::schema::bank_info_table)]


pub struct LcGlobalSearchBank {
    #[serde(default)]
    pub bank_id: i32,

    
}