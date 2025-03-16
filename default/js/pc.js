 function pc_detect() {

 	var thisOS = navigator.platform;

 	var os = new Array("iPhone", "iPod", "iPad", "android", "Nokia", "SymbianOS", "Symbian", "Windows Phone", "Phone", "Linux armv71", "MAUI", "UNTRUSTED/1.0", "Windows CE", "BlackBerry", "IEMobile");

 	for (var i = 0; i < os.length; i++) {

 		if (thisOS.match(os[i])) {
 			return false;
 		}

 	}

 	if (navigator.platform.indexOf('iPad') != -1) {
 		return false;
 	}

 	var check = navigator.appVersion;

 	if (check.match(/linux/i)) {

 		if (check.match(/mobile/i) || check.match(/X11/i)) {
 			return false;
 		}
 	}
 	return true;

 	//类in_array函数
 	Array.prototype.in_array = function (e) {
 		for (i = 0; i < this.length; i++) {
 			if (this[i] == e)
 				return true;
 		}
 		return false;
 	}
 }

 function setCookie() {
 	var exp = new Date();
 	var strUrl = window.location.href;
 	exp.setTime(exp.getTime() + 600000);
 	document.cookie = "pc_browse=1;expires=" + exp.toGMTString() + ";path=/";
 	strUrl = strUrl.replace("/m/", "/");
 	window.location.href = strUrl;
 }
