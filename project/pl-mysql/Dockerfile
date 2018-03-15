# Use mysql image as a base
# FROM mysql/mysql-server:latest
FROM mariadb:latest



# Environment variables
ENV MYSQL_ROOT_PASSWORD mysecretpassword
ENV MYSQL_DATABASE livermore
ENV MYSQL_USER iwant
ENV MYSQL_PASSWORD moreLiverPlease

# Copy files from host directory to container
# TODO: need volume
# ADD <local path> <container path>
#COPY patients.txt /var/lib/mysql/

# Expose a port for container host consumption
EXPOSE 3306

# Add a loadDb.sh to docker-entrypoint-initdb.d so 
# it is run at the end of the start up process to configure the database
ADD ./setupDB.sh /docker-entrypoint-initdb.d
RUN chmod -v a+rwx /docker-entrypoint-initdb.d/setupDB.sh
