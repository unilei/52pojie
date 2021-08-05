import request from './request.js'

function list(data){
	return request({
		method:"GET",
		url:'content/archives/months',
		data:data
	})
}

export default{
	list
}