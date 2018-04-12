

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
    
    document.getElementById("slideLabel").innerHTML = "Patient One";
//    document.getElementById("flaskform").submit();
    	
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
    
    document.getElementById("slideLabel").innerHTML = "Patient Two";
//    document.getElementById("flaskform").submit();
    
    path_id = 4;
	return false;
}

var patient_three = document.getElementById('patientThree');
patient_three.onclick = updatePatientThree;

function updatePatientThree() {
	document.getElementById("diseaseRange").min = "0";
    document.getElementById("diseaseRange").max = "100";
    document.getElementById("diseaseRange").value = "0";
    document.getElementById("diseaseRange").step = "50";
    
    document.getElementById("slideLabel").innerHTML = "Patient Three";
    //document.getElementById("flaskform").submit();
    
    path_id = 6;
	return false;
}

var patient_four = document.getElementById('patientFour');
patient_four.onclick = updatePatientFour;

function updatePatientFour() {
	document.getElementById("diseaseRange").min = "0";
    document.getElementById("diseaseRange").max = "100";
    document.getElementById("diseaseRange").value = "0";
    document.getElementById("diseaseRange").step = "50";
    
    document.getElementById("slideLabel").innerHTML = "Patient Four";
    //document.getElementById("flaskform").submit();
    
    path_id = 8;
	return false;
}

var patient_five = document.getElementById('patientFive');
patient_five.onclick = updatePatientFive;

function updatePatientFive() {
	document.getElementById("diseaseRange").min = "0";
    document.getElementById("diseaseRange").max = "100";
    document.getElementById("diseaseRange").value = "0";
    document.getElementById("diseaseRange").step = "50";
    
    document.getElementById("slideLabel").innerHTML = "Patient Five";
    //document.getElementById("flaskform").submit();
    
    path_id = 10;
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
			console.log("path_id: " + path_id + "; case: healthy");
			switchModel("healthy");
			break;
		case '34':
			console.log("path_id: " + path_id + "; case: fatty");
			switchModel("fatty");
			break;
		case '67':
			console.log("path_id: " + path_id + "; case: fibrosis");
			switchModel("fibrosis");
			break;
		case '100':
			console.log("path_id: " + path_id + "; case: cirrhosis");
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
		
	} else if(path_id == 6) {
		
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
		
	} else if(path_id == 8) {
		
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
		
	} else if(path_id == 10) {
		
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
		
	} else {
		console.log("JS Error: Unexpected path_id value reached");
	}

}, false);