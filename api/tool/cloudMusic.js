import request from '../toolRequest.js'

// 
function comment(data){
	return request({
		method:"GET",
		url:'comment',
		data:data
	})
}

export default{
	comment
}