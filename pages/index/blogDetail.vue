<template>
	<view class="bdet" v-if="detail">
		<view class="bdet-1">
			{{detail.title}}
		</view>
		<view class="bdet-2">
			由用户{{detail.adm}}在{{detail.updatatime}}上传
		</view>
		<view class="bdet-3" v-html="detail.content">
			
		</view>
	</view>
</template>

<script>
	import {Post} from "../../utils/request.js"
	export default {
		data(){
			return{
				detail:'',
			}
		},
		created(){
			// alert(getApp().globalData.query)
				const self=this;
					Post('https://www.shenyifan.top/apis/syf/php/upload/BlogDetail.php',{
						id: getApp().globalData.query
					}).then((d)=>{
						self.detail=d.data.data
						console.log(self.detail)
					}).catch((d)=>{

					})				
		},
		methods:{
			
		},
	}	
</script>

<style>
	.bdet{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.bdet-1{
		width: 100%;
		padding: 15rpx;
		box-sizing: border-box;
		font-weight: bold;
		text-align: center;
	}
	.bdet-2{
		width:100%;
		text-align: center;
		font-size: 10rpx;
		color: #666;
	}
	.bdet img{
		max-width: 100%;
	}
	.bdet-3{
		width: 100%;
		padding: 10rpx;
		box-sizing: border-box;
		overflow: hidden;
		word-break: break-all;
	}
</style>
