CREATE DATABASE barmenu;

CREATE TABLE cocktail(
   cocktail_id SERIAL PRIMARY KEY,
   title VARCHAR(255),
   description VARCHAR(255) NOT NULL,
   image_path  VARCHAR(255),
   price INTEGER NOT NULL,
   ingredients VARCHAR(255) NOT NULL
);