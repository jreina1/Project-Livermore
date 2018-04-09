

// Identify disease path state
var path_id = 0;

// Patient Navigation
var patient_one = document.getElementById('patientOne');
patient_one.onclick = updatePatientOne;

function updatePatientOne() {
	document.getElementById("diseaseRange").min = "1";
    document.getElementById("diseaseRange").max = "100";
    document.getElementById("diseaseRange").value = "1";
    document.getElementById("diseaseRange").step = "33";
    
    document.getElementById("slideLabel").innerHTML = "Patient One"
    	
    path_id = 2;
	return false;
}

var patient_two = document.getElementById('patientTwo');
patient_two.onclick = updatePatientTwo;

function updatePatientTwo() {
	document.getElementById("diseaseRange").min = "0";
    document.getElementById("diseaseRange").max = "100";
    document.getElementById("diseaseRange").value = "0";
    document.getElementById("diseaseRange").step = "50";
    
    document.getElementById("slideLabel").innerHTML = "Patient Two"
    	
    path_id = 4;
	return false;
}

// Hide or Show the Disease Information panel
function infoHide(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-hide") == -1) {
		x.className += " w3-hide";
	} else {
		x.className = x.className.replace(" w3-hide", "");
	}
}

// Update Slider
var slider_input = document.getElementById("diseaseRange");

slider_input.addEventListener("input", function() {
	
	if(path_id == 2) {
		
		if(slider_input.value == 1) {
			// alert("Placeholder for path_id=2; case=1");
			switchModel("healthy");
		} else if(slider_input.value == 34) {
			// alert("Placeholder for path_id=2; case=34");
			switchModel("fatty");
		} else if(slider_input.value == 67) {
			// alert("Placeholder for path_id=2; case=67");
			switchModel("fibrosis");
		} else if(slider_input.value == 100) {
			// alert("Placeholder for path_id=2; case=100");
			switchModel("cirrhosis");
		} else {
			alert("JS Error: This should be unreachable. Slider value: " + slider_input.value);
			switchModel("healthy");
		}
		
	} else if(path_id == 4) {
		
		if(slider_input.value == 0) {
			// alert("Placeholder for path_id=4; case=0");
		} else if(slider_input.value == 50) {
			// alert("Placeholder for path_id=4; case=50");
		} else if(slider_input.value == 100) {
			// alert("Placeholder for path_id=4; case=100");
		} else {
			// alert(slider_input.value);
		}
		
	}

}, false);