var firstPic = 1;
var boxNumber;
var numPic = 5;
var chosenPic = 1;
var mediaSmall = window.matchMedia("(max-width: 700px)");
var mediaMid = window.matchMedia("(max-width: 1000px)");
var mediaBig = window.matchMedia("(min-width: 1000px)");

function loadGallery() {
	handleGalleryChange();
	mediaSmall.addListener(handleGalleryChange);
	mediaMid.addListener(handleGalleryChange);
	mediaBig.addListener(handleGalleryChange);
	placeImg();
	setSelected();
}

function placeImg() {
	var minis = document.getElementById("minis").getElementsByTagName('IMG');
	if((minis.length-2)<numPic)
		for(var i=1;i<(minis.length-1);i++) {
			if((firstPic+i-1)<=numPic&&i<boxNumber+1)
				minis[i].src = "../img/gallery/rincon" + (firstPic+i-1) + ".jpg";
		}
	else
		for(var i=1;i<numPic+1;i++)
			if((firstPic+i-1)<=numPic&&i<boxNumber+1)
				minis[i].src = "../img/gallery/rincon" + (firstPic+i-1) + ".jpg";
}

function setCentralImg(pic) {
	chosen = parseInt(pic.src.split("rincon")[1].split(".")[0]);
	if(pic.src!=""&&chosen!=chosenPic) {
		chosenPic = chosen;
		document.getElementById("display").src = document.getElementById("display").src.replace(/rincon[0-9]+.jpg/, "rincon" + chosenPic + ".jpg");
		setSelected();
	}
}

function setGalleryPlace() {
	if((firstPic-1+boxNumber)<chosenPic) {
		while((firstPic-1+boxNumber)<chosenPic) {
			firstPic++;
		}
		placeImg();
	}
	if(firstPic>chosenPic) {
		firstPic = chosenPic;
		placeImg();
	}
	setSelected();
}

function nextGalleryImg() {
	if(chosenPic!=numPic) {
		chosenPic++;
		document.getElementById("display").src = document.getElementById("display").src.replace(/rincon[0-9]+.jpg/, "rincon" + chosenPic + ".jpg");
	}
	setGalleryPlace();
}

function previousGalleryImg() {
		if(chosenPic!=1) {
		chosenPic--;
		document.getElementById("display").src = document.getElementById("display").src.replace(/rincon[0-9]+.jpg/, "rincon" + chosenPic + ".jpg");
	}
	setGalleryPlace();
}

function setSelected() {
	var minis = document.getElementById("minis").getElementsByTagName('IMG');
		for(var i=1;i<(minis.length-2);i++) {
			if(minis[i].src!="")
				if(parseInt(minis[i].src.split("rincon")[1].split(".")[0]) == chosenPic) {
					if(!minis[i].className.match(/selected/))
						minis[i].className = minis[i].className + " selected";
				}
				else
					minis[i].className = minis[i].className.replace(" selected", "");
		}
}

function nextScroll() {
	if((firstPic + boxNumber - 1)<numPic) {
		firstPic++;
		placeImg();
		setSelected();
	}
}

function previousScroll() {
	if(firstPic>1) {
		firstPic--;
		placeImg();
		setSelected();
	}
}

function handleGalleryChange() {
	if (mediaSmall.matches) {
		firstPic = 1;
		boxNumber = 4;
		placeImg();
		setSelected();
	}
	else
		if (mediaMid.matches) {
			firstPic = 1;
			boxNumber = 8;
			placeImg();
			setSelected();
		}
	if(mediaBig.matches) {
		firstPic = 1;
		boxNumber = 14;
		placeImg();
		setSelected();
	}
}