DROP DATABASE IF EXISTS `livermore`;

CREATE DATABASE IF NOT EXISTS livermore;
USE livermore;


CREATE TABLE PatientID (
    Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Patient_id INT NOT NULL,
    
    PRIMARY KEY (Id),
    KEY (Patient_id)
);

CREATE TABLE Patient (
    Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Patient_id INT NOT NULL,
    Patient_first_name VARCHAR(100) NOT NULL,
    Patient_last_name VARCHAR(100) NOT NULL,
    Patient_snomed_code INT NOT NULL,
    Patient_diagnosis TEXT NOT NULL,
    Patient_symptoms TEXT NOT NULL,
    Patient_treatment TEXT NOT NULL,
    
    PRIMARY KEY (Patient_id),
    KEY (Id)

);

CREATE TABLE Disease (
    Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Patient_snomed_code INT NOT NULL,
    Disease_name TEXT NOT NULL,
    Disease_overview TEXT NOT NULL,
    Disease_symptoms TEXT,
    Disease_treatment TEXT,
    Disease_causes TEXT,
    Disease_risk_factors TEXT,
    Disease_complications TEXT, 
    Disease_preventions TEXT,
    Disease_resources TEXT,
    
    PRIMARY KEY (Id)

);

/* constraint patient id --> patient */
ALTER TABLE Patient
	ADD CONSTRAINT fk_Patient_Id_PatientID_Id FOREIGN KEY (Id) REFERENCES PatientID (Id);
   
