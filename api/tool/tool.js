import request from '../toolRequest.js'

// format js json 
function yiyan(data){
	return request({
		method:"GET",
		url:'yiyan',
		data:data
	})
}

function acg(data){
	return request({
		method:"GET",
		url:'acg',
		data:data
	})
}

function bing(data){
	return request({
		method:"GET",
		url:'bing',
		data:data
	})
}

function lishi(data){
	return request({
		method:"GET",
		url:'lishi',
		data:data
	})
}
function laji(data){
	return request({
		method:"GET",
		url:'laji',
		data:data
	})
}
export default{
	yiyan,
	acg,
	bing,
	lishi,
	laji
}