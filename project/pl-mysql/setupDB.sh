#!/bin/bash

mysql -v -u root -pmysecretpassword livermore -e "load data infile '/docker-entrypoint-initdb.d/patients.txt' into table PatientID fields terminated by ',';"

