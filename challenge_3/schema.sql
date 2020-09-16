CREATE DATABASE miniapp;

USE miniapp;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  passwords VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  creditcardNumber INT,
  addressLineOne VARCHAR(50),
  addressLineTwo VARCHAR(50),
  city VARCHAR(20),
  states VARCHAR(20),
  zip INT,
  phone BIGINT,
  expiration INT,
  cvv INT,
  billingZip INT,
  PRIMARY KEY(id)
);