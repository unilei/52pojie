<template>
	<view class="container">
		<uni-forms class="forms" ref="form" :modelValue="formData" :rules="rules" labelPosition="top">
			<uni-forms-item label="垃圾名字" name="keyword">
				<uni-easyinput type="text" v-model="formData.keyword" placeholder="请输入查询的垃圾名字" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">查询</button>
		
		<view class="result-container">
			{{resultStr}}
		</view>
	</view>
</template>

<script>
	import toolApi from '@/api/tool/tool.js';

	export default {
		data() {
			return {
				resultStr:'',
				formData: {
					keyword: ''
				},
				rules: {
					// 对name字段进行必填验证
					keyword: {
						rules: [{
								required: true,
								errorMessage: '请输入查询的垃圾名字',
							}
						]
					}
				}
			}
		},
		onLoad(option) {
			
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					uni.showLoading({
						title:'查询中...'
					})
					let data = Object.assign({},this.formData);
					toolApi.laji(data).then(res=>{
						// console.log(res)
						if(res.code == 200){
							this.resultStr = res.data;
						}else{
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}
						uni.hideLoading();
					}).catch(err=>{
						console.log(err)
					})
					
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},

		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.rules)
		},
		onShareAppMessage() {
			
		},
		onShareTimeline() {
			
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
		background-color: #4f1c85;
		color: #FFFFFF;
		font-size: 30rpx;
		
	}
	
	.result-container {
		padding: 20rpx;
		text-align: center;
		font-size: 30rpx;
		color: #B10DC9;
		font-weight: 700;
		margin-top: 40rpx;
	}
</style>
