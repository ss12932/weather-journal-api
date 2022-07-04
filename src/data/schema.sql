DROP DATABASE IF EXISTS weather_journal_db;

CREATE DATABASE weather_journal_db;

USE weather_journal_db;

CREATE TABLE journals (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  imageURL VARCHAR(255) NOT NULL,
  startDate DATE,
  endDate DATE,
  PRIMARY KEY (id)
);

CREATE TABLE cities (
  id INT NOT NULL AUTO_INCREMENT,
  journalId INT NOT NULL,
  cityName VARCHAR(255) NOT NULL,
  temperature DECIMAL(8, 2) NOT NULL,
  humidity DECIMAL(8, 2) NOT NULL,
  windSpeed DECIMAL(8, 2) NOT NULL,
  weatherDescription VARCHAR(255) NOT NULL,
  countryCode VARCHAR(255) NOT NULL,
  FOREIGN KEY (journalId) REFERENCES journals(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);