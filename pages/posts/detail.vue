<template>
	<view class="detail-container">
		<htmltowxml :text="postDetailData.originalContent" type="md"  @WxmlTagATap="wxmlTagATap" />
	</view>
</template>

<script>
	import postsApi from '@/api/content/posts.js';
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'
	export default {
		data() {
			return {
				postDetailData: {}
			}
		},
		filters:{
		},
		onLoad(option) {
			this.getPostDetailById(option.id);
		},
		methods: {
			getPostDetailById(id) {
				let data = {}
				postsApi.postDetailById(data, id).then(res => {
					console.log(res)
					if (res.status == 200) {
						this.postDetailData = res.data;
					} else {
						console.log(res)
					}
				}).catch(err => {
					console.log(err)
				})
			},
			wxmlTagATap(e){
				console.log('aaa')
				console.log(e)
				uniCopy({
					content: e.detail.src,
					success: (res) => {
						uni.showToast({
							title:"复制成功，在浏览器打开",
							icon: 'none'
						})
					},
					error: (e) => {
						uni.showToast({
							title: e,
							icon: 'none',
							duration: 3000,
						})
					}
				})
			}
		},
		onShareAppMessage() {
			
		},
		onShareTimeline() {
			
		}
	}
</script>

<style>
.detail-container{
	padding: 20rpx;
	font-size: 28rpx;
}

</style>
