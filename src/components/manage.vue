<template>
    <div class="user">
        <el-dropdown @command="login">
            <el-button type="primary">
                用户<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">注销</el-dropdown-item>
            <el-dropdown-item command="b">编辑</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'Manage',
    data(){
        return{}
    },
    methods:{
        login: function(command){
            if(command == "a"){
                this.$router.replace('/');
            }          
        }
    }
}
</script>
<style>
    .user{
        margin-left: 1276px;
    }
    
</style>