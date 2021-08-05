import request from '../request.js'

// sort  more 
function listCategories(data) {
	return request({
		method: "GET",
		url: 'content/categories',
		data: data
	})
}


function listsPostsByCategorySlug(data) {
	let url = "content/categories/default/posts"
	if (data.slug) {
		url = "content/categories/" + data.slug + "/posts"
	}
	return request({
		method: "GET",
		url: url,
		data: data
	})
}

export default {
	listCategories,
	listsPostsByCategorySlug
}
