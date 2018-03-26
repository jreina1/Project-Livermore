DROP DATABASE IF EXISTS `livermore_schema3`;

CREATE DATABASE IF NOT EXISTS livermore_schema3;
USE livermore_schema3;



CREATE TABLE Patient (
	Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Patient_first_name VARCHAR(100) NOT NULL,
    Patient_last_name VARCHAR(100) NOT NULL,
    
    PRIMARY KEY (Id)

);

CREATE TABLE PatientDisease (
	Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Patient_id INT NOT NULL, 
    Patient_snomed_code INT NOT NULL,
    Patient_symptoms TEXT NOT NULL,
    Patient_treatment TEXT NOT NULL, 
    Disease_name TEXT NOT NULL,
    Disease_overview TEXT NOT NULL,
    Disease_symptoms TEXT NOT NULL,
    Disease_treatment TEXT,
    Disease_causes TEXT NOT NULL,
    Disease_risk_factors TEXT,
    Disease_complications TEXT, 
    Disease_preventions TEXT,
    Disease_resources TEXT,
    
    PRIMARY KEY (Id),
    KEY (Patient_id)

);
