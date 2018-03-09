#!/bin/bash

#create a table 
mysql -u iwant -pmoreLiverPlease livermore -e "create table patients (
	id int(3) NOT NULL AUTO_INCREMENT, 
	firstName varchar(20) DEFAULT NULL, 
	lastName varchar(20) DEFAULT NULL, 
	patientId varchar(20) DEFAULT NULL, 
	loinc varchar(20) DEFAULT NULL, 
	PRIMARY KEY (id) );"

# give user iwant access 
mysql -u root -pmysecretpassword livermore -e "grant all privileges on livermore.* to 'iwant'@'%' identified by 'moreLiverPlease';"

#load data into database
# need to create a compose volume to do this I think...
#mysqlimport --fields-terminated-by=, --columns='id,firstName, lastName, patientId, loinc' --local -u root -p livermore /usr/local/share/livermore/patients.csv

#mysql -u root -pmysecretpassword livermore -e "load data infile '/var/lib/liver/patients.txt' into table patients;"

mysql -u iwant -pmoreLiverPlease livermore -e "insert into patients
	(id, firstName, lastName, patientId, loinc)
	values
	(1,'George', 'Burdell', '20185', '4789');"

