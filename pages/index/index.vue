<template>
	<view class="container">
		<view class="navBox" v-show="!this.$store.state.login">
			<view @click="goLogin()">登陆</view>
			<view @click="goRegister()">注册</view>
		</view>
		<view class="navBox" v-show="this.$store.state.login">
			<view>{{`欢迎你,${this.$store.state.adm}`}}</view>
			<view @click="goExit()">退出</view>
		</view>
		
		<view class="blog" @click="goBlog">
			syf笔记
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goLogin(){
				uni.navigateTo({
					url:'./login'
				})
			},
			goRegister(){
				uni.navigateTo({
					url:'./register'
				})
			},
			goExit(){
				const self=this;
					self.$store.state.login=false
					self.$store.state.adm=''				
			},
			goBlog(){
				uni.navigateTo({
					url:'./blogs'
				})	
			},
		}
	}
</script>

<style>
.container{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}
.navBox{
	width:100%;
	height: 100rpx;
	background: #7fd8d9;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 30rpx;
	color: #333333;
}
.blog{
	padding: 16rpx;
	border-radius:8rpx;
	border: 1px solid #333;
	margin-top:60rpx ;
}	
</style>
