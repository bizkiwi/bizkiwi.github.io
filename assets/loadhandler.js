function LoadHandler() {
	delay(20000);	
	Console.log("LoadHandler DONE");
}

function ShowQRcode() {
	var selector = document.getElementById("qrcodemodal").style;
	selector.position = "absolute";
	selector.zIndex = "20000";
	selector.width = "200vw";
	selector.height = "200vh";
	selector.left = "-50vw";
	selector.right = "150vw";
	selector.right = "-50vh";
	selector.bottom = "-50vh";
	selector.backgroundColor = "#000000";
	selector.padding = "auto";
	selector.display = "block";
	selector.visibility = "visible";
	Console.log("ShowQRcode DONE");
}