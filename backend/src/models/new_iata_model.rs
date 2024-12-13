use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};

#[derive(Queryable, Selectable, Debug, PartialEq, Clone, Serialize, Deserialize, Insertable, AsChangeset)]
#[diesel(table_name = crate::repository::schema::iata_codes)]


pub struct NewIataModel {
    pub mawb_code: Option<String>,
    pub iata_code: Option<String>,
    pub airline_name: Option<String>,

}