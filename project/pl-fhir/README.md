Docker container setup

The container should install nodejs and the tag-loader application and then load the patient files.

sudo apt-get install npm
sudo apt-get install nodejs-legacy

sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo ln -sf /usr/local/n/versions/node/9.8.0/bin/node /usr/bin/nodejs

git clone https://github.com/smart-on-fhir/tag-uploader.git
cd tag-uploader
npm i

cd tag-uploader
node . -d ../patients -S http://localhost:8080/baseDstu3
