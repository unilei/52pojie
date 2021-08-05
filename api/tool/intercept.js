import request from '../toolRequest.js'

// 
function qqlj(data){
	return request({
		method:"GET",
		url:'qqlj',
		data:data
	})
}

function wxlj(data){
	return request({
		method:"GET",
		url:'wx',
		data:data
	})
}

export default{
	qqlj,
	wxlj
}