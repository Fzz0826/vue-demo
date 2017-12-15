<template>
<div class="login">
  <p>请输入您的账号和密码：</p>
  <p>用户名：<input type="text" v-model="user"></p>
  <p>密码：<input type="password" v-model="pwd"></p>
  <button @click="fn">点击登录</button>
</div>
</template>

<script>
 export default{
   data () {
     return {
       user: '',
       pwd: ''
     }
   },
   methods: {
     fn () {
       if (this.user === '' || this.pwd === '') {
         alert('请输入您的账号和密码')
         return false
       } else {
         window.localStorage.setItem('user', JSON.stringify({
           user: this.user
         }))
         this.$router.replace(this.$route.query.callback)
       }
     }
   }
 }
</script>

<style>
.login{
  width:100%;
  height:100%;
  background:#fff;
  text-align:center;
  line-height:1rem;
  padding:0 1rem;
}
.login button,.login input{
  outline:none;
  border:none;
  background:none;
}
.login button{
  width:100%;
  height:0.8rem;
  margin-top:30px;
  background:skyblue;
  color:#fff;
  border-radius: 8px;
}
.login input{
  display: inline-block;
  height:0.5rem;
  border:1px solid #eee;
  border-radius: 5px;
}
</style>