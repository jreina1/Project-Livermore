FROM ubuntu:latest
RUN bash -c 'echo "nameserver 8.8.8.8" >> /etc/resolv.conf'
#RUN apt-get clean
RUN apt-get update --fix-missing -y
RUN apt-get install -y python-pip python-dev build-essential libmysqlclient-dev python-mysqldb iputils-ping
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5000
WORKDIR /app/web/
CMD python app.py
