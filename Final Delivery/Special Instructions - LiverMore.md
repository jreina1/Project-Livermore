# Special Instructions
**Team Name:** Liver More

**Project Name:** Project Livermore

**Github link:** https://github.gatech.edu/gt-hit-spring2018/Project-Livermore

**Team Members:**
- Jennifer Reina
- Rafay Syed
- Marcos Jorge
- Cheryl Lockett
- Andrew Lam

**Instructions: Run over VPN to HDAP**

1. Launch your desired web browser. 

2. If running from the Georgia tech VPN, type the following into the address bar and press Enter/Return on the keyboard (wait 2-3 minutes for it to load before using it):
```
https://cs6440-s18-prj14.apps.hdap.gatech.edu
```
  
>No other special instructions are needed to launch the application since we are using the HDAP pipeline. 

**Instructions: Run Locally**

If running locally (instructions assume docker and docker-compose are installed on your system), 

1. Change to the base directory and run docker-compose to build and start. 
```
cd Project-Livermore/project
docker-compose up --build
```
2. Wait about 3 minutes, launch your browser, and type the following address in the address bar and press Enter/Return on the keyboard:
```
localhost:5000
```
3. The FHIR server is located at port 8080, so if desired, it can be visited with the web browser at:
```
localhost:8080
```

**The following are commands that were useful to us while troubleshooting and running specific tests.**

**Connect to database while running**

Type this on the host command line to get to the mysql command line (instructions assume a MySql client is installed on your system):

```
mysql -u iwant -pmoreLiverPlease --protocol=TCP
```
Connect to the livermore database:
```
USE livermore;
```
View all patients from the Patient table:
```
SELECT * FROM Patient;
```

**Run an individual container**

The following instructions pertain to standalone containers without network connections to one another.

```
cd <directory (one of pl-webui, pl-mysql, pl-fhircxn)>
```

**Copies web folder to container**

Put files in the web folder in the pl-webui directory.
There should be an app.py file in there.  That's where index.html should go too.

```
docker build -t pl-webui .
docker run -it -p 5000:5000 pl-webui 
```

**Data Base**

```
docker build -t pl-mysql .
docker run -it -p 3306:3306 pl-mysql
```

**FHIR connector program**

```
docker build -t pl-fhircxn .
docker run -it pl-fhircxn
```

**FHIR server**

```
docker build -t pl-fhir .
docker run -it pl-fhir
```
