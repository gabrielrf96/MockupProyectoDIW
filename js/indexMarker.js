window.onload = function() {
	document.getElementById("newsLink").onclick = switchActive;
	checkIfNews();
}

function checkIfNews() {
	var isNews = (window.location.hash=="#noti");
	if(isNews) {
		switchActive();
	}
}

function switchActive() {
	document.getElementById("index").classList.remove("activo");
	document.getElementById("news").classList.add("activo");
}