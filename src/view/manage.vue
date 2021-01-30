<template>
  <el-container style="height: 620px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" default-active="/manage/overflowview" router>
        <el-menu-item index="/manage/overflowview"><i class="el-icon-s-home"></i>首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-tools"></i>工作区
          </template>
          <el-menu-item-group>
            <el-menu-item index="/manage/diff">codeMirror-merge</el-menu-item>
            <el-menu-item index="/manage/diff">TODO</el-menu-item>
            <el-menu-item index="/manage/diff">TODO</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="login">
          <i class="el-icon-user" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">注销</el-dropdown-item>
            <el-dropdown-item command="edit">编辑</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>YL</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    login: function (command) {
      if (command == "logout") {
        this.$router.replace("/");
      }
    },
  },
};
</script>
<style>
.el-header {
  background-color: #EEF3F6;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>