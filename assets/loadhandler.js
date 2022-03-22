function LoadHandler() {
	delay(20000);
	var selector = document.getElementById("#qrcodemodal").style;
	selector.position = "absolute";
	selector.display = "block";
	selector.zIndex = "20000";
	selector.width = "100vw";
	selector.height = "100vh";
	selector.left = "0px";
	selector.top = "0px";
	selector.background-color = "#000000";
	selector.visibility = "visible";
	selector.margin = "0px";
	selector.padding = "0px";
}