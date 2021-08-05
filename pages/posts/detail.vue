<template>
	<view class="detail-container">
		<htmltowxml :text="postDetailData.originalContent" type="md"  />
	</view>
</template>

<script>
	import postsApi from '@/api/content/posts.js';
	
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
			}
		}
	}
</script>

<style>
.detail-container{
	padding: 20rpx;
	font-size: 28rpx;
}

</style>
