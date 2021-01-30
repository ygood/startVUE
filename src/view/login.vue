<template>
  <div class="background">
    <i><b><h1>Individual Demo</h1></b></i>
    <div class="login">
        <ul>
          <li><h1 style="margin-left: 40px;">用户登录</h1></li>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <li><el-input v-model="formInline.username" @blur="usererror" placeholder="请输入用户名" style="width:220px"></el-input></li><span class="error" v-if="formInline.errusername">不能为空!</span>
            <li><el-input placeholder="请输入密码" v-model="formInline.password" @blur="passworderroe" show-password style="width:220px"></el-input></li><span class="error" v-if="formInline.errpassword">不能为空!</span>
          </el-form>
          <li>
            <el-button type="primary" round @click="login">登录</el-button>
            <el-button type="primary" round style="margin-left: 30px;" @click="register">注册</el-button>  
          </li>
          <li><a href="http://www.baidu.com" target="_blank">忘记密码？</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formInline: {
        username:'',
        password:'',
        errusername: false,
        errpassword: false,
      },     
    }
  },
  methods:{
    register : function(){
      console.log("register");
    },
    login : function(){
      if(this.formInline.username == "" || this.formInline.password == ""){
        if(this.formInline.username == ""){
          this.formInline.errusername = true;
        }
        if(this.formInline.password == ""){
          this.formInline.errpassword = true;
        }
        this.$notify.error({
          title: '错误',
          message: '用户名或密码不能为空！'
        });
        return
      }else if(this.formInline.username !=this.formInline.password){
        this.$notify.error({
          title: '错误',
          message: '用户名或密码错误，请重试！'
        });
        return
      }else{
         this.$notify.success({
          title: '登录成功',
          message: '欢迎回来！'
        });
        this.$router.replace('/manage')
      }
    },
    usererror : function(){
      if(this.formInline.username == ""){
        this.formInline.errusername = true;
      }else{
        this.formInline.errusername = false 
      } 
    },
    passworderroe:function(){
      if(this.formInline.password == ""){
        this.formInline.errpassword = true;
      }else{
        this.formInline.errpassword = false;
      }
    }
  }
}
</script>

<style scoped>
  .background{
    background-image: url('../assets/images/AI.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size:cover;
    position:fixed;
    text-align:left;
    color: #2c3e50;
    padding: 20px;
    width: 100%;
    height: 100%;
  }
  .login{
    background-color:rgb(230, 217, 217,0.85);
    margin-top: 50px;
    width: 300px;
    float: right;
    margin-right: 80px;
    height: 400px;
  }
  li{
    padding-top: 20px;
    list-style: none;
    padding-bottom: 10px;
  }
  ul{
    margin-bottom: 100px;
  }
  button{
    margin-left: 20px;
  }
  a{
    margin-left: 75px;
  }
  .error{
    color: red;
  }
</style>
