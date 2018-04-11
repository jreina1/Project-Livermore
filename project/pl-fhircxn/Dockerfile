FROM ubuntu:latest

RUN apt-get clean
RUN apt-get update -y
RUN apt-get install -y build-essential libmysqlclient-dev openjdk-8-jre-headless
RUN apt-get install -y python-pip python-dev iputils-ping curl
RUN pip install requests
RUN apt-get install -y netcat-traditional  

#RUN apt-get install -y npm nodejs-legacy iputils-ping git curl
#RUN npm cache clean -f
#RUN npm install -g n
#RUN n stable
#RUN ln -sf /usr/local/n/versions/node/*/bin/node /usr/bin/nodejs

#WORKDIR /app
#ADD ./tag-uploader.tar /app
#WORKDIR /app/tag-uploader
#RUN npm i

#ADD ./bin /app/bin/
COPY ./patients /app/patients/
COPY ./bin /app/bin/

ENV FH pl-fhir
ENV FP 8080

WORKDIR /app/bin
#RUN chmod -v a+rwx setupFhirCxn.sh
CMD python FHIRHelper.py


#ADD bin/ /docker-entrypoint-initdb.d
#RUN chmod -v a+rwx /docker-entrypoint-initdb.d/setupFhirCxn.sh


