use std::collections::HashSet;

use actix_web::{web, get, post, delete, put, HttpResponse};


use crate::{
    models::{admin::Admin, bank_info::BankInfo, date_info::DateInfo, courier_info::CourierInfo, customer_info::CustomerInfo, lc_info::LcInfo, new_airport_model::NewAirportModel, new_iata_model::NewIataModel, lc_search_full::LcGlobalSearch, new_bank::NewBankInfo, new_courier_info::NewCourierInfo, new_customer::NewCustomerInfo, new_date_info::NewDateInfo, new_lc_info::NewLcInfo, select_fields::SelectFieldTable}, 
    repository::database::Database};


// API's for customers
#[post("/customers")]
pub async fn create_customer(db: web::Data<Database>, new_customer: web::Json<NewCustomerInfo>) -> HttpResponse {
    let customer = db.create_customer(new_customer.into_inner());
    match customer {
        Ok(customer) => HttpResponse::Ok().json(customer),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[get("/customers/{id}")]
pub async fn get_customer_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let customer = db.get_customer_by_id(&id);

    match customer {
        Some(customer) => HttpResponse::Ok().json(customer),
        None => HttpResponse::NotFound().body("Customer not found"),
    }
}

#[get("/customers")]
pub async fn get_customers(db: web::Data<Database>) -> HttpResponse {
    let customers = db.get_customers();
    HttpResponse::Ok().json(customers)
}

#[delete("/customers/{id}")]
pub async fn delete_customer_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let customer = db.delete_customer_by_id(&id);
    match customer {
        Some(_) => HttpResponse::Ok().finish(),
        None => HttpResponse::NotFound().body("Customer not found"),
    }
}

#[put("/customers/{id}")]
pub async fn update_customer_by_id(db: web::Data<Database>, id: web::Path<i32>, updated_customer: web::Json<CustomerInfo>) -> HttpResponse {
    let customer = db.update_customer_by_id(&id, updated_customer.into_inner());
    match customer {
        Some(customer) => HttpResponse::Ok().json(customer),
        None => HttpResponse::NotFound().body("User not found"),
    }
}



// API's for Banks
#[post("/banks")]
pub async fn create_bank(db: web::Data<Database>, new_bank: web::Json<NewBankInfo>) -> HttpResponse {
    //println!("{}", new_bank.full_name);
    let bank = db.create_banks(new_bank.into_inner());
    match bank {
        Ok(bank) => HttpResponse::Ok().json(bank),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[get("/banks/{id}")]
pub async fn get_bank_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let bank = db.get_bank_by_id(&id);

    match bank {
        Some(bank) => HttpResponse::Ok().json(bank),
        None => HttpResponse::NotFound().body("Bank not found"),
    }
}

#[get("/banks")]
pub async fn get_banks(db: web::Data<Database>) -> HttpResponse {
    let banks = db.get_banks();
    HttpResponse::Ok().json(banks)
}

#[delete("/banks/{id}")]
pub async fn delete_bank_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let bank = db.delete_bank_by_id(&id);
    match bank {
        Some(_) => HttpResponse::Ok().finish(),
        None => HttpResponse::NotFound().body("Bank not found"),
    }
}

#[put("/banks/{id}")]
pub async fn update_bank_by_id(db: web::Data<Database>, id: web::Path<i32>, updated_bank: web::Json<BankInfo>) -> HttpResponse {
    let bank = db.update_bank_by_id(&id, updated_bank.into_inner());
    match bank {
        Some(bank) => HttpResponse::Ok().json(bank),
        None => HttpResponse::NotFound().body("User not found"),
    }
}

// API's for LC
#[post("/lcs")]
pub async fn create_lc(db: web::Data<Database>, new_lc: web::Json<LcInfo>) -> HttpResponse {
    //println!("{}", new_lc.full_name);
    let lc = db.create_lcs(new_lc.into_inner());
    match lc {
        Ok(lc) => HttpResponse::Ok().json(lc),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[get("/lcs/{id}")]
pub async fn get_lc_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let lc = db.get_lc_by_id(&id);

    match lc {
        Some(lc) => HttpResponse::Ok().json(lc),
        None => HttpResponse::NotFound().body("Lc not found"),
    }
}

#[get("/lcs")]
pub async fn get_lcs(db: web::Data<Database>) -> HttpResponse {
    let lcs = db.get_lcs();
    HttpResponse::Ok().json(lcs)
}

#[delete("/lcs/{id}")]
pub async fn delete_lc_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let lc = db.delete_lc_by_id(&id);
    match lc {
        Some(_) => HttpResponse::Ok().finish(),
        None => HttpResponse::NotFound().body("Lc not found"),
    }
}

