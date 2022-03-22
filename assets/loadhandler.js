function LoadHandler() {
	delay(20000);	
	Console.log("LoadHandler DONE");
}

function ShowQRcode() {
	var selector = document.getElementById("#qrcodemodal").style;
	selector.position = "absolute";
	selector.zIndex = "20000";
	selector.width = "100vw";
	selector.height = "100vh";
	selector.left = "0px";
	selector.bottom = "0px";
	selector.background-color = "#000000";
	selector.padding = "0px";
	selector.display = "block";
	selector.visibility = "visible";
	Console.log("ShowQRcode DONE");
}