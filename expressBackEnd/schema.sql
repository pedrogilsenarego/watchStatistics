create database watchStatistics

use watchStatistics;

CREATE TABLE submitForm (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    `timestamp` TIMESTAMP DEFAULT NOW()
);