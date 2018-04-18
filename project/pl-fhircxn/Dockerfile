FROM ubuntu:latest

RUN apt-get clean
RUN apt-get update -y
RUN apt-get install -y build-essential libmysqlclient-dev openjdk-8-jre-headless
RUN apt-get install -y python-pip python-dev iputils-ping curl
RUN pip install requests
RUN apt-get install -y netcat-traditional  

#setup nodejs
RUN apt-get install -y nodejs npm 
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

WORKDIR /app/bin
CMD python /app/bin/FHIRHelper.py


