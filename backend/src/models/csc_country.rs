use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};



#[derive(Queryable, Selectable, Debug, PartialEq, Serialize, Deserialize, Clone, Insertable, AsChangeset)]


#[diesel(table_name = crate::repository::schema::csc_countries_table)]

pub struct CSCCountry {
    pub id: i32,
    pub name: String,
    pub iso3: Option<String>,
    pub iso2: Option<String>,
    pub phonecode: Option<String>,
    pub capital: Option<String>,
    pub currency: Option<String>,
    pub currency_symbol: Option<String>,
}