#![recursion_limit = "256"]


use actix_web::{get, web, App, HttpResponse, HttpServer, Responder, Result};
use actix_cors::Cors;
use serde::Serialize;


mod api;
mod models;
mod repository;

#[derive(Serialize)]
pub struct Response {
    pub message: String,
}

#[get("/health")]
async fn healthcheck() -> impl Responder {
    let response = Response {
        message: "Everything is working fine".to_string(),
    };
    HttpResponse::Ok().json(response)
}


async fn not_found() -> Result<HttpResponse> {
    let response = Response {
        message: "Resource not found".to_string(),
    };
    Ok(HttpResponse::NotFound().json(response))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    println!("Working Fine 27-05-2024");

    let lcm_db = repository::database::Database::new();
    let app_data = web::Data::new(lcm_db);
    
    let result = app_data.run_migrations(); // running migrations

    match result { //evaluating result
        Ok(_res)=>{
           println!("Migrations synchronized successfully.{:?}", _res)
        }
        Err(err)=>{
            println!("Error synchronizing Migrations: {:?}", err)
        }
    	} 

    HttpServer::new(move || {

        let cors = Cors::default()
        .allow_any_header()
        .allow_any_origin()
        .allow_any_method();

        App::new()
            .wrap(cors)
            .app_data(app_data.clone())
            .configure(api::api::config)
            .service(healthcheck)
            .default_service(web::route().to(not_found))
            .wrap(actix_web::middleware::Logger::default())
            
})
        .bind(("0.0.0.0", 8080))?
        .run()
        .await
}

