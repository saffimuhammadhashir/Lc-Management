use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};

#[derive(Queryable, Selectable, Debug, PartialEq, Clone, Serialize, Deserialize, Insertable, AsChangeset)]
#[diesel(table_name = crate::repository::schema::currency_table)]


pub struct Currency {
    pub currency_id: i32,
    pub currency_name_singular: Option<String>,
    pub currency_name_plural: Option<String>,
    pub currency_code: Option<String>,
    pub currency_symbol: Option<String>,
    pub currency_denomination: Option<String>,
    pub currency_fraction_name_singular: Option<String>,
    pub currency_fraction_name_plural: Option<String>,
    pub currency_fraction_unit: Option<String>,
    pub currency_delimiter: Option<String>,
    pub currency_separator: Option<String>,
    pub currency_description: Option<String>,
}