#/usr/bin/python
import MySQLdb
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def main():
        
    return render_template('index.html')
    
@app.route('/update', methods=['POST'])
def update():
     
    db = MySQLdb.connect(host="pl-mysql",    # your host, usually localhost
                     user="iwant",         # your username
                     passwd="moreLiverPlease",  # your password
                     db="livermore")        # name of the data base
    

    cur = db.cursor()

    Patient_first_name= ""
    Patient_last_name= ""
    Patient_diagnosis= ""
    Patient_symptoms= ""
    Patient_treatment= ""

    print request.form 
    patient = request.form['patientId']
    
    if patient:   
        
        query_patient = '''SELECT Patient_first_name, Patient_last_name, Patient_diagnosis, Patient_symptoms, Patient_treatment   
                           FROM Patient, PatientID
                           
                           WHERE PatientID.Patient_id = Patient.Patient_id AND PatientID.Id = %s;''' %patient
        
        
        
        
        cur.execute(query_patient)

        for row in cur.fetchall():
            
            Patient_first_name= row[0]
            Patient_last_name= row[1]
            Patient_diagnosis= row[2]
            Patient_symptoms= row[3]
            Patient_treatment= row[4]
        db.close()
     
     
    return jsonify({'result' : 'success', 
                    'Patient_first_name' : Patient_first_name, 
                    'Patient_last_name' : Patient_last_name,
                    'Patient_diagnosis' : Patient_diagnosis,
                    'Patient_symptoms' : Patient_symptoms,
                    'Patient_treatment' : Patient_treatment})

@app.route('/update_Disease', methods=['POST'])
def update_Disease():
     
    db = MySQLdb.connect(host="pl-mysql",    # your host, usually localhost
                     user="iwant",         # your username
                     passwd="moreLiverPlease",  # your password
                     db="livermore")        # name of the data base
    

    cur = db.cursor()


    Disease_name= ""
    Disease_overview= ""
    Disease_symptoms= ""
    Disease_treatment= ""
    Disease_causes= ""
    Disease_risk_factors = ""
    Disease_complications = ""
    Disease_preventions = ""
    Disease_resources = ""

    snomed = request.form['Patient_snomed_code']
    if snomed:   
        
        query_snomed = '''SELECT Disease_name, Disease_overview, Disease_symptoms, Disease_treatment, Disease_causes, Disease_risk_factors, Disease_complications, Disease_preventions, Disease_resources
                          FROM Disease
                          WHERE Patient_snomed_code = %s;''' %snomed
        
        
        
        
        cur.execute(query_snomed)

        for row in cur.fetchall():
            
            Disease_name = row[0]
            Disease_overview = row[1]
            Disease_symptoms = row[2]
            Disease_treatment = row[3]
            Disease_causes = row[4]
            Disease_risk_factors = row[5]
            Disease_complications = row[6]
            Disease_preventions = row[7]
            Disease_resources = row[8]
        db.close()
     
     
    return jsonify({'result' : 'success', 
                    'Disease_name' : Disease_name,
                    'Disease_overview' : Disease_overview,
                    'Disease_symptoms' : Disease_symptoms,
                    'Disease_treatment' : Disease_treatment,
                    'Disease_causes' : Disease_causes,
                    'Disease_risk_factors' : Disease_risk_factors,
                    'Disease_complications' : Disease_complications,
                    'Disease_preventions' : Disease_preventions,
                    'Disease_resources' : Disease_resources})

@app.route('/help', methods=['GET', 'POST'])
def help():
    return render_template('help.html')

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
