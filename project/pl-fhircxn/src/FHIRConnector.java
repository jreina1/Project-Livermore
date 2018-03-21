//package assignment;

import java.util.List;
import java.util.ArrayList;

import org.hl7.fhir.dstu3.model.Bundle;
import org.hl7.fhir.dstu3.model.Patient;
import org.hl7.fhir.dstu3.model.Bundle.BundleEntryComponent;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;


public class FHIRConnector {

    IGenericClient client = null;

    public FHIRConnector(String baseUrl) {
        FhirContext ctx = FhirContext.forDstu3();
        client = ctx.newRestfulGenericClient(baseUrl);
    }

    /**
     * Find the patient with the given ID and return the full name as a
     * single string.
     */
    public String getNameByPatientID(String id) {
        // Hint, there is a method that will return the full name including
        // prefix, first, last, and suffix
        //Place your code here
    	
    	// search for patient = id
    	Patient patient = client.read()
    	                        .resource(Patient.class)
    	                        .withId(id)
    	                        .execute();  
    	
    	String name = patient.getName().get(0).getNameAsSingleString();
    	
    	return name;
    }

    /**
     * Find all the patients who have the provided name and return a list
     * of the IDs for those patients.  The search should include matches
     * where any part of the patient name (family, given, prefix, etc.)
     * matches the method 'name' parameter.
     */
    
	/*
	 * http://hapifhir.io/doc_rest_client.html
	 */    
    public List<String> getIDByPatientName(String name) {
        //Place your code here
    	Bundle results = client
    		      .search()
    		      .forResource(Patient.class)
    		      .where(Patient.NAME.matches().value(name))
    		      .returnBundle(Bundle.class)
    		      .execute();
 
    	List<BundleEntryComponent> y = results.getEntry();
 
    	/*
    	 * http://hapifhir.io/doc_rest_client.html
    	 */
    	List<String> identifiers = new ArrayList<String>();
    	for (BundleEntryComponent e : y) {
    		String url = e.getFullUrl();
    		
    		String id = url.substring(url.lastIndexOf("/")+1);
    		identifiers.add(id);
    		
    	}
    	
//    	String a = client.getFhirContext().newXmlParser().setPrettyPrint(true).encodeResourceToString(results);    	
//    	System.out.println(a);
    	
    	return identifiers;
    	    	
    }


	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String url = "http://hapi.fhir.org/baseDstu3";
		FHIRConnector sr = new FHIRConnector(url);
		
		String name = "duck";
		List<String> patientIds = sr.getIDByPatientName(name);
		for (String x : patientIds) {
			System.out.println(x);
		}
		
		String id = "29";
		String pName = sr.getNameByPatientID(id);
		
//		System.out.println("Found " + patientIds + " patients named " + name);
		System.out.println(pName);
	}

}
