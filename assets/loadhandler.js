function LoadHandler() {
	delay(20000);	
	var selector = document.getElementById("project3-video1").style;
	if(document.getElementById("body").style.width > document.getElementById("body").style.height) {
		selector.width = "640px";
		selector.height = "360px";
	} else {
		selector.width = "300px";
		selector.height = "167px";
	}
	//console.log("LoadHandler DONE");
}

function ToggleDisplayQRcode() {
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
		selector.backgroundColor = "#ffffff";
		selector.padding = "auto";
		//selector.float = "right";
		//var selector = document.getElementById("qrcode-image").style;
		//selector.zIndex = "20000";
	}
	//console.log("ShowQRcode DONE");
}