#[put("/lcs/{id}")]
pub async fn update_lc_by_id(db: web::Data<Database>, id: web::Path<i32>, updated_lc: web::Json<LcInfo>) -> HttpResponse {
    let lc = db.update_lc_by_id(&id, updated_lc.into_inner());
    match lc {
        Some(lc) => HttpResponse::Ok().json(lc),
        None => HttpResponse::NotFound().body("User not found"),
    }
}

#[get("/Recent_LC_Information")]
pub async fn recent_lc_information(db: web::Data<Database>) -> HttpResponse {
    let recentlc = db.recent_lc_information();
    HttpResponse::Ok().json(recentlc)
}

#[get("/lc_count")]
pub async fn lc_count(db: web::Data<Database>) -> HttpResponse {
    let result: i64 = db.lc_count();
    return HttpResponse::Ok().body(result.to_string());
    
}



// API's for Authentication and Registration
#[post("/login")]
pub async fn authenication(db: web::Data<Database>, new_user: web::Json<Admin>) -> HttpResponse {
    println!("Login Api");

    let user1: Admin = Admin {
        admin_username: new_user.admin_username.to_owned(),
        admin_password: new_user.admin_password.to_owned()
    };

    let user_exist = db.login(user1);
    println!("Final Result: {:?}", user_exist);
    HttpResponse::Ok().json(user_exist)
}

#[post("/register_Admin")]
pub async fn register_admin(db: web::Data<Database>, new_admin: web::Json<Admin>) -> HttpResponse {
    println!("Register Admin Api");
    let admin = db.register_admin(new_admin.into_inner());
    match admin {
        Ok(admin) => HttpResponse::Ok().json(admin),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}




#[get("/List_Of_Admins")]
pub async fn list_of_admins(db: web::Data<Database>) -> HttpResponse {
    match db.list_of_admins() {
        Ok(Some(admins)) => HttpResponse::Ok().json(admins),
        Ok(None) => HttpResponse::NotFound().body("No admins found"),
        Err(_) => HttpResponse::InternalServerError().body("Internal server error"),
    }
}



// ! Other 
#[get("/hello")]
pub async fn hello_world(db: web::Data<Database>) -> HttpResponse {
    let hello = db.hello_world();
    HttpResponse::Ok().json(hello)
}

// ! Country List

#[get("/countryList")]
pub async fn country_list(db: web::Data<Database>) -> HttpResponse {
    let countries = db.country_list();
    HttpResponse::Ok().json(countries)
}

#[get("/getCountry/{id}")]
pub async fn get_country_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let country = db.get_country_by_id(&id);

    match country {
        Some(country) => HttpResponse::Ok().json(country),
        None => HttpResponse::NotFound().body("country not found"),
    }
}



#[get("/CSCCountryNameAll")]
pub async fn all_csc_country_name_function(db: web::Data<Database>) -> HttpResponse {
    let csc_countries = db.all_csc_country_name_db_function();
    HttpResponse::Ok().json(csc_countries)
}



#[get("/CSCStateByCountryName/{id}")]
pub async fn csc_state_by_country(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let state = db.csc_state_by_country(&id);
    HttpResponse::Ok().json(state)
}


#[get("/CSCCityByStateAndCountryName/{id}")]
pub async fn csc_city_by_state_and_country(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let city = db.csc_city_by_state_and_country(&id);
    HttpResponse::Ok().json(city)
}


// ! Currency List

#[get("/CurrencyList")]
pub async fn currency_list(db: web::Data<Database>) -> HttpResponse {
    let currencies = db.currency_list();
    HttpResponse::Ok().json(currencies)
}

