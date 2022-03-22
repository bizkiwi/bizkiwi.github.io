function LoadHandler() {
	delay(20000);	
	//console.log("LoadHandler DONE");
}

function ShowQRcode() {
	var selector = document.getElementById("qrcode-modal").style;
	if(selector.visibility == "visible") {
		selector.position = "fixed";
		selector.zIndex = "-30000";
		selector.display = "none";
		selector.visibility = "hidden";
		//var selector = document.getElementById("qrcode-image").style;
		//selector.zIndex = "-20000";
	} else {
		selector.position = "fixed";
		selector.zIndex = "30000";
		selector.display = "block";
		selector.visibility = "visible";
		selector.right = "0";
		selector.left = "0";
		//selector.top = "-50vh";
		selector.bottom = "0";
		selector.width = "100%";
		selector.height = "100vh";
		selector.backgroundColor = "#cccccc";
		selector.padding = "auto";
		//selector.float = "right";
		//var selector = document.getElementById("qrcode-image").style;
		//selector.zIndex = "20000";
	}
	//console.log("ShowQRcode DONE");
}