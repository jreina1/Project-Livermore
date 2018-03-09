#!/bin/bash

#create a table 
mysql -u iwant -pmoreLiverPlease livermore -e "create table patients (
	id int(3) NOT NULL AUTO_INCREMENT, 
	firstName varchar(20) DEFAULT NULL, 
	lastName varchar(20) DEFAULT NULL, 
	patientId varchar(20) DEFAULT NULL, 
	loinc varchar(20) DEFAULT NULL, 
	PRIMARY KEY (id) );"

mysql -u iwant -pmoreLiverPlease livermore -e "create table diseaseEducation (
	id int(3) NOT NULL AUTO_INCREMENT,
	loinc varchar(20) DEFAULT NULL, 
	diseaseName varchar(30) DEFAULT NULL, 
	diseaseDescription varchar(1000) DEFAULT NULL, 
	diseaseTypicalCauses varchar(1000) DEFAULT NULL, 
	diseaseTypicalSymptoms varchar(1000) DEFAULT NULL,
	diseaseTypicalTreatment varchar(1000) DEFAULT NULL,
	patientSymptoms varchar(1000) DEFAULT NULL,
	patientTreatment varchar(1000) DEFAULT NULL,
	PRIMARY KEY (id) );"
#	not sure how useful this is, but anyhoo can be added FOREIGN KEY (loinc) REFERENCES patients(loinc),

# give user iwant access from everywhere including host command line
mysql -u root -pmysecretpassword livermore -e "grant all privileges on livermore.* to 'iwant'@'%' identified by 'moreLiverPlease';"

#load data into database
# need to create a compose volume to do this I think...
#mysqlimport --fields-terminated-by=, --columns='id,firstName, lastName, patientId, loinc' --local -u root -p livermore /usr/local/share/livermore/patients.csv

#mysql -u root -pmysecretpassword livermore -e "load data infile '/var/lib/mysql/patients.txt' into table patients;"

mysql -u iwant -pmoreLiverPlease livermore -e "insert into patients
	(id, firstName, lastName, patientId, loinc)
	values
	(1,'GeorgeA', 'BurdellA', '20185A', '4789A');"

