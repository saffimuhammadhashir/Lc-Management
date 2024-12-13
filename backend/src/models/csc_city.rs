use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};



#[derive(Queryable, Selectable, Debug, PartialEq, Serialize, Deserialize, Clone, Insertable, AsChangeset)]


#[diesel(table_name = crate::repository::schema::csc_city_table)]

pub struct CSCCity {
    pub id: i32,
    pub name: String,
    pub state_id: i32,
    pub state_code: String,
    pub country_id: i32,
    pub country_code: String,
}