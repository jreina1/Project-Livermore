FROM ubuntu:latest
RUN bash -c 'echo "nameserver 8.8.8.8" >> /etc/resolv.conf'
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential libmysqlclient-dev python-mysqldb
COPY . /app
WORKDIR /app
#RUN pip install --no-binary mysqlclient mysqlclient
RUN pip install -r requirements.txt
WORKDIR /app/web/
CMD python app.py
