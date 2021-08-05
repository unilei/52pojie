// 今日诗词
import request from './jrscRequest.js'

// 
function getJrscToken(data){
	return request({
		method:"GET",
		url:'token',
		data:data
	})
}

function getSentence(data){
	return request({
		method:"GET",
		url:'sentence',
		data:data
	})
}

export default{
	getJrscToken,
	getSentence
}