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
	}
}

function decide() {
	/* Let's only affect posts, please -- everything else was too powerful */
	if (!(/glumbo\.forumotion\.com\/t[0-7]*/.test(window.location.href))) {
		console.log("NTOP GOT NERFED >:(");
		return;
	}
	
	/* Let's not affect people too many times in a row */
	let recentAttack = true;
	let lastAttack = parseInt(localStorage.getItem("lastAttack") ?? "0");
	if (lastAttack < (Date.now() - 3 * 60 * 60 * 1000)) {
		localStorage.setItem("lastAttack", Date.now());
		recentAttack = false;
	}
	let attackCount = parseInt(localStorage.getItem("attackCount") ?? "0");
	console.log("NTOP attack values", {attackCount, recentAttack, lastAttack});
	if (attackCount > 3 && recentAttack) {
		console.log("User has suffered enough");
		return;
	}
	localStorage.setItem("attackCount", attackCount + 1);

	/* Occasionally spare the user */
	if (Math.random() < 0.25) {
		alert("U HAVE BIN SPARED! ur ok");
		return;
	}
	
	alert("RUN");
	setInterval(dork, 25);

	/* If the user suffers this long enough, it should stop affecting them for the day */
	setTimeout(()=>{
		localStorage.setItem("attackCount", 999);
	}, 10*1000)
}
decide();
