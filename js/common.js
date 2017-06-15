 //设置localStorage;
 var ls=window.sessionStorage;
var  defaults={
		"version":"1.1",
		"from":'h5',
		"accept_language":"English",
		"types":"post",
		// "url":"http://192.168.1.46:8090/mobile/",
        // "url":"http://alpha2mobile.appasia.com:10040/",
       "url":"http://139.224.52.60:58080/mobile/",

		"dataType":"jsonp",
		"datas":{},
		"debug":false,
		"defaults":"http://139.224.52.60:58080/"
}
function Datas(options){
	if (options && options.validateFn) {
		var s = options.validateFn();
		if (!s) {
			return;
		}
	}

	if (options.debug) {
		console.log(options);
		console.log(defaults);
	}
	var tempUrl = defaults.url;
	// console.log(tempUrl);
	// console.log(options.url);
	tempUrl = tempUrl + options.url;
	//console.log(tempUrl);
	var opt=$.extend({},defaults,options);
	opt.url = tempUrl;
	
	if (defaults.debug) {
		console.log(opt);
	}
	if (opt.async==true) {
		async=true;
	}else{
			async=false;
	}
	// console.log("是否同步："+opt.async)
	$.ajax({
		url:opt.url,
		type:opt.types,
		async:opt.async,
		dataType:opt.dataType,
		data:opt.datas,
		success:opt.success,
		error:opt.error
	})

}
function getParam(){
	var url = location.search.substr(1);
	// console.log(url);
	var obj = {};
	if(!url) return false; 

	var arr = url.split("&");
	// console.log(arr);
	for(var i = 0,len = arr.length; i<len; i++){
		var params = arr[i].split("=");
		// console.log(params);  
		obj[params[0]] = decodeURI(params[1]);
	}
	// console.log(obj);
	return obj;
	
}
function browserRedirect(){
	var browserType=navigator.userAgent.toLowerCase();
	if (browserType.match(/mobile/i)!="mobile") {
		location.href="";//PC地址;
	}else if (browserType.match(/windows/i)!="windows") {
		location.href="";//移动地址;
	}

}


var gss_properties = {};
//初始化map_,给map_对象增加方法，使map_像Map  
function getMap() {
         var map_ = new Object();  
         map_.put = function(key, value) {  
             map_[key+'_'] = value;  
         };  
         map_.get = function(key) {  
             return map_[key+'_'];  
         };  
         map_.remove = function(key) {  
             delete map_[key+'_'];  
         };  
         map_.keyset = function() {  
             var ret = "";  
             for(var p in map_) {  
                 if(typeof p == 'string' && p.substring(p.length-1) == "_") {  
                     ret += ",";  
                     ret += p.substring(0,p.length-1);  
                 }  
             }  
             if(ret == "") {  
                 return ret.split(",");  
             } else {  
                 return ret.substring(1).split(",");  
             }  
         };  
         return map_;  
}

var map = getMap();

function goods_propert(g_id) {
	return map.get(g_id);
}
