import request from '../toolRequest.js'

// 
function videoParse(data){
	return request({
		method:"GET",
		url:'video',
		data:data
	})
}

export default{
	videoParse
}