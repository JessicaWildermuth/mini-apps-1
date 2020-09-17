CREATE DATABASE miniapp;

USE miniapp;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  passwords VARCHAR(20) NOT NULL,
  addressLineOne VARCHAR(50),
  addressLineTwo VARCHAR(50),
  city VARCHAR(20),
  stateof VARCHAR(20),
  zip VARCHAR(30),
  phone VARCHAR(30),
  creditcardNumber VARCHAR(30),
  expiration VARCHAR(30),
  cvv VARCHAR(30),
  billingZip VARCHAR(30),
  PRIMARY KEY(id)
);


