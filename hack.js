console.log("success");

function dork() { 
	let allelems = document.querySelectorAll("*");
	let donor = allelems[Math.floor(Math.random() * allelems.length)];
	let patient = allelems[Math.floor(Math.random() * allelems.length)];
	patient.appendChild(Math.random() < 0.9 ? donor.cloneNode() : donor);
	let container = document.createElement("div");
	
	if (Math.random() < 0.2) {
		container.style.fontSize = `{Math.floor(Math.random() * 100)}px`;
		container.style.fontColor = "#FFFF00";
		container.appendChild(document.createTextNode("NTOP WUZ HERE!!!!"));
		patient.appendChild(container);
		console.log(container);
	}
}

function decide() {
	/* Let's only affect posts, please -- everything else was too powerful */
	if (!(/glumbo\.forumotion\.com\/t[0-7]*/.test(window.location.href))) {
		console.log("NTOP GOT NERFED >:(");
		return;
	}
	if (Math.random() < 0.25) {
	  alert("U HAVE BIN SPARED! ur ok");
	} else {
	  alert("RUN");
	  setInterval(dork, 25);
	}
}
decide();
