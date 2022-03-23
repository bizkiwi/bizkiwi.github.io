function LoadHandler() {
	document.getElementById("page-top").style.color = "#1C4587";

	if(document.getElementById("page-top").style.width > document.getElementById("page-top").style.height) {
		var selector = document.getElementById("project3-video1").style;
		selector.width = "640";
		selector.height = "360";
		var selector = document.getElementById("project3-video2").style;
		selector.width = "640";
		selector.height = "360";
	} else {
		var selector = document.getElementById("project3-video1").style;
		selector.width = "300";
		selector.height = "167";
		var selector = document.getElementById("project3-video2").style;
		//document.getElementById("myFrame").setAttribute("width‌​","2‌​00‌​");
		selector.width = "300";
		selector.height = "167";
	}
		
	console.log("LoadHandler DONE");
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