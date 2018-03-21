FROM ubuntu:latest
#RUN bash -c 'echo "nameserver 8.8.8.8" >> /etc/resolv.conf'
RUN apt-get clean
RUN apt-get update -y
RUN apt-get install -y build-essential libmysqlclient-dev openjdk-8-jre-headless
#ADD bin/ /app
#WORKDIR /app
#CMD python app.py

#WORKDIR /app/web/
#CMD python app.py

# Add a setupDb.sh to docker-entrypoint-initdb.d so 
# it is run at the end of the start up process to configure the database
ADD bin/ /docker-entrypoint-initdb.d
RUN chmod -v a+rwx /docker-entrypoint-initdb.d/setupFhirCxn.sh
