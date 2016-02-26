window.addEventListener("load", function() {
	document.onclick = function() {hideActive(event)};
});

function openOrCloseSubmenu(event, id) {
	event.stopPropagation();
	var width = document.documentElement.clientWidth;
	var source = event.currentTarget;
	if ( width <= 979 || (width <= 1145 && source.id=="sch") ) {
		var elm = document.getElementById(id);
		var disp = elm.style.display;
		hideActive(event);
		if (elm.classList.contains("activeSub"))
			elm.classList.remove("activeSub");
		else
			elm.classList.add("activeSub");
		elm.style.display = ( disp == "none" ? "block":(disp == "" ? "block":"none"));
		return false;
	}
}

function hideActive(event) {
	var active = document.getElementsByClassName("activeSub")[0];
	var source = event.target || event.srcElement;
	if (active != null && !source.classList.contains("noclose")) {
		active.classList.remove("activeSub");
		active.style.display = "none";
	}
}