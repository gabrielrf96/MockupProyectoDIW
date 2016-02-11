var currentImg = 1;
var auto;

function clearCurrentActiveSelector() {
	var sel = document.getElementById("selector" + currentImg);
	sel.classList.remove("selectorActivo");
}

function setCurrentActiveSelector() {
	var sel = document.getElementById("selector" + currentImg);
	sel.classList.add("selectorActivo");
}

function setImg() {
	var slider = document.getElementById("slider");
	slider.className = "fadeOut";
	setTimeout(function() {
		slider.style["background-image"] = "url(img/slider/" + currentImg + ".jpg)";
		slider.className = "fadeIn";
	}, 250);
	setCurrentActiveSelector();
}

function previousImg() {
	clearCurrentActiveSelector();
	if (currentImg == 1)
		currentImg = 2;
	else
		currentImg--;
	setImg();
}

function goTo(code) {
	if (code != currentImg) {
		clearCurrentActiveSelector();
		currentImg = code;
		setImg();
	}
}

function nextImg() {
	clearCurrentActiveSelector();
	if (currentImg == 2)
		currentImg = 1;
	else
		currentImg++;
	setImg();
}

function restartAuto() {
	auto.clearInterval();
	auto = setInterval(nextImg, 10000);
}

auto = setInterval(nextImg, 10000);