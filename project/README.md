# First
### update to latest repository

```git pull```

# Run Project Livermore
### cd to directory

```
cd ~/code/repo/Project-Livermore/project
```

### build it

```
docker-compose build
```

### run it

it’s ready when it says [Entrypoint] Starting MySQL 5.7.21-1.1.3.
it won't always say that though after it has been run the first time.

```
docker-compose up 
```

### or run in background

may have conflated this with the docker cmd.  will check.
```
docker-compose -d up
```

### Point browser to the web container

just shows 1 part of 1 entry from db at the moment.
python libraries for flask and mysql are available.
the app.py file tests the libraries and connectivity to the mysql container.

```
localhost:5000 
```

### stop it and cleanup

```
docker-compose down
```

# connect to database while running

### type this on the host command line to get to the mysql command line

```
mysql -u iwant -pmoreLiverPlease --protocol=TCP
```

# run an individual container (not sure how useful this is, but anyhoo)

```
cd <directory (one of pl-webui, pl-mysql, pl-fhircxn)>
```

### copies web folder to container

put files in the web folder in the pl-webui directory.
there should be an app.py file in there.  that's where index.html should go too.

```
docker build -t pl-webui .
docker run -it -p 5000:5000 pl-webui 
```

### db

not useful yet.  everything set up in setup script currently.
working on attaching volume so we can put data files on a filesystem
and import the data files.

```
docker build -t pl-mysql .
docker run -it -p 3306:3306 pl-mysql
```

### FHIR connector program

not well fleshed out.  just has OS with java.  just needs FHIR reading program

```
docker build -t pl-fhircxn .
docker run -it pl-fhircxn
```
