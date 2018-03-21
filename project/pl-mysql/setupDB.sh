#!/bin/bash

#create a table 
mysql -v -u iwant -pmoreLiverPlease livermore -e "create table patients (
	id int NOT NULL AUTO_INCREMENT, 
	firstName varchar(20) DEFAULT NULL, 
	lastName varchar(20) DEFAULT NULL, 
	patientId varchar(20) DEFAULT NULL, 
	snomed varchar(20) DEFAULT NULL, 
	PRIMARY KEY (id) );"

mysql -v -u iwant -pmoreLiverPlease livermore -e "create table diseaseEducation (
	id int NOT NULL AUTO_INCREMENT,
	snomed varchar(20) DEFAULT NULL, 
	diseaseName varchar(30) DEFAULT NULL, 
	diseaseDescription varchar(1000) DEFAULT NULL, 
	diseaseTypicalCauses varchar(1000) DEFAULT NULL, 
	diseaseTypicalSymptoms varchar(1000) DEFAULT NULL,
	diseaseTypicalTreatment varchar(1000) DEFAULT NULL,
	patientSymptoms varchar(1000) DEFAULT NULL,
	patientTreatment varchar(1000) DEFAULT NULL,
	PRIMARY KEY (id) );"
#	not sure how useful this is, but anyhoo can be added FOREIGN KEY (snomed) REFERENCES patients(loinc),

mysql -v -u root -pmysecretpassword livermore -e "load data infile '/docker-entrypoint-initdb.d/patients.txt' into table patients fields terminated by ',';"

