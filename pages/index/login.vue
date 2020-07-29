<template>
	<view class="login">
		<input class="login-1" type="text" value="" placeholder="请输入用户名" v-model="user" />
		<input class="login-2" type="password" value="" placeholder="请输入密码" v-model="pass"  />
		<button class="login-3" type="default" @click="goLogin">登陆</button>
	</view>
</template>
<script>
	import md5 from "../../utils/md5.js"
	import {Post} from "../../utils/request.js"
    import {  
        mapState,  
        mapMutations  
    } from 'vuex'; 	
	export default {
		data() {
			return {
				user:'',
				pass:'',
			}
		},
		computed: {  

        },  		
		methods: {
			goLogin(){
				const self=this;
				Post('https://www.shenyifan.top/apis/syf/php/yii/web/index.php?r=user/login',{
					admin:self.user,
					code:  md5(self.pass)
				}).then((d)=>{
					console.log(d)
					if(d.data.errcode==0){
						uni.showToast({
							title:d.data.errmsg,
							icon:'loading'
						})
						self.$store.state.login=true
						self.$store.state.adm=d.data.data.adm
						uni.navigateBack({
							
						})						
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
			},
		}
	}	
</script>

<style>
	.login{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.login-1{
		width: 80vw;
		height: 80rpx;
		border: 1px solid #eee;
		border-radius:10rpx ;
		margin-top:25rpx ;
		text-indent: 10rpx;
	}
	.login-2{
		width: 80vw;
		height: 80rpx;
		border: 1px solid #eee;
		border-radius:10rpx ;
		margin-top:25rpx ;
		text-indent: 10rpx;
	}
	.login-3{
		margin-top: 25rpx;
	}
</style>
