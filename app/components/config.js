let config = {
	serverUrl:'http://120.25.152.42:8888/users',
	getAjaxData:function(requestUrl, method, param, callback){
		let request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
			if(request.readyState != 4 ){
				return;
			}
			if(request.status == 200){
				let data = request.responseText;
				if(typeof(data) == 'string'){
					data = JSON.parse(data)
				}
				callback(data);
			}else{
				console.log(e);
			}
		}

		if(method == 'get'){
			let sendParam = '';
			for(let key in param){
				if(sendParam == ''){
					sendParam = '?' + key + '=' + param[key];
				}else{
					sendParam = sendParam + '&' + key + '=' + param[key];
				}
			}
			request.open(method,requestUrl+sendParam);
			request.send();
		}else{
			request.open(method,requestUrl);
			request.send(param);
		}

	}
}

export default config;