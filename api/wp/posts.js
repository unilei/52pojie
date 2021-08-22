import request from '../wpRequest.js'

// 
function postsList(data){
	return request({
		method:"GET",
		url:'wp-json/wp/v2/posts',
		data:data
	})
}

export default{
	postsList
}