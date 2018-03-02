FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
COPY threeJS_testing /app/threeJStest/
WORKDIR /app/threeJStest
CMD python -m SimpleHTTPServer 5000
