function aparecer() {
	var check = document.getElementById('bt-check').checked;

	if(check){
		document.getElementById('tes').style.display="block";
		document.getElementById('tes').style.opacity=1;
	}
	else{
		document.getElementById('tes').style.display ="none";
		document.getElementById('tes').style.opacity = 0;
	}
}