import request from '../request.js'

// page size sort
function listPosts(data) {
	return request({
		method: "GET",
		url: 'content/posts',
		data: data
	})
}


function postDetailById(data,pathData) {
	return request({
		method: "GET",
		url: 'content/posts/'+pathData,
		data: data
	})
}


export default {
	listPosts,
	postDetailById
}
