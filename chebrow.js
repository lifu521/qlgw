// var pageurl = window.location.search;

// if(pageurl == '?m2w') {

//     addCookie('m2wcookie', '1', 0);

// }

// if(getCookie('m2wcookie') != '1' && browserRedirect()) {

// 	var pgurl = window.location.href;

// 	var npurl = pgurl.replace("www","m");

// 	location.href = npurl;

// }

/*工具类方法

------------------------------------------------*/

//检测是否移动设备来访

function browserRedirect() { 

	var sUserAgent= navigator.userAgent.toLowerCase(); 

	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 

	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 

	var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 

	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 

	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 

	var bIsAndroid= sUserAgent.match(/android/i) == "android"; 

	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 

	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 

	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 

		return false;

	} else { 

		return false;

	} 

}

//写Cookie

function addCookie(objName, objValue, objHours) {

    var str = objName + "=" + escape(objValue);

    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失

        var date = new Date();

        var ms = objHours * 3600 * 1000;

        date.setTime(date.getTime() + ms);

        str += "; expires=" + date.toGMTString();

    }

    document.cookie = str;

}



//读Cookie

function getCookie(objName) {//获取指定名称的cookie的值

    var arrStr = document.cookie.split("; ");

    for (var i = 0; i < arrStr.length; i++) {

        var temp = arrStr[i].split("=");

        if (temp[0] == objName) return unescape(temp[1]);

    }

    return "";

}

