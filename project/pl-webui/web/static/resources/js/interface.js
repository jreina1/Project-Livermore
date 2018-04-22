
// Identify disease path state
var path_id = 0;

// Patient Navigation
$(document).ready(function() {
	
	$('#patientOne').click(function() {
		
		var patient = $(this).attr('value');
		updatePatient(patient);
		setSlider(1, 100, 33, 34);
		
		$('#slideLabel').html('Patient One');
		switchModel('fatty');
		path_id = 2;
	});
	
	$('#patientTwo').click(function() {
		
		var patient = $(this).attr('value');
		updatePatient(patient);
		setSlider(0, 100, 50, 50);
		
		$('#slideLabel').html('Patient Two');
		switchModel('benign');
		path_id = 4;
	});
	
	$('#patientThree').click(function() {
		
		var patient = $(this).attr('value');
		updatePatient(patient);
		setSlider(0, 100, 100, 100);
				
		$('#slideLabel').html('Patient Three');
		switchModel('polycystic');
		path_id = 6;
	});
	
	$('#patientFour').click(function() {
		
		var patient = $(this).attr('value');
		updatePatient(patient);
		setSlider(0, 0, 0, 0);
		
		$('#slideLabel').html('Patient Four');
		switchModel('healthy');
		path_id = 8;
	});
	
	$('#overlay').click(function() {
		$('#overlay').css('display','none');
	});
	
	
	$('#helpPage').click(function() {
		$('#overlay').css('display','block');
	});
	
	
//	$('#patientFive').click(function() {
//		
//		var patient = $(this).attr('value');
//		updatePatient(patient);
//		setSlider(1, 100, 33, 1);
//		
//		$('#slideLabel').html('Patient Five');
//		
//		path_id = 10;
//	});
});

function setSlider(min, max, step, value) {
	$('#diseaseRange').prop('min', min);
	$('#diseaseRange').prop('max', max);
	$('#diseaseRange').prop('step', step);
	$('#diseaseRange').prop('value', value);
};

function updatePatient(patient) {
	req = $.ajax({
		url : '/update',
		type : 'POST',
		data : { patientId : patient }
	});
	
	req.done(function(data) {
		$('#Patient_first_name').text(data.Patient_first_name);
		$('#Patient_last_name').text(data.Patient_last_name);
		$('#Patient_diagnosis').text(data.Patient_diagnosis);
		$('#Patient_symptoms').text(data.Patient_symptoms);
		$('#Patient_treatment').text(data.Patient_treatment);
	});
};


// Hide or Show the Disease Information panel
function infoHide(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf('w3-hide') == -1) {
		x.className += ' w3-hide';
	} else {
		x.className = x.className.replace(' w3-hide', '');
	}
};

// Update Slider
var slider_input = document.getElementById('diseaseRange');

slider_input.addEventListener('input', function() {
	
	if(path_id == 2) {
		
		switch(slider_input.value) {
		case '1':
			console.log('path_id: ' + path_id + '; case: healthy');
			switchModel('healthy');
			break;
		case '34':
			console.log('path_id: ' + path_id + '; case: fatty');
			switchModel('fatty');
			break;
		case '67':
			console.log('path_id: ' + path_id + '; case: fibrosis');
			switchModel('fibrosis');
			break;
		case '100':
			console.log('path_id: ' + path_id + '; case: cirrhosis');
			switchModel('cirrhosis');
			break;
		default:
			console.log('JS Error: This should be unreachable. Slider value: ' + slider_input.value);
			switchModel('healthy');
		}
		
	} else if(path_id == 4) {
		
		switch(slider_input.value) {
		case '0':
			console.log('path_id: ' + path_id + '; case: healthy');
			switchModel('healthy');
			break;
		case '50':
			console.log('path_id: ' + path_id + '; case: benign');
			switchModel('benign');
			break;
		case '100':
			console.log('path_id: ' + path_id + '; case: cancer');
			switchModel('cancer');
			break;
		default:
			console.log('JS Error: This should be unreachable. Slider value: ' + slider_input.value);
			switchModel('healthy');
		}
		
	} else if(path_id == 6) {
		
		switch(slider_input.value) {
		case '0':
			console.log('path_id: ' + path_id + '; case: healthy');
			switchModel('healthy');
			break;
		case '100':
			console.log('path_id: ' + path_id + '; case: polycystic');
			switchModel('polycystic');
			break;
		default:
			console.log('JS Error: This should be unreachable. Slider value: ' + slider_input.value);
			switchModel('healthy');
		}
		
	} else if(path_id == 8) {
		
		switch(slider_input.value) {
		case '1':
			console.log('path_id: ' + path_id + '; case: healthy');
			switchModel('healthy');
			break;
		default:
			console.log('JS Error: This should be unreachable. Slider value: ' + slider_input.value);
			switchModel('healthy');
		}
		
	} 
//	else if(path_id == 10) {
//		
//		switch(slider_input.value) {
//		case '0':
//
//			break;
//		case '50':
//
//			break;
//		case '100':
//
//			break;
//		default:
//			console.log('JS Error: This should be unreachable. Slider value: ' + slider_input.value);
//			switchModel('healthy');
//		}
//		
//	} 
	else {
		console.log('JS Error: Unexpected path_id value reached: ' + path_id);
	}

}, false);
