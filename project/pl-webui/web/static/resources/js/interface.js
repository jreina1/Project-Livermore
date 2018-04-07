// Hide/Show the Disease Information panel
function infoHide(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-hide") == -1) {
		x.className += " w3-hide";
	} else {
		x.className = x.className.replace(" w3-hide", "");
	}
}