#[get("/getCurrency/{id}")]
pub async fn get_currency_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let currency = db.get_currency_by_id(&id);

    match currency {
        Some(currency) => HttpResponse::Ok().json(currency),
        None => HttpResponse::NotFound().body("currency not found"),
    }
}

// ! Airport List

#[get("/AirportList")]
pub async fn airport_list(db: web::Data<Database>) -> HttpResponse {
    let airports: Vec<crate::models::airport_model::AirportModel> = db.airport_list();
    HttpResponse::Ok().json(airports)
}

#[get("/getAirport/{id}")]
pub async fn get_airport_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let airport = db.get_airport_by_id(&id);
    match airport {
        Some(airport) => HttpResponse::Ok().json(airport),
        None => HttpResponse::NotFound().body("airport not found"),
    }
}


#[post("/create_airport")]
pub async fn create_airport(db: web::Data<Database>, new_airport: web::Json<NewAirportModel>) -> HttpResponse {
    let airport = db.create_airport(new_airport.into_inner());
    match airport {
        Ok(airport) => HttpResponse::Ok().json(airport),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

// ! Iata List

#[get("/IataList")]
pub async fn iata_list(db: web::Data<Database>) -> HttpResponse {
    let iata_list: Vec<crate::models::iata_model::IataModel> = db.iata_list();
    HttpResponse::Ok().json(iata_list)
}


#[get("/getIataCode/{id}")]
pub async fn get_iata_by_id(db: web::Data<Database>, id: web::Path<String>) -> HttpResponse {
    let iada_code: Option<crate::models::iata_model::IataModel> = db.get_iata_by_id(&id);
    match iada_code {
        Some(iada_code) => HttpResponse::Ok().json(iada_code),
        None => HttpResponse::NotFound().body("iada code not found"),
    }
}

#[post("/create_iatacode")]
pub async fn create_iatacode(db: web::Data<Database>, new_iata_code: web::Json<NewIataModel>) -> HttpResponse {
    let iada_code = db.create_iatacode(new_iata_code.into_inner());
    match iada_code {
        Ok(iada_code) => HttpResponse::Ok().json(iada_code),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}


// ! Search
#[get("/get_lc_bank_customer_by_id/{id}")]
pub async fn get_lc_bank_customer_by_id(db: web::Data<Database>, id: web::Path<i32>) -> HttpResponse {
    let my_lc = db.get_lc_bank_customer_by_id(&id);
    HttpResponse::Ok().json(my_lc)
}

#[get("/global_search_lc/{search_query}")]
pub async fn global_search_lc(db: web::Data<Database>,  path: web::Path<String>,) -> HttpResponse {
    let search_query = path.into_inner();
    let search_query_result = db.global_search_lc(&search_query);
    HttpResponse::Ok().json(search_query_result)
}


#[get("/global_search_bank/{search_query}")]
pub async fn global_search_bank(db: web::Data<Database>,  path: web::Path<String>,) -> HttpResponse {
    let query_string = path.into_inner();
    let search_query_result = db.global_search_bank(&query_string);
    HttpResponse::Ok().json(search_query_result)
}

#[get("/global_search_customer/{search_query}")]
pub async fn global_search_customer(db: web::Data<Database>,  path: web::Path<String>,) -> HttpResponse {
    let query_string = path.into_inner();
    let search_query_result = db.global_search_customer(&query_string);
    HttpResponse::Ok().json(search_query_result)
}

#[get("/convert_bankid_to_lcid/{search_query}")]
pub async fn convert_bankid_to_lcid(db: web::Data<Database>,  path: web::Path<String>,) -> HttpResponse {
    let query_string = path.into_inner();
    let search_query_result = db.convert_bankid_to_lcid(&query_string);
    HttpResponse::Ok().json(search_query_result)
}


#[get("/global_search_bank_convert_lcid/{search_query}")]
pub async fn global_search_bank_convert_lcid(db: web::Data<Database>,  path: web::Path<String>,) -> HttpResponse {
    let query_string = path.into_inner();
    let search_query_result = db.global_search_bank_convert_lcid(&query_string);
    HttpResponse::Ok().json(search_query_result)
}


#[get("/global_search_customer_convert_lcid/{search_query}")]
pub async fn global_search_customer_convert_lcid(db: web::Data<Database>,  path: web::Path<String>,) -> HttpResponse {
    let query_string = path.into_inner();
    let search_query_result = db.global_search_customer_convert_lcid(&query_string);
    HttpResponse::Ok().json(search_query_result)
}

#[get("/global_search_all/{search_query}")]
pub async fn global_search_all(
    db: web::Data<Database>,
    path: web::Path<String>,
) -> HttpResponse {
    let query_string = path.into_inner();

    // println!("global_search_all");
    let api1_result = db.global_search_customer_convert_lcid(&query_string);
    let api2_result = db.global_search_bank_convert_lcid(&query_string);
    let api3_result = db.global_search_lc(&query_string);

    // Ensure that LcGlobalSearch implements Eq and Hash
    let mut unique_result_set: HashSet<LcGlobalSearch> = HashSet::new();

    for item in api1_result {
        unique_result_set.insert(item);
    }

    for item in api2_result {
        unique_result_set.insert(item);
    }

    for item in api3_result {
        unique_result_set.insert(item);
    }

    // Convert HashSet to Vec
    let unique_result: Vec<LcGlobalSearch> = unique_result_set.into_iter().collect();

    HttpResponse::Ok().json(unique_result)
}



#[get("/get_all_ids")]
pub async fn get_all_ids(db: web::Data<Database>) -> HttpResponse {
    let search_query_result: Vec<LcGlobalSearch> = db.get_all_ids();
    HttpResponse::Ok().json(search_query_result)
}


// Search Any
#[get("/HomepageSearch/{row_name}/{row_value}")]
pub async fn homepage_search(
    db: web::Data<Database>,
    path: web::Path<(String, String)>,
) -> HttpResponse {
    let (row_name, row_value) = path.into_inner();
    println!("We are inside the search API Function");
    let result = db.homepage_search(&row_name, &row_value);
    HttpResponse::Ok().json(result)
}


// Date
#[post("/date")]
pub async fn create_date(db: web::Data<Database>, new_date: web::Json<NewDateInfo>) -> HttpResponse {
    let date = db.create_date(new_date.into_inner());
    match date {
        Ok(date) => HttpResponse::Ok().json(date),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}


// Courier
#[post("/courier")]
pub async fn create_courier(db: web::Data<Database>, new_courier: web::Json<NewCourierInfo>) -> HttpResponse {
    let courier = db.create_courier(new_courier.into_inner());
    match courier {
        Ok(courier) => HttpResponse::Ok().json(courier),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}



// Select Fields Add
#[post("/Select")]
pub async fn add_item_select(db: web::Data<Database>, new_item: web::Json<SelectFieldTable>) -> HttpResponse {
    let item = db.add_item_select(new_item.into_inner());
    match item {
        Ok(item) => HttpResponse::Ok().json(item),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

// Select Fields Search
#[get("/Select/{row_name}")]
pub async fn select_find(db: web::Data<Database>,  path: web::Path<String>) -> HttpResponse {
    let query_string = path.into_inner();
    let items = db.select_find(&query_string);
    HttpResponse::Ok().json(items)


}

// Select Fields Remove
#[get("/Select/{row_name}/{row_value}")]
pub async fn remove_item_select(db: web::Data<Database>, path: web::Path<(String, String)>,) -> HttpResponse {
    let (row_name, row_value) = path.into_inner();
    let item = db.remove_item_select(&row_name, &row_value);
    match item {
        Ok(item) => HttpResponse::Ok().json(item),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}



// set Courier ID and Date ID
#[get("/date_courier_set")]
pub async fn date_courier_set(db: web::Data<Database>) -> HttpResponse {
    let result = db.date_courier_set();
    match result {
        Ok(result) => HttpResponse::Ok().json(result),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[put("/update_courier_table/{id}")]
pub async fn update_courier_table(db: web::Data<Database>, pagelcid: web::Path<i32>, updated_lc: web::Json<NewCourierInfo>) -> HttpResponse {
    let result: Option<CourierInfo> = db.update_courier_table(&pagelcid, updated_lc.into_inner());
    match result {
        Some(result) => HttpResponse::Ok().json(result),
        None => HttpResponse::NotFound().body("Not found Courier Table"),
    }
}

#[put("/update_date_table/{id}")]
pub async fn update_date_table(db: web::Data<Database>, pagelcid: web::Path<i32>, updated_lc: web::Json<NewDateInfo>) -> HttpResponse {
    let result: Option<DateInfo> = db.update_date_table(&pagelcid, updated_lc.into_inner());
    match result {
        Some(result) => HttpResponse::Ok().json(result),
        None => HttpResponse::NotFound().body("Not found Date Table"),
    }
}


#[put("/update_lc_table/{id}")]
pub async fn update_lc_table(db: web::Data<Database>, pagelcid: web::Path<i32>, updated_lc: web::Json<NewLcInfo>) -> HttpResponse {
    let result: Option<LcInfo> = db.update_lc_table(&pagelcid, updated_lc.into_inner());
    match result {
        Some(result) => HttpResponse::Ok().json(result),
        None => HttpResponse::NotFound().body("Not found Lc Table"),
    }
}


#[put("/update_customer_table/{id}")]
pub async fn update_customer_table(db: web::Data<Database>, pagelcid: web::Path<i32>, updated_lc: web::Json<NewCustomerInfo>) -> HttpResponse {
    let result: Option<CustomerInfo> = db.update_customer_table(&pagelcid, updated_lc.into_inner());
    match result {
        Some(result) => HttpResponse::Ok().json(result),
        None => HttpResponse::NotFound().body("Not found Customer Table"),
    }
}


#[put("/update_bank_table/{id}")]
pub async fn update_bank_table(db: web::Data<Database>, pagelcid: web::Path<i32>, updated_lc: web::Json<NewBankInfo>) -> HttpResponse {
    let result: Option<BankInfo> = db.update_bank_table(&pagelcid, updated_lc.into_inner());
    match result {
        Some(result) => HttpResponse::Ok().json(result),
        None => HttpResponse::NotFound().body("Not found Bank Table"),
    }
}





pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
        // Customer
        .service(create_customer)
        .service(get_customer_by_id)
        .service(get_customers)
        .service(delete_customer_by_id)
        .service(update_customer_by_id)

        // Bank
        .service(create_bank)
        .service(get_bank_by_id)
        .service(get_banks)
        .service(delete_bank_by_id)
        .service(update_bank_by_id)

        // Date
        .service(create_date)

        // Courier
        .service(create_courier)

        // Lc
        .service(create_lc)
        .service(get_lc_by_id)
        .service(get_lcs)
        .service(delete_lc_by_id)
        .service(update_lc_by_id)
        
        // Authenication
        .service(authenication)
        .service(register_admin)
        .service(list_of_admins)

        // Example
        .service(hello_world)
        
        // Country
        .service(country_list)
        .service(get_country_by_id)


        // Currency
        .service(currency_list)
        .service(get_currency_by_id)


        // Airports
        .service(airport_list)
        .service(get_airport_by_id)
        .service(create_airport)

        // Iata Codes
        .service(iata_list)
        .service(get_iata_by_id)
        .service(create_iatacode)
      

        // Update Table
        .service(update_courier_table)
        .service(update_date_table)
        .service(update_lc_table)
        .service(update_customer_table)
        .service(update_bank_table)
        
        
        // CSC
        .service(all_csc_country_name_function)
        .service(csc_state_by_country)
        .service(csc_city_by_state_and_country)
        
        // Homepage
        .service(get_all_ids)
        .service(recent_lc_information)
        .service(lc_count)
        .service(date_courier_set)


        // Search All
        .service(global_search_lc)
        .service(global_search_bank)
        .service(global_search_customer)
        .service(convert_bankid_to_lcid)
        .service(global_search_bank_convert_lcid)
        .service(global_search_customer_convert_lcid)
        .service(global_search_all)
        .service(get_lc_bank_customer_by_id)
        
        // Search Any
        .service(homepage_search)

        // Create LC Complete
        // .service(create_complete_lc)


        // Add Select
        .service(add_item_select)
        .service(select_find)
        .service(remove_item_select)
        
            
    );
}
