FROM docker.io/rust:slim

RUN apt-get update && apt-get install -y libpq5
#RUN cargo install diesel_cli --no-default-features --features postgres


ENV APP_USER=appuser

RUN groupadd -r $APP_USER && useradd -r -g $APP_USER $APP_USER

WORKDIR /app

COPY ./target/release/rust-actix-web-rest-api .

# Create a directory for migrations
#RUN mkdir /app/migrations

# Copy all migration files from host to container
#COPY migrations/ /app/migrations/



RUN chmod +x rust-actix-web-rest-api

# Install PostgreSQL client tools
#RUN apt-get update && apt-get install -y postgresql-client



USER $APP_USER

EXPOSE 8080

# ENV DATABASE_URL='postgresql://sherry:sherry@postgres-container:5432/mydatabase'
#ENV DATABASE_URL='postgresql://postgres:mypassword@172.21.0.11:5432/mydatabase'

CMD ["./rust-actix-web-rest-api"]


