function LoadHandler() {
	delay(20000);	
	Console.log("LoadHandler DONE");
}

function ShowQRcode() {
	var selector = document.getElementById("qrcode-modal").style;
	selector.position = "absolute";
	selector.zIndex = "20000";
	selector.display = "block";
	selector.visibility = "visible";
	selector.left = "0vw";
	//selector.right = "150vw";
	//selector.top = "-50vh";
	selector.bottom = "0vh";
	selector.width = "100vw";
	selector.height = "100vh";
	selector.backgroundColor = "#000000";
	selector.padding = "auto";

	var selector = document.getElementById("qrcode-image").style;
	selector.zIndex = "20000";
	Console.log("ShowQRcode DONE");
}