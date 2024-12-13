use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};

#[derive(Queryable, Selectable, Debug, PartialEq, Clone, Serialize, Deserialize, Insertable, AsChangeset)]
#[diesel(table_name = crate::repository::schema::airports)]


pub struct AirportModel {
    #[serde(default)]

    pub airport_id: i32,
    pub airport_code: Option<String>,
    pub airport_name: Option<String>,
    pub city_name: Option<String>,
    pub country_name: Option<String>,
    pub country_code: Option<String>,
}