<template>
  <div class="background">
    <h1>智能时代</h1>
    <div class="login">
        <ul>
          <li><h1 style="margin-left: 40px;">用户登录</h1></li>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <li><el-input v-model="formInline.username" placeholder="请输入用户名" style="width:220px"></el-input></li>
            <li><el-input placeholder="请输入密码" v-model="formInline.password" show-password style="width:220px"></el-input></li>
          </el-form>
          <li>
            <el-button type="primary" round>登录</el-button>
            <el-button type="primary" round style="margin-left: 30px;">注册</el-button>  
          </li>
          <li sty><a href="http://www.baidu.com" target="_blank">忘记密码？</a></li>
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
        ppassword:''
      },
     
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
    background-color:whitesmoke;
    margin-top: 50px;
    width: 300px;
    margin-left: 1030px;
    margin-right: 10px;
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
    margin-left: 80px;
  }
</style>
