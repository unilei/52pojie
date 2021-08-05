<template>
	<view class="container">
		<view class="mini-container">
			<view class="mini-item" @click="turnMiniProgram(1)">爱盼影视</view>
			<view class="mini-item" @click="turnMiniProgram(2)">抛硬币Plus</view>
		</view>
		<view class="ip-container">
			<image src="https://tenapi.cn/ipinfo/" mode="widthFix"></image>
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
		}
	}
</script>

<style>
	page {
		background-color: #F4F5F6;
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
		border-bottom: 1rpx solid #EEEEEE;
		background-color: #FFFFFF;
	}

	.ip-container {
		width: 96%;
		margin: 0 auto;
		background-color: #FFFFFF;

	}

	.ip-container image {
		width: 100%;
		border-radius: 10rpx;
	}
</style>
