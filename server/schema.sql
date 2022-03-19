CREATE DATABASE movies;

USE movies;

CREATE TABLE Movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(35) NOT NULL,
  release_date int NOT NULL,
  runtime int NOT NULL,
  metascore int NOT NULL,
  imdb_rating int NOT NULL,
  watched int NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

