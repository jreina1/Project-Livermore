# Project-Livermore
Project Livermore
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
