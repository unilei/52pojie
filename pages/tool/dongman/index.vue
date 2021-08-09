<template>
	<view class="container">
		<view class="title">
			<block v-if="type==1">随机二次元动漫图片</block>
			<block v-if="type==2">每日Bing必应美图</block>
		</view>
		<view class="content" v-if="imageUrl">
			<image :src="imageUrl" mode="widthFix" @click="previewImage(imageUrl)" ></image>
		</view>

		<view class="refresh" v-if="type == 1">
			<button type="default" @click="refresh()">换一换</button>
		</view>
	</view>
</template>

<script>
	import toolApi from '@/api/tool/tool.js';

	export default {
		data() {
			return {
				imageUrl:'',
				type:0
			}
		},
		onLoad(option) {
			this.type = option.type;
			if(option.type==1){
				this.getDmAcg()
			}
			if(option.type == 2){
				this.getDmBing()
			}
		},
		methods: {
			getDmAcg() {
				uni.showLoading({
					title: '加载中...'
				})
				let data = {
					return:'json'
				}
				toolApi.acg(data).then(res => {
					if(res.code == 200){
						this.imageUrl = res.imgurl;
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
					
					uni.hideLoading();
				}).catch(err => {
					console.log(err)
				})
			},
			getDmBing() {
				uni.showLoading({
					title: '加载中...'
				})
				let data = {
					return:'json'
				}
				
				this.imageUrl = 'https://tenapi.cn/bing';
				uni.hideLoading();
			},
			previewImage(url){
				uni.previewImage({
					urls:[url]
				})
			},
			refresh() {
				var _this = this;
				if(this.type==1){
					this.getDmAcg()
				}
			}
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

	.title {
		font-size: 30rpx;
		font-weight: 700;
	}

	.content {
		padding: 20rpx;
		font-size: 28rpx;
		margin-top: 40rpx;
	}

	.content image{
		width: 100%;
		border-radius: 10rpx;
	}
	.refresh {
		width: 50%;
		margin: 80rpx auto 0;

	}

	.refresh button {
		background-color: #4f1c85;
		color: #FFFFFF;
		font-size: 28rpx;
	}
</style>
