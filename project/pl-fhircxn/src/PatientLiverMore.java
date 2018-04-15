
public class PatientLiverMore {
	
	private String Patient_id;
	private String Patient_first_name;
	private String Patient_last_name;
	private String Patient_symptoms;
	private String Patient_treatment;
	private String Patient_snomed_code;
	private String Patient_diagnosis;

	public String getPatient_diagnosis() {
		return Patient_diagnosis;
	}
	public void setPatient_diagnosis(String patient_diagnosis) {
		//if (patient_diagnosis.contains("'")) {
		patient_diagnosis=patient_diagnosis.replace("'", "");
			//}
		Patient_diagnosis = patient_diagnosis;
	}
	public String getPatient_id() {
		return Patient_id;
	}
	public void setPatient_id(String patient_id) {
		Patient_id = patient_id;
	}
	public String getPatient_first_name() {
		return Patient_first_name;
	}
	public void setPatient_first_name(String patient_first_name) {
		Patient_first_name = patient_first_name;
	}
	public String getPatient_last_name() {
		return Patient_last_name;
	}
	public void setPatient_last_name(String patient_last_name) {
		Patient_last_name = patient_last_name;
	}
	public String getPatient_symptoms() {
		return Patient_symptoms;
	}
	public void setPatient_symptoms(String patient_symptoms) {
		Patient_symptoms = patient_symptoms;
	}
	public String getPatient_treatment() {
		return Patient_treatment;
	}
	public void setPatient_treatment(String patient_treatment) {
		Patient_treatment = patient_treatment;
	}

	
	public String getPatient_snomed_code() {
		return Patient_snomed_code;
	}
	public void setPatient_snomed_code(String patient_snomed_code) {
		Patient_snomed_code = patient_snomed_code;
	}

	


}
