# Special Instructions
**Team Name:** Liver More
**Project Name:** Project Liver More
**Github link:** https://github.gatech.edu/gt-hit-spring2018/Project-Livermore

**Team Members:**
- Jennifer Reina
- Rafay Syed
- Marcos Jorge
- Cheryl Lockett
- Andrew Lam

>After getting the file structure set up and execute the "docker-compose up" command.

Launch your desired web browser. If running locally, type the following address in the address bar:
```
localhost:5000
```
If running from the Georgia tech VPN:
```
https://cs6440-s18-prj14.apps.hdap.gatech.edu
```
  Then press Enter or Return from your keyboard.
  

>No other special instructions are needed to launch the application since we are using the HDAP pipeline. The following are commands that were useful to us while troubleshooting and running specific tests.


**Connect to database while running**

Type this on the host command line to get to the mysql command line:

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
