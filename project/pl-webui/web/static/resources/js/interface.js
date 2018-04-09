

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
		
		switch(slider_input.value) {
		case '1':
			switchModel("healthy");
			break;
		case '34':
			switchModel("fatty");
			break;
		case '67':
			switchModel("fibrosis");
			break;
		case '100':
			switchModel("cirrhosis");
			break;
		default:
			console.log("JS Error: This should be unreachable. Slider value: " + slider_input.value);
			switchModel("healthy");
		}
		
	} else if(path_id == 4) {
		
		switch(slider_input.value) {
		case '0':

			break;
		case '50':

			break;
		case '100':

			break;
		default:
			console.log("JS Error: This should be unreachable. Slider value: " + slider_input.value);
			switchModel("healthy");
	
		}
		
	}

}, false);