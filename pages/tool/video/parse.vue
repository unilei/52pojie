<template>
	<view class="container">
		<view class="tips-container">
			<view class="tips-1">
				目前支持: 抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑/全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue
				Vlog/小咖秀/西瓜视频/逗拍/虎牙/6间房/新片场/Acfun/美拍
			</view>
			<view class="tips-2">
				温馨提示: 粘贴视频地址时无需删除文案 但如果视频链接正确但解析失败请删掉文案后重试。<br>
				如果无法下载，请复制链接在本机浏览器打开。
			</view>
		</view>
		<uni-forms class="forms" ref="form" :modelValue="formData" :rules="rules" labelPosition="top">
			<uni-forms-item label="分享链接" name="url">
				<uni-easyinput type="textarea" v-model="formData.url" placeholder="请粘贴分享链接" />
			</uni-forms-item>
		</uni-forms>

		<button @click="submit">解析</button>

		<view class="result-container">
			<view class="res-title" v-if="resTitle">{{resTitle}}</view>
			<view class="res-item" v-if="resCover">
				<view class="res-title-1">封面：</view>
				<button type="default" @click="copy(resCover)">复制</button>
				<button type="default" @click="download(resCover,1)">下载</button>
			</view>
			<view class="res-item" v-if="resMusic">
				<view class="res-title-1">音乐：</view>
				<button type="default" @click="copy(resMusic)">复制</button>
				<button type="default" @click="download(resMusic,2)">下载</button>
			</view>
			<view class="res-item" v-if="resUrl">
				<view class="res-title-1">视频：</view>
				<button type="default" @click="copy(resUrl)">复制</button>
				<button type="default" @click="download(resUrl,3)">下载</button>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '@/common/util.js';
	import videoApi from '@/api/tool/video.js';
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'


	export default {
		data() {
			return {
				formData: {
					url: ''
				},
				rules: {
					// 对name字段进行必填验证
					url: {
						rules: [{
							required: true,
							errorMessage: '请粘贴分享链接',
						}]
					}
				},
				resCover: '',
				resMusic: '',
				resTitle: '',
				resUrl: ''

			}
		},
		onLoad(option) {

		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					uni.showLoading({
						title: '解析中...'
					})
					// console.log('表单数据信息：', res);
					let regUrl = util.httpString(this.formData.url);
					this.formData.url = regUrl[0];
					let data = Object.assign({}, this.formData);
					videoApi.videoParse(data).then(res => {
						// console.log(res)
						if (res.code == 200) {
							this.resCover = res.cover;
							this.resMusic = res.music;
							this.resTitle = res.title;
							this.resUrl = res.url;

						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
						uni.hideLoading();
					}).catch(err => {
						console.log(err)
					})

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			copy(value) {
				uniCopy({
					content: value,
					success: (res) => {
						uni.showToast({
							title: res,
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
			},
			download(url, type) {
				const downloadTask = uni.downloadFile({
					url: url, //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
							console.log(res)
							console.log('下载成功');
							if (type == 1) {
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success: () => {
										uni.showToast({
											title: '下载成功',
											icon: 'none'
										});
									},
									fail: () => {
										uni.showToast({
											title: '保存失败，请稍后重试',
											icon: 'none'
										});
									}
								})
							}

							if (type == 2 || type == 3) {
								uni.saveVideoToPhotosAlbum({
									filePath: res.tempFilePath,
									success: () => {
										uni.showToast({
											title: '下载成功',
											icon: 'none'
										});
									},
									fail: () => {
										uni.showToast({
											title: '保存失败，请稍后重试',
											icon: 'none'
										});
									}
								})
							}

						}
					}
				});

				downloadTask.onProgressUpdate((res) => {
					console.log('下载进度' + res.progress);
					console.log('已经下载的数据长度' + res.totalBytesWritten);
					console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
				});
			}


		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.rules)
		}
	}
</script>

<style>
	.container {
		padding: 20rpx;
	}

	.tips-container {
		padding: 20rpx;
	}

	.tips-1 {
		font-size: 24rpx;
		color: #808080;
	}

	.tips-2 {
		background-color: #00002A;
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
	}

	.forms {
		padding: 20rpx;
	}

	.container button {
		width: 50%;
		margin: 0 auto;
		background-color: #0AA0A8;
		color: #FFFFFF;
		font-size: 30rpx;

	}

	.result-container {
		padding: 20rpx;
		text-align: center;
		font-size: 30rpx;
		color: #B10DC9;
		margin-top: 40rpx;
	}

	.res-title {
		font-size: 24rpx;
	}

	.res-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 10rpx;
	}

	.res-title-1 {
		width: 20%;
		color: #000080;
	}

	.res-item button {
		margin-left: 10rpx;
		background-color: #1eb02f;
		font-size: 24rpx;
	}
</style>
