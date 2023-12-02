


function clicked(evt,id) {
    
	let tabcontents = document.getElementsByClassName('tab-content');

	for (var i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = 'none';
	}

	let tablinks = document.getElementsByClassName("tabLink");

	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active","");
	}

	document.getElementById(id).style.display = "block";
	evt.currentTarget.className += " active";

    
}