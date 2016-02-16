window.addEventListener("load", function() {
	document.onclick = hideActive;
});

function openOrCloseSubmenu(event, id) {
	event.stopPropagation();
	if (document.documentElement.clientWidth <= 1000) {
		var elm = document.getElementById(id);
		var disp = elm.style.display;
		hideActive();
		if (elm.classList.contains("activeSub"))
			elm.classList.remove("activeSub");
		else
			elm.classList.add("activeSub");
		elm.style.display = ( disp == "none" ? "block":(disp == "" ? "block":"none"));
		return false;
	}
}

function hideActive() {
	var active = document.getElementsByClassName("activeSub")[0];
	if (active != null) {
		active.classList.remove("activeSub");
		active.style.display = "none";
	}
}