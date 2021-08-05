<template>
	<view class="container">
		<uni-forms class="forms" ref="form" :modelValue="formData" :rules="rules" labelPosition="top" labelWidth="300">
			<uni-forms-item label="待生成的地址连接/文字内容" name="txt">
				<uni-easyinput type="text" v-model="formData.txt" placeholder="请输入文字" />
			</uni-forms-item>
			<uni-forms-item label="生成二维码的大小" name="size">
				<uni-number-box v-model="formData.size" :min="1" :max="10"></uni-number-box>
			</uni-forms-item>
			<uni-forms-item label="生成二维码的边框大小" name="margin">
				<uni-easyinput type="number" v-model="formData.margin" placeholder="请输入边框大小" />
			</uni-forms-item>
			<uni-forms-item label="容错" name="ec">
				<uni-combox label="容错" :candidates="candidates" placeholder="请选择容错" v-model="formData.ec"></uni-combox>
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">生成</button>

		<view class="result-container" v-if="qrcodeUrl">
			<image :src="qrcodeUrl" mode="aspectFit" @click="previewQrcode(qrcodeUrl)"></image>
		</view>
	</view>
</template>

<script>
	import qrcodeApi from '@/api/tool/qrcode.js';

	export default {
		data() {
			return {
				qrcodeUrl: '',
				formData: {
					txt: '',
					size: 10,
					margin: 1,
					ec: 'L'
				},
				candidates: [
					'L', 'M', 'O', 'H'
				],
				rules: {
					// 对name字段进行必填验证
					txt: {
						rules: [{
							required: true,
							errorMessage: '请输入文字',
						}]
					},
					size: {
						rules: [{
							required: true,
							errorMessage: '生成二维码的大小',
						}]
					},
					margin: {
						rules: [{
							required: true,
							errorMessage: '请输入边框大小',
						}]
					},
					ec: {
						rules: [{
							required: true,
							errorMessage: '请选择容错',
						}]
					}
				}
			}
		},
		onLoad(option) {
			this.type = option.type;
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					let data = Object.assign({}, this.formData);
					this.generateQrcode(data);

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			generateQrcode(data) {

				// console.log(data);
				let url = "https://tenapi.cn/qr/?txt=" + data.txt + "&size=" + data.size + "&margin=" + data.margin +
					"&ec=" + data.ec;
				this.qrcodeUrl = url;
				return;
				qrcodeApi.generateQrcode(data).then(res => {
					console.log(res)
					// this.qrcodeUrl = res;
				}).catch(err => {
					console.log(err)
				})
			},
			previewQrcode(qrcode) {
				uni.previewImage({
					urls: [qrcode]
				})
			}

		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.rules)
		}
	}
</script>

<style>
	.container {
		padding: 20rpx;
	}

	.forms {
		padding: 20rpx;
	}

	.container button {
		width: 50%;
		margin: 0 auto;
		background-color: #0AA0A8;
		color: #FFFFFF;
		font-size: 30rpx;

	}

	.result-container {
		padding: 20rpx;
		text-align: center;
		font-size: 30rpx;
		color: #B10DC9;
	}
	
	.result-container image{
		width: 80%;
	}
</style>
