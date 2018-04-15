#!/bin/bash

mysql -v -u root -pmysecretpassword livermore < /docker-entrypoint-initdb.d/livermore_schema.sql

mysql -v -u root -pmysecretpassword livermore -e "load data infile '/docker-entrypoint-initdb.d/patients.txt' into table PatientID fields terminated by ',' ENCLOSED BY '\"' LINES TERMINATED BY '\\n';"

mysql -v -u root -pmysecretpassword livermore -e "LOAD DATA INFILE '/docker-entrypoint-initdb.d/DiseaseTable.txt' INTO TABLE Disease FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\\n';"

mysql -v -u root -pmysecretpassword livermore -e "LOAD DATA INFILE '/docker-entrypoint-initdb.d/mockPatient.txt' INTO TABLE Patient FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\\n';"
