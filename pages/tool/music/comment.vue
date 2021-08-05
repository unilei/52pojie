<template>
	<view class="container">
		<view class="title">网易云热评</view>
		<view class="content">{{cloudMusicCommentData.content}}</view>
		<view class="name">— {{cloudMusicCommentData.name}}</view>

		<view class="audio">
			<audio :src="cloudMusicCommentData.url" :poster="cloudMusicCommentData.cover"
				:name="cloudMusicCommentData.song" :author="cloudMusicCommentData.sing" :action="audioAction"
				controls></audio>
		</view>

		<view class="refresh">
			<button type="default" @click="refresh()">换一换</button>
		</view>
	</view>
</template>

<script>
	import cloudMusicApi from '@/api/tool/cloudMusic.js';

	export default {
		data() {
			return {
				cloudMusicCommentData: {},
				audioAction: {
					method: 'pause'
				}
			}
		},
		onLoad() {
			this.getCloudMusicComment();
		},
		methods: {
			getCloudMusicComment() {
				uni.showLoading({
					title: '加载中...'
				})
				let data = {}
				cloudMusicApi.comment(data).then(res => {
					if (res.code == 200) {
						this.cloudMusicCommentData = res.data;
					} else {
						uni.showToast({
							title: res,
							icon: 'none'
						})
					}
					uni.hideLoading();
				}).catch(err => {
					console.log(err)
				})
			},
			refresh() {
				this.getCloudMusicComment();
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
