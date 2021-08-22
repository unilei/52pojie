const request = (config) => {
	// 处理 apiUrl
	let api_url = config.url;
	
	config.url = 'http://wordpress.unilei.cn/' + api_url;
	
	if (!config.data) {
		config.data = {};
	}
	
	let promise = new Promise(function(resolve, reject) {

		uni.request(config).then(responses => {
			// 异常
			// console.log(responses)
			if (responses[0]) {
				reject({
					message: "网络超时"
				});
			} else {
				let response = responses[1].data;
				let statusCode = responses[1].statusCode;
				//token 失效 返回登录页面
				if (statusCode === 401) {
					
				} else {
					resolve(response);
				}
			}
		}).catch(error => {
			reject(error);
		})
	})
	return promise;
};

export default request;