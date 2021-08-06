<template>
	<view class="container">
		<view class="lishi-container">
			<view class="lishi-item" v-for="(item,index) in lishiData" :key="index">{{item}}</view>
			<view class="lishi-day">{{lishiDay}}</view>
		</view>
	</view>
</template>

<script>
	import toolApi from '@/api/tool/tool.js';

	export default {
		data() {
			return {
				lishiData: [],
				lishiDay: ''
			}
		},
		onLoad() {
			this.getLishi()
		},
		methods: {
			getLishi() {
				let data = {
					format: 'json'
				}
				uni.showLoading({
					title:'加载中...'
				})
				toolApi.lishi(data).then(res => {
					console.log(res)
					if (res.code == 200) {
						this.lishiData = res.content;
						this.lishiDay = res.day;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					uni.hideLoading()
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20rpx;
	}

	.lishi-container {
		padding: 10rpx;
	}

	.lishi-item {
		font-size: 30rpx;
		line-height: 60rpx;
		border-bottom: 1rpx solid #EEEEEE;
		color: #004956;
	}

	.lishi-day {
		text-align: right;
		font-size: 30rpx;
		margin-top: 20rpx;
	}
</style>
