<template>
	<view class="blogs">

		<view class="search">
			<input class="search-1" type="text" value="" placeholder="请输入搜索内容" v-model="keyword" />
			<button class="search-2" type="default" @click="goSearch()">搜索</button>
		</view>
		<view class="ttabs">
			<view class="ttab" v-for="(value, key, index) in tab" @click="goSearch2(key)">
				{{key}}({{value}})
			</view>			
		</view>		
		<blogItem v-for="(item,index) in list" :key="index" :detail="item"></blogItem>
	</view>
</template>

<script>
	import {Post} from "../../utils/request.js"
import blogItem from "../../vueComponents/blogItem.vue";
	export default {
		data(){
			return{
				tab:[],
				keywords:['js','vue','php','yii','nginx','mysql','nuxt','linux','node','flutter','RN','kbone'],
				keyword:'',
				loading:false,
				list:[],
				start_page:-1,
			}
		},
	components:{
		blogItem
	},	
	onReachBottom(){//uniapp 监听下拉加载生命周期
		const self=this;
	　　if(this.loading){
			return false;
		}
		this.getList()
	},	
	onPullDownRefresh() {
         this.list=[]
		 this.start_page=-1
		 this.getList()
        },		
		created(){
			this.getList()
			this.getTab()
		},
		methods:{
			goDetail(){
				alert(123)
				uni.navigateTo({
					url:'./blogDetail'
				})
			},
			getTab(){
				const self=this;
					Post('https://www.shenyifan.top/apis/syf/php/yii/web/index.php?r=blog/tabs',{
						tab: self.keywords
					}).then((d)=>{
						if(d.data.errcode==0){
							self.tab=d.data.data
						}
					}).catch((d)=>{

					})				
			},
			goSearch2(d){
				this.keyword=d;
				this.goSearch()
			},
			goSearch(){
				const self=this;
					 this.list=[]
					 this.start_page=-1				
				if(!self.keyword){
					 this.getList()					
				}else{
					this.loading=true
							uni.showToast({
								title:'加载中。。。',
								icon:'loading'
							})					
					Post('https://www.shenyifan.top/apis/syf/php/yii/web/index.php?r=blog/search',{
						keyword: self.keyword
					}).then((d)=>{
						if(d.data.errcode==0){
							self.list=self.list.concat(d.data.data)	
							uni.hideToast()
						}else{
							uni.showToast({
								title:d.data.errmsg,
								icon:'loading'
							})						
						}
					}).catch((d)=>{
						uni.showToast({
							title:d.data.errmsg,
							icon:'loading',
						})
					})					
				}
			},
			getList(){
				const self=this;
				self.start_page++;
						uni.showToast({
							title:'加载中。。。',
							icon:'loading'
						})					
				Post('https://www.shenyifan.top/apis/syf/php/upload/BlogList.php',{
					pages: 25,
					start_page: self.start_page
				}).then((d)=>{
					console.log(d)
					self.loading=false
					if(d.data.errcode==0){
						self.list=self.list.concat(d.data.data)	
						uni.hideToast()
					}else{
						uni.showToast({
							title:d.data.errmsg,
							icon:'loading'
						})						
					}
					uni.stopPullDownRefresh()
				}).catch((d)=>{
					self.loading=false
					uni.showToast({
						title:d.data.errmsg,
						icon:'loading',
					})
					uni.stopPullDownRefresh()
				})				
			},
		},
	}		
</script>
<style>
	.blogs{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.search{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 100rpx;
		box-sizing: border-box;
		margin-top:20rpx ;
	}		
	.search-1{
		width: 300rpx;
		height: 100rpx;
		border: 1px solid #3C3E49;
		text-indent: 20rpx;
	}
	.search-2{
		width: 200rpx;
		height: 100rpx;
	}
	.ttabs{
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}
	.ttab{
		padding: 5rpx;
		border: 1px solid #333333;
		margin: 10rpx;
		font-size: 10rpx;
	}
</style>
