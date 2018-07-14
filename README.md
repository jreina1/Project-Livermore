# Project-Livermore

Project Livermore: 3D Simulation of Human Anatomy and Patient Education on Medical Conditions

Summary:
Spring 2018 term project for CS 6440: Introduction to Health Informatics and CS 6460: Educational Technology.
Project Livermore is a development project intended to address the issue of providing patients with timely and engaging personalized educational materials consistent with a diagnosis they may have received. This is intended to demonstrate a proof-of-concept tool to facilitate the dissemination of educational materials by way of a standards-based inter-operable tool whereby a patient is able to observe and manipulate a 3D model based on their diagnosis, observe disease progression, and read supporting literature. The tool is designed around a problem-based learning pedagogy that uses simulation-based learning to promote understanding.

Methodology:
This application was implemented using a collection of docker containers. Each container provides a service. The services developed were as follows: the web user interface containing the patient portal, a MySQL database, FHIR connector service, and FHIR server.
The patient portal is made with HTML, CSS, Javascript, Blender, three.js, Flask, and Python. It also includes starter liver models provided by the SketchFab website. The MySQL DB Container includes MySQL, bash scripts to load patient IDs and diseases into the database, and the file containing the disease educational materials that is loaded into the database. The liver disease educational materials are curated from the American Liver Foundation website. The FHIR Connector container contained an application to read patient data from a local FHIR server and then load selected patient data (patient name, the disease, diagnosis and treatment) into the MySQL database. The application uses Java and HAPI FHIR APIs. The FHIR Connector container also contains an application that automatically loads patient data into the FHIR server. This application uses NodeJS and a FHIR JSON tag_loader tool. For the FHIR container the project uses Daniel Johnson’s (Georgia Tech TA) FHIR server.
```



File Structure

├── Final\ Delivery
│   ├── Final\ Gantt\ chart\ -\ LiverMore.pdf
│   ├── IHI\ Final\ Project\ Presentation\ -\ Team\ Livermore.pdf
│   ├── Manual\ -\ LiverMore.md
│   ├── Manual\ -\ LiverMore.pdf
│   ├── Project\ Livermore\ Feedback\ (Responses).pdf
│   ├── Research
│   │   ├── Application\ Architecture.pdf
│   │   ├── EdTech\ Research
│   │   │   ├── Andy
│   │   │   │   ├── cs6460_alam3_assignment3.pdf
│   │   │   │   ├── cs6460_alam3_assignment4.pdf
│   │   │   │   ├── cs6460_alam3_assignment5.pdf
│   │   │   │   └── cs6460_alam3_qualifierquestion.pdf
│   │   │   ├── Cheryl
│   │   │   │   ├── Assignment3-clockett6.pdf
│   │   │   │   ├── Assignment4-clockett6.pdf
│   │   │   │   ├── Assignment5-clockett6.pdf
│   │   │   │   └── QualifierQuestion-clockett6.pdf
│   │   │   ├── Jennifer
│   │   │   │   ├── Jennifer\ Reina_jreina3_Assignment\ 5.pdf
│   │   │   │   └── Jennifer\ Reina_jreina3_QualifierQuestion.pdf
│   │   │   └── Rafay
│   │   │       ├── Assignment\ 3\ -\ rsyed8.pdf
│   │   │       ├── Assignment\ 4\ -\ rsyed8.pdf
│   │   │       ├── Assignment\ 5\ -\ rsyed8.pdf
│   │   │       └── Qualifier\ Question\ -\ rsyed8.pdf
│   │   ├── Education_Disease\ Table\ Content.pdf
│   │   ├── GANTT\ task\ list.pdf
│   │   ├── HDAP_Guide.pdf
│   │   ├── ResearchLinks.pdf
│   │   ├── Snomed_Codes_For_Liver_Diseases.pdf
│   │   └── Team\ Members\ Task\ List.pdf
│   ├── Special\ Instructions\ -\ LiverMore.md
│   ├── Special\ Instructions\ -\ LiverMore.pdf
│   ├── catalog.md
│   └── catalog.pdf
├── Jenkinsfile
├── README.md
└── project
    ├── README.md
    ├── docker-compose.yml
    ├── pl-fhir
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── patients
    │   │   ├── Yost_Darleen_69.json
    │   │   ├── Yost_Lexie_62.json
    │   │   ├── Yundt_Brett_11.json
    │   │   ├── Yundt_Dustin_87.json
    │   │   ├── Yundt_Giovanni_65.json
    │   │   ├── Yundt_Jin_27.json
    │   │   ├── Yundt_Patrick_53.json
    │   │   ├── bolton_john_neoplasm.json
    │   │   ├── castanera_emilio_hemangioma.json
    │   │   ├── jones_dave_fatty_liver.json
    │   │   ├── walters_jacqueline_fibrosis.json
    │   │   └── watson_greg_polycystic.json
    │   ├── pom.xml
    │   ├── samples
    │   │   └── generated-sample-data
    │   └── tag-uploader
    ├── pl-fhircxn
    │   ├── Dockerfile
    │   ├── bin
    │   │   ├── FHIRHelper.py
    │   │   ├── config.properties
    │   │   ├── fhirConnector-1.0.jar
    │   │   ├── log.txt
    │   │   ├── log4j.properties
    │   │   └── setupFhirCxn.sh
    │   ├── patients
    │   │   ├── bolton_john_neoplasm.json
    │   │   ├── castanera_emilio_hemangioma.json
    │   │   ├── jones_dave_fatty_liver.json
    │   │   ├── walters_jacqueline_fibrosis.json
    │   │   └── watson_greg_polycystic.json
    │   ├── pom.xml
    │   ├── src
    │   │   ├── DBClient.java
    │   │   ├── FHIRConnector.java
    │   │   ├── FHIRConnectorSample.java
    │   │   ├── PatientLiverMore.java
    │   │   ├── config.properties
    │   │   ├── log4j.properties
    │   │   └── setupFhirCxn.sh
    │   └── tag-uploader.tar
    ├── pl-mysql
    │   ├── DiseaseTable.txt
    │   ├── Dockerfile
    │   ├── livermore_schema.sql
    │   ├── mockPatient.txt
    │   ├── patients.txt
    │   └── setupDB.sh
    ├── pl-webui
    │   ├── Dockerfile
    │   ├── requirements.txt
    │   └── web
    │       ├── app.py
    │       ├── static
    │       │   ├── resources
    │       │   │   ├── Audio
    │       │   │   │   └── ambient.mp3
    │       │   │   ├── css
    │       │   │   │   └── style.css
    │       │   │   ├── images
    │       │   │   │   ├── model1.jpg
    │       │   │   │   ├── model2.jpg
    │       │   │   │   ├── model_1.jpg
    │       │   │   │   └── model_2.jpg
    │       │   │   ├── js
    │       │   │   │   ├── interface.js
    │       │   │   │   ├── render.js
    │       │   │   │   └── render_bkp.js
    │       │   │   ├── model
    │       │   │   │   ├── liver_benigntumor.fbx
    │       │   │   │   ├── liver_cancer.fbx
    │       │   │   │   ├── liver_cirrhosis.fbx
    │       │   │   │   ├── liver_fatty.fbx
    │       │   │   │   ├── liver_fibrosis.fbx
    │       │   │   │   ├── liver_healthy.fbx
    │       │   │   │   └── liver_polycystic.fbx
    │       │   │   └── textures
    │       │   │       ├── backgrounddetailed6.jpg
    │       │   │       ├── model1.PNG
    │       │   │       └── model2.PNG
    │       │   └── vendors
    │       │       └── threejs
    │       │           ├── FBXLoader.js
    │       │           ├── JSONLoader.js
    │       │           ├── OBJLoader.js
    │       │           ├── OrbitControls.js
    │       │           ├── inflate.min.js
    │       │           └── three.js
    │       └── templates
    │           ├── help.html
    │           └── index.html
    └── runProjectNotes.txt
```
