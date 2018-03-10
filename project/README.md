—— First
# update to latest repository
git pull

—— Run Project Livermore
# cd to directory
cd ~/code/repo/Project-Livermore/project
# build it
docker-compose build
# run it
docker-compose up (it’s ready when it says [Entrypoint] Starting MySQL 5.7.21-1.1.3)
# or run in background
docker-compose -d up
# Point browser to the web container
localhost:5000 (just shows 1 part of 1 entry from db)
# stop it and cleanup
docker-compose down

—— connect to database while running
# type this on the host command line to get to the mysql command line
mysql -u iwant -pmoreLiverPlease --protocol=TCP

—— run an individual container (not sure how useful this is, but anyhoo)
cd <directory (one of pl-webui, pl-mysql, pl-fhircxn)>

# copies web folder to container
docker build -t pl-webui .
docker run -it -p 5000:5000 pl-webui 

# not useful yet.  everything set up in setup script currently.
# working on attaching volume so we can put data files on a filesystem
# and import the data files.
docker build -t pl-mysql .
docker run -it -p 3306:3306 pl-mysql

# not well fleshed out.  just has OS with java.  just needs FHIR reading program
docker build -t pl-fhircxn .
docker run -it pl-fhircxn
