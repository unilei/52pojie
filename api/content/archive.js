import request from '../request.js'

// 
function listMonthArchives(data){
	return request({
		method:"GET",
		url:'content/archives/months',
		data:data
	})
}

function listYearArchives(data){
	return request({
		method:"GET",
		url:'content/archives/years',
		data:data
	})
}

export default{
	listMonthArchives,
	listYearArchives
}