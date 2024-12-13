use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable};

use diesel::QueryableByName;

#[derive(Queryable, Selectable, Debug, PartialEq, Serialize, Deserialize, Clone, Insertable, AsChangeset, QueryableByName)]

#[diesel(table_name = crate::repository::schema::select_table)]

pub struct SelectFieldTable {
    // #[serde(skip_serializing)]
    pub field_name: Option<String>,
    pub field_value: Option<String>
     
}

  