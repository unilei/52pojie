import request from '../toolRequest.js'

// 
function generateQrcode(data){
	return request({
		method:"GET",
		url:'qr',
		data:data
	})
}

export default{
	generateQrcode
}