use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset};

#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset)]

#[diesel(table_name = crate::repository::schema::airports)]

pub struct NewAirportModel {
    pub airport_code: Option<String>,
    pub airport_name: Option<String>,
    pub city_name: Option<String>,
    pub country_name: Option<String>,
    pub country_code: Option<String>,

}