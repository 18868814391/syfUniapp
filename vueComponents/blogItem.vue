<template>
	<view class="bi">
		<text @click="goDetail()">{{detail.title}}</text>
	</view>
</template>

<script>
export default {
	name: "blogItem",
	//属性
	props: {
		detail: {
			type: Object,//属性类型
			value: null
		}
	},
	//组件生命周期
	created:function(e){
	
	},
	methods: {
		goDetail(){
			getApp().globalData.query=this.detail.id;
				uni.navigateTo({
					url:'./blogDetail'
				})			
		},
	}
}	
</script>

<style>
	.bi{
		width: 80vw;
		padding: 5rpx 10rpx;
		border-radius:10rpx;
		border: 1px solid #333;
		margin: 15rpx;
	}
</style>
