<template>
	<view class="container">
		<view class="container-item" @click="turnMusicComment()">网易云音乐热评</view>
		<view class="container-item" @click="turnIntercept(1)">QQ网址拦截查询</view>
		<view class="container-item" @click="turnIntercept(2)">微信网址拦截查询</view>
		<view class="container-item" @click="turnQrcode()">二维码</view>
		<view class="container-item" @click="turnVideoParse()">聚合短视频无水印解析 </view>
		<view class="container-item" @click="turnYiyan()">一言 </view>
		<view class="container-item" @click="turnDongMan(1)">随机二次元动漫图片  </view>
		<view class="container-item" @click="turnDongMan(2)">每日Bing必应美图  </view>
		<view class="container-item" @click="turnLishi()">历史上的今天</view>
		<view class="container-item" @click="turnLaji()"> 垃圾分类查询</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			turnMusicComment() {
				uni.navigateTo({
					url: '/pages/tool/music/comment'
				})
			},
			turnIntercept(type) {
				uni.navigateTo({
					url: '/pages/tool/intercept/website?type=' + type
				})
			},
			turnQrcode() {
				uni.navigateTo({
					url: '/pages/tool/qrcode/index'
				})
			},
			turnVideoParse() {
				uni.navigateTo({
					url: '/pages/tool/video/parse'
				})
			},
			turnYiyan(){
				uni.navigateTo({
					url:'/pages/tool/yiyan/index'
				})
			},
			turnDongMan(type){
				uni.navigateTo({
					url:'/pages/tool/dongman/index?type='+type
				})
			},
			turnLishi(){
				uni.navigateTo({
					url:'/pages/tool/lishi/index'
				})
			},
			turnLaji(){
				uni.navigateTo({
					url:'/pages/tool/laji/index'
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
	page {
		background-color: #080904;
	}

	.container {
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	.container-item {
		padding: 10rpx;
		width: 45%;
		height: 100rpx;
		font-size: 28rpx;
		font-weight: 700;
		background-color: #23273d;
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.2);

		color: #FFFFFF;
		font-weight: 700;
		margin-top: 20rpx;

		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10rpx;
	}
</style>
