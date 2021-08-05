<template>
	<view class="container">
		<view class="title">一言随机输出一句话</view>
		<view class="content">{{yiyanData.hitokoto}}</view>
		<view class="name">— {{yiyanData.author}} | {{yiyanData.source}} | {{yiyanData.catname}}</view>

		<view class="refresh">
			<button type="default" @click="refresh()">换一换</button>
		</view>
	</view>
</template>

<script>
	import toolApi from '@/api/tool/tool.js';

	export default {
		data() {
			return {
				yiyanData: {}
			}
		},
		onLoad() {
			this.getYiyan();
		},
		methods: {
			getYiyan() {
				uni.showLoading({
					title: '加载中...'
				})
				let data = {
					format:'json'
				}
				toolApi.yiyan(data).then(res => {
					this.yiyanData = res;
					uni.hideLoading();
				}).catch(err => {
					console.log(err)
				})
			},
			refresh() {
				this.getYiyan();
			}
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
	}

	.name {
		width: 100%;
		text-align: right;
		font-size: 24rpx;
		color: #808080;
	}

	.audio {
		width: 90%;
		margin: 40rpx auto 0;
		text-align: center;
	}

	.refresh {
		width: 50%;
		margin: 80rpx auto 0;

	}

	.refresh button {
		background-color: #0AA0a8;
		color: #FFFFFF;
		font-size: 28rpx;
	}
</style>
