CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    content_type VARCHAR(255),
    upload_date TIMESTAMPTZ DEFAULT NOW()
);

