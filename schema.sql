DROP DATABASE IF EXISTS ChatApp;

CREATE DATABASE ChatApp;

USE ChatApp;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  email varchar(70) NOT NULL,
  password varchar(50) NOT NULL,
  registerDate Date,
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
