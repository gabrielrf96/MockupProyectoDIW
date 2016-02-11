window.onscroll = function() {
	var nav = document.getElementsByTagName("nav")[0];
	var navOffset = document.getElementsByTagName("header")[0].offsetHeight;
	var scrollBarPosition = window.pageYOffset || document.body.scrollTop;
	document.getElementById("a").innerHTML = scrollBarPosition;
	if (scrollBarPosition >= navOffset) {
		nav.classList.add("fixedNav");
	}
	if (scrollBarPosition <= navOffset && nav.classList.contains("fixedNav")) {
		nav.classList.remove("fixedNav");
	}
}