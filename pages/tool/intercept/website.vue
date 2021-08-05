<template>
	<view class="container">
		<uni-forms class="forms" ref="form" :modelValue="formData" :rules="rules" labelPosition="top">
			<uni-forms-item label="网址" name="url">
				<uni-easyinput type="text" v-model="formData.url" placeholder="请输入要查询的网址" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">查询</button>
		
		<view class="result-container">
			{{resultStr}}
		</view>
	</view>
</template>

<script>
	import interceptApi from '@/api/tool/intercept.js';

	export default {
		data() {
			return {
				type: 0,
				resultStr:'',
				formData: {
					url: ''
				},
				rules: {
					// 对name字段进行必填验证
					url: {
						rules: [{
								required: true,
								errorMessage: '请输入要查询的网址',
							}
						]
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
					let data = Object.assign({},this.formData);
					
					if(this.type == 1){
						this.getQqLj(data)
					}
					if(this.type == 2){
						this.getWxLj(data)
					}
					
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			getQqLj(data) {
				uni.showLoading({
					title:'加载中...'
				})
				interceptApi.qqlj(data).then(res => {
					if (res.code == 200) {
						console.log(res)
						this.resultStr = res.type;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					uni.hideLoading();
				}).catch(err => {
					console.log(err)
				})
			},
			getWxLj(data) {
				uni.showLoading({
					title:'加载中...'
				})
				interceptApi.wxlj(data).then(res => {
					if (res.code == 200) {
						console.log(res)
						this.resultStr = res.type;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					uni.hideLoading();
				}).catch(err => {
					console.log(err)
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
	
	.forms{
		padding: 20rpx;
	}
	.container button{
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
</style>
