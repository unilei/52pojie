<template>
	<view class="container">
		<view class="jrsc-container" v-if="jrscData.content">
			<view class="jrsc-title">{{jrscData.content}}</view>
		</view>

		<view class="swiper-container">
			<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :duration="500" circular
				previous-margin="20" next-margin="20">
				<swiper-item v-for="(item,index) in postBannerData" :key="index">
					<view class="swiper-item" @click="turnPostDetail(item.id)">
						<image :src="item.thumbnail" mode="aspectFill" lazy-load></image>
						<view class="swiper-item-title">{{item.title}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="posts-container">
			<view class="posts-title">最近更新</view>
			<view class="posts">
				<view class="posts-item" v-for="(item,index) in postsData" :key="index" >
					<view class="posts-item-t" v-if="item.thumbnail">
						<image lazy-load :src="item.thumbnail" mode="widthFix"></image>
					</view>
					<view class="posts-item-b" @click="turnPostDetail(item.id)">
						<view class="posts-item-title">{{item.title}}</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import archiveApi from '@/api/content/archive.js';
	import categoryApi from '@/api/content/category.js';
	import jrscApi from '@/api/jrsc.js';
	import postsApi from '@/api/content/posts.js';
	import wpPostsApi from '@/api/wp/posts.js';

	export default {
		data() {
			return {
				postBannerData: [],
				postsData: [],
				postPage: 0,
				postPageSize: 5,
				postLastPage: 0,
				jrscData: {},

			}
		},
		onLoad() {
			let jrscToken = uni.getStorageSync('jrscToken');
			if (!jrscToken) {
				this.getJrscToken();
			}
			this.getJrscSentence();
			// this.getCategoryList();
			// this.getPostListByCategorySlug('');
			this.getPostsList(this.postPage, this.postPageSize);
			this.getWpPosts();
		},
		methods: {
			getWpPosts(){
				let data ={
					
				}
				wpPostsApi.postsList(data).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			getPostsList(page, size) {
				let data = {
					page: page,
					size: size,
					sort: 'createTime,desc'
				}
				postsApi.listPosts(data).then(res => {
					// console.log(res)
					if (res.status == 200) {
						let content = res.data.content;
						if(page == 0){
							this.postBannerData = content.slice(0, 4);
						}
						this.postsData = this.postsData.concat(content);
						this.postLastPage = res.data.pages;
						
					}
				}).catch(err => {
					console.log(err)
				})
			},
			getJrscToken() {
				let data = {}
				jrscApi.getJrscToken(data).then(res => {
					// console.log(res)
					if (res.status == 'success') {
						uni.setStorageSync('jrscToken', res.data)
					} else {
						uni.showToast({
							title: res.status,
							icon: 'none'
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},
			getJrscSentence() {
				let data = {}
				jrscApi.getSentence(data).then(res => {
					// console.log(res)
					if (res.status == 'success') {
						this.jrscData = res.data;
					} else {
						console.log('jrsc:' + res.status)
					}
				}).catch(err => {
					console.log(err)
				})
			},
			getCategoryList() {
				let data = {
					sort: 'createTime,desc',
					more: true
				}
				categoryApi.listCategories(data).then(res => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			},
			getPostListByCategorySlug(slug) {

				let data = {
					slug: slug
				}

				categoryApi.listsPostsByCategorySlug(data).then(res => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				})

			},
			turnPostDetail(id){
				uni.navigateTo({
					url:'/pages/posts/detail?id='+id
				})
			}

		},
		onReachBottom() {
			this.postPage ++;
			this.getPostsList(this.postPage, this.postPageSize);
		},
		onPullDownRefresh() {
			this.getJrscSentence();
			this.postPage = 0;
			this.getPostsList(this.postPage, this.postPageSize);
			setTimeout(function(){
				uni.stopPullDownRefresh();
			},1000)
			
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
		width: 96%;
		margin: 0 auto;
	}

	.swiper-container {
		width: 100%;
		margin-top: 20rpx;
	}

	.swiper {
		width: 100%;
		border-radius: 20rpx;
		height: 340rpx;
	}

	.swiper-item {
		width: 98%;
		height: 100%;
		margin: 0 auto;
		position: relative;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.2);
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}

	.swiper-item-title {
		position: absolute;
		font-size: 28rpx;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 20rpx;
		color: #FFFFFF;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: nowrap;

	}

	.jrsc-container {
		margin-top: 20rpx;
		background-color: #23273d;
		border-radius: 10rpx;
		padding: 10rpx 20rpx;
		box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);
	}

	.jrsc-title {
		font-size: 28rpx;
		font-weight: 700;
		color: #FFFFFF;
	}

	.posts-container {
		margin-top: 20rpx;
	}

	.posts-title {
		font-size: 34rpx;
		padding: 0rpx 10rpx;
		font-weight: 700;
		color: #FFFFFF;
	}

	.posts {
		padding-bottom: 20rpx;
	}

	.posts-item {
		margin-top: 20rpx;
		background-color: #23273d;
		padding: 20rpx;
		border-radius: 20rpx;
		box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.posts-item-t {
		width: 30%;
		height: 120rpx;
		overflow: hidden;
		background-color: #f4f5f6;
		border-radius: 20rpx;
	}

	.posts-item-t image {
		width: 100%;
		border-radius: 20rpx;
	}

	.posts-item-title {
		font-size: 24rpx;
		color: #FFFFFF;
		font-weight: 700;
		text-decoration: underline;
	}
	
	.posts-item-b{
		width: 65%;
	}
	
</style>
