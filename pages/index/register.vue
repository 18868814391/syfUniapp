<template>
	<view class="login">
		<input class="login-1" type="text" value="" placeholder="请输入账户" v-model="admin" />
		<input class="login-1" type="text" value="" placeholder="请输入用户名" v-model="Thename" />
		<input class="login-2" type="password" value="" placeholder="请输入密码" v-model="code"  />
		<button class="login-3" type="default" @click="goLogin">注册</button>
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
				admin:'',
				Thename:'',
				code:'',
			}
		},
		computed: {  

        },  		
		methods: {
			goLogin(){
				const self=this;
				Post('https://www.shenyifan.top/apis/syf/php/yii/web/index.php?r=user/register',{
					Thename:self.Thename,
					admin:self.admin,
					code:  md5(self.code)
				}).then((d)=>{
					console.log(d)
					if(d.data.errcode==0){
						uni.showToast({
							title:d.data.errmsg,
							icon:'loading'
						})
						self.$store.state.login=true
						self.$store.state.adm=self.Thename
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
