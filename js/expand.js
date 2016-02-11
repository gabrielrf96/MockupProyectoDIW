function interact(code) {
	var article = document.getElementsByTagName("article")[code-1];
	var button = document.getElementById("btn" + code);
	var block = document.getElementById("info" + code);
	if (block.classList.contains("expandAnim")) {
		block.classList.remove("expandAnim");
		article.classList.remove("expanded");
		block.classList.add("collapseAnim");
		button.src="img/icons/chevron-with-circle-down.svg";
	} else {
		if (block.classList.contains("collapseAnim"))
			block.classList.remove("collapseAnim");
		block.classList.add("expandAnim");
		article.classList.add("expanded");
		button.src="img/icons/chevron-with-circle-up.svg";
	}
}