<template>
	<view class="container">
		<view class="mini-container">
			<view class="mini-item" @click="turnMiniProgram(1)">爱盼影视</view>
			<view class="mini-item" @click="turnMiniProgram(2)">抛硬币Plus</view>
		</view>
	</view>
</template>

<script>
	import toolApi from '@/api/tool/tool.js';

	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			turnMiniProgram(type) {
				if (type == 1) {
					uni.navigateToMiniProgram({
						appId: 'wx2559b84e4d1a01e7',
						path: 'pages/home/index',
						extraData: {},
						success(res) {
							// 打开成功
						}
					})
				}

				if (type == 2) {
					uni.navigateToMiniProgram({
						appId: 'wx97317faf8ef6e3ac',
						path: 'pages/index/index',
						extraData: {},
						success(res) {
							// 打开成功
						}
					})
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
	page {
		background-color: #080904;
	}

	.container {
		padding: 20rpx;
	}

	.mini-container {
		padding: 10rpx;
	}

	.mini-item {
		font-size: 30rpx;
		padding: 20rpx;
		background-color: #23273d;
		color: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 20rpx;
	}
	
</style>
