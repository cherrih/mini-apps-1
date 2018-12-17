-- what my table should look like
CREATE DATABASE IF NOT EXISTS user_data;

USE user_data;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(50),
  password VARCHAR(20),
  addressline1 VARCHAR(20),
  addressline2 VARCHAR(20),
  city VARCHAR(20),
  state VARCHAR(12),
  zip INT,
  phonenumber BIGINT,
  creditcardnumber BIGINT,
  expiry VARCHAR(20),
  cvv INT,
  billingzip INT
)

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql;
 *  to execute the queries in this file.
 */