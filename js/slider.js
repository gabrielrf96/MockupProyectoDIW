var currentImg = 1;
		
function setImg() {
	var slider = document.getElementById("slider");
	slider.className = "fadeOut";
	setTimeout(function() {
		slider.style["background-image"] = "url(img/slider/" + currentImg + ".jpg)";
		slider.className = "fadeIn";
	}, 250);
}

function previousImg() {
	if (currentImg == 1)
		currentImg = 2;
	else
		currentImg--;
	setImg();
}

function goTo(code) {
	if (code != currentImg) {
		currentImg = code;
		setImg();
	}
}

function nextImg() {
	if (currentImg == 2)
		currentImg = 1;
	else
		currentImg++;
	setImg();
}