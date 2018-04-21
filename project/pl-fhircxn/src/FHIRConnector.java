//package assignment;

import java.util.List;
import java.util.Properties;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;

import org.apache.log4j.BasicConfigurator;
import org.hl7.fhir.dstu3.model.Bundle;
import org.hl7.fhir.dstu3.model.Patient;
import org.hl7.fhir.dstu3.model.Bundle.BundleEntryComponent;
import org.hl7.fhir.dstu3.model.CarePlan;
import org.hl7.fhir.dstu3.model.Condition;
import org.hl7.fhir.dstu3.model.Encounter;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;


public class FHIRConnector {

    IGenericClient client = null;
    public static List<PatientLiverMore> patientList= new ArrayList<PatientLiverMore>();
    public FHIRConnector(String baseUrl) {
        FhirContext ctx = FhirContext.forDstu3();
        client = ctx.newRestfulGenericClient(baseUrl);
    }
    
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Properties prop = new Properties();
		InputStream input = null;
		BasicConfigurator.configure();
		
		try {
			input = new FileInputStream("config.properties");
			prop.load(input);
			String host = prop.getProperty("fhir.host");
			String port = prop.getProperty("fhir.port");
		System.out.println(host);
		System.out.println(port);
		//String url = "http://hapi.fhir.org/baseDstu3";	
		String url = "http://" + host + ":" + port + "/baseDstu3";
		System.out.println(url);
		
		
		FHIRConnector connector = new FHIRConnector(url);
		
		//Search for Patients in FHIR Server
		connector.searchForPatients();
	
		//Run insert statements method
		insertPatientsInDB();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

	public static void insertPatientsInDB() {
		System.out.println("Starting Database Insert");
		DBClient dbclient = new DBClient();
		dbclient.insertPatients(patientList);
		//dbclient.insertPatients(patients);
	}
	
	
    public void searchForPatients() {
        String patientID;
        PatientLiverMore patient = null;
       
        //FIRST NAME, LAST NAME ETC...
        Bundle results = client
                .search()
                .forResource(Patient.class)
                //.where(Patient.NAME.matches().value("*"))
                .returnBundle(Bundle.class)
                .execute();
        List<BundleEntryComponent> pats = results.getEntry();
        System.out.println("Size"+pats.size());
        
          for (BundleEntryComponent patientitem :pats) {
        	  
              Patient p = (Patient) patientitem.getResource();
      		  patient = new PatientLiverMore();
              patientID = p.getIdElement().getIdPart();
              System.out.println("new patient: "+patientID);
              getPatientTreatment(patient,patientID);       
              getPatientConditionAndSnomedCode(patient,patientID);       
              getPatientSymptom(patient,patientID);
              patient.setPatient_first_name(p.getName().get(0).getGivenAsSingleString());
              patient.setPatient_last_name(p.getName().get(0).getFamily());
              patient.setPatient_id(p.getIdElement().getIdPart());
              patientList.add(patient);
           
          }

  		     
       
    }

    
    public void getPatientSymptom(PatientLiverMore patient,String pID) {
        //SYMPTOM
        Bundle symptomResults = client
                  .search()
                  .forResource(Encounter.class)
                  .where(Encounter.PATIENT.hasId(pID))
                  .returnBundle(Bundle.class)
                  .execute();
        List<BundleEntryComponent> sympts = symptomResults.getEntry();
        if (sympts.isEmpty()) {
        	System.out.println("Symptoms: Data Not Found");
            patient.setPatient_symptoms("Data Not Found");
            return;
        }
        Encounter encounter = (Encounter) sympts.get(0).getResource();
        if (encounter.getReason().isEmpty()) {
        	System.out.println("Symptoms: Data Not Found");
            patient.setPatient_symptoms("Data Not Found");
            return;
        }
        
        if ((encounter.getReason().get(0).getCoding()).isEmpty()) {
        	System.out.println("Symptoms: Data Not Found");
            patient.setPatient_symptoms("Data Not Found");
            return;
        }
        patient.setPatient_symptoms(encounter.getReason().get(0).getCoding().get(0).getDisplay());

        System.out.println("Symptom: "+encounter.getReason().get(0).getCoding().get(0).getDisplay());
    }

    public void getPatientConditionAndSnomedCode(PatientLiverMore patient,String pID) {
        //PATIENT CONDITION AND SNOMED CODE
        Bundle Condresults = client
                  .search()
                  .forResource(Condition.class)
                  //.where(Patient.NAME.matches().value("*"))
                  .where(Condition.PATIENT.hasId(pID))
                  .returnBundle(Bundle.class)
                  .execute();
        List<BundleEntryComponent> pats2 = Condresults.getEntry();
        if (pats2.isEmpty()) {
        patient.setPatient_snomed_code("123");
        return;
        
        }
        Condition condition = (Condition) pats2.get(0).getResource();
        //patient.setcondition(condition.getCode().getCoding().get(0).getDisplay());
        patient.setPatient_snomed_code(condition.getCode().getCoding().get(0).getCode());
       
        System.out.println("Condition: "+condition.getCode().getCoding().get(0).getDisplay());
        patient.setPatient_diagnosis(condition.getCode().getCoding().get(0).getDisplay());
        System.out.println("Snomed Code: "+condition.getCode().getCoding().get(0).getCode());
        System.out.println("=================================================================");
    }

    public void getPatientTreatment(PatientLiverMore patient,String pID) {
        //TREATMENT
        Bundle treatresults = client
                  .search()
                  .forResource(CarePlan.class)
                  //.where(Patient.NAME.matches().value("*"))
                  .where(CarePlan.PATIENT.hasId(pID))
                  .returnBundle(Bundle.class)
                  .execute();
        List<BundleEntryComponent> treats = treatresults.getEntry();
       
        if(treats.isEmpty()) {
            patient.setPatient_treatment("Data Not Found");
        	
            return;
         }
       
            CarePlan treatment = (CarePlan) treats.get(0).getResource();
         if(treatment.getActivity().isEmpty()) {
                patient.setPatient_treatment("Data Not Found");
            	
                return;
          }
            patient.setPatient_treatment(treatment.getActivity().get(0).getDetail().getCode().getCoding().get(0).getDisplay());
            System.out.println("Treatment: "+treatment.getActivity().get(0).getDetail().getCode().getCoding().get(0).getDisplay());
    }

}
