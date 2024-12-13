use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};



#[derive(Queryable, Selectable, Debug, PartialEq, Serialize, Deserialize, Clone, Insertable, AsChangeset)]


#[diesel(table_name = crate::repository::schema::csc_states_table)]

pub struct CSCState {
    pub id: i32,
    pub name: String,
    pub country_id: i32,
    pub country_code: String,
    pub fips_code: Option<String>,
    pub iso2: Option<String>,
}