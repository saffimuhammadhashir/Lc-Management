use serde::{Deserialize, Serialize};
use diesel::{Queryable, Insertable, AsChangeset, Selectable, QueryableByName};


#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset,Selectable,PartialEq, QueryableByName, Eq, Hash)]
#[diesel(table_name = crate::repository::schema::lc_info_table)]

pub struct LcGlobalSearch {
    #[serde(default)]
    pub lc_id: i32,

    
}