/*
 params
 * type:请求方法：get/post
 * url:资源路径
 * data:向服务器传的参数（数据） {username:"admin",password:111}=>username=admin&password=111
 * fnSuc:服务器响应成功时，前端需要执行的回调函数
 * */
/*function ajax(type,url,data,fnSuc){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	
	var str = '';
	for(var i in data){
		str += i + "=" + data[i] + "&";
	}
	
	str = str.replace(/&$/,"");
	
	
	if(type.toLowerCase() == "get"){
		if(str==""){
			xhr.open(type,url,true);
		}else{
			xhr.open(type,url+"?"+str,true);
		}
		
		xhr.send();
	}
	
	if(type.toLowerCase() == "post"){
		xhr.open(type,url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var data = xhr.responseText;
				fnSuc(data);
			}
		}
	}
	
}
*/

function ajax(obj){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	
	var str = '';
	for(var i in obj.data){
		str += i + "=" + obj.data[i] + "&";
	}
	
	str = str.replace(/&$/,"");
	
	
	if(obj.type.toLowerCase() == "get"){
		if(str==""){
			xhr.open(obj.type,obj.url,true);
		}else{
			xhr.open(obj.type,obj.url+"?"+str,true);
		}
		
		xhr.send();
	}
	
	if(obj.type.toLowerCase() == "post"){
		xhr.open(obj.type,obj.url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var data = xhr.responseText;
				obj.fnSuc(data);
			}
		}
	}
}
