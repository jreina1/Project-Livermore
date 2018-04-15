FROM ubuntu:latest

RUN apt-get clean
RUN apt-get update -y
RUN apt-get install -y build-essential libmysqlclient-dev openjdk-8-jre-headless
RUN apt-get install -y python-pip python-dev iputils-ping curl
RUN pip install requests
RUN apt-get install -y netcat-traditional  

#setup nodejs
RUN apt-get install -y npm nodejs-legacy 
RUN npm cache clean -f
RUN npm install -g n
RUN n stable
RUN ln -sf /usr/local/n/versions/node/*/bin/node /usr/bin/nodejs

#setup tagloader
WORKDIR /app
ADD ./tag-uploader.tar /app
WORKDIR /app/tag-uploader
RUN npm i

COPY ./patients /app/patients/
COPY ./bin /app/bin/

#ENV FH pl-fhir
#ENV FP 8080

WORKDIR /app/bin
CMD python /app/bin/FHIRHelper.py


#ADD bin/ /docker-entrypoint-initdb.d
#RUN chmod -v a+rwx /docker-entrypoint-initdb.d/setupFhirCxn.sh


