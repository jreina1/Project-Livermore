#/usr/bin/python
import MySQLdb
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def main():
    
    db = MySQLdb.connect(host="pl-mysql",    # your host, usually localhost
                     user="iwant",         # your username
                     passwd="moreLiverPlease",  # your password
                     db="livermore")        # name of the data base
    

    cur = db.cursor()

    
    patient = request.form["patientId"]
    
    query_patient = '''SELECT p.Patient_first_name, p.Patient_last_name, p.Patient_diagnosis, p.Patient_symptoms, p.Patient_treatment,
                            d.Disease_name, d.Disease_overview, d.Disease_symptoms, d.Disease_treatment, d.Disease_causes, d.Disease_risk_factors, d.Disease_complications, d.Disease_preventions, d.Disease_resources
                       FROM Patient p
                       LEFT JOIN Disease d
                       ON p.id = d.id
                       WHERE Id = %s;''' %patient
    
    
    
    
    cur.execute(query_patient)

    data = ""
    for row in cur.fetchall():
        data += (row[1] + " ")
        
        Patient_first_name= row[1]
        Patient_last_name= row[2]
        Patient_diagnosis= row[3]
        Patient_symptoms= row[4]
        Patient_treatment= row[5]
        Disease_name= row[6]
        Disease_overview= row[7]
        Disease_symptoms= row[8]
        Disease_treatment= row[9]
        Disease_causes= row[10]
        Disease_risk_factors = row[11]
        Disease_complications = row[12]
        Disease_preventions = row[13]
        Disease_resources = row[14]
    db.close()
    
    return render_template('index.html', 
                           Patient_first_name = Patient_first_name, 
                           Patient_last_name = Patient_last_name, 
                           Patient_diagnosis= Patient_diagnosis,
                           Patient_symptoms= Patient_symptoms,
                           Patient_treatment = Patient_treatment,
                           Disease_name = Disease_name,
                           Disease_overview= Disease_overview,
                           Disease_symptoms= Disease_symptoms,
                           Disease_treatment= Disease_treatment,
                           Disease_causes= Disease_causes,
                           Disease_risk_factors= Disease_risk_factors,
                           Disease_complications = Disease_complications,
                           Disease_preventions = Disease_preventions,
                           Disease_resources = Disease_resources)
    #return data

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
