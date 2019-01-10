<template>
  <div id="app">
      <el-container>
          <el-aside width="200px">
              <el-menu
                  :default-active="$route.path"
                  class="el-menu-vertical-demo"
                  router
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <el-submenu index="/demo1">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>demo1</span>
                      </template>
                      <el-menu-item index="/demo1">选项3</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/demo2">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>demo2</span>
                      </template>
                      <el-menu-item index="/demo2">demo2</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/demo3">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>demo3</span>
                      </template>
                      <el-menu-item index="/demo3">
                          自定义插件
                      </el-menu-item>
                  </el-submenu>
                  <el-submenu index="/demo4">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>ES6规范</span>
                      </template>
                      <el-menu-item index="/demo4">
                          Iterator
                      </el-menu-item>
                  </el-submenu>
              </el-menu>
          </el-aside>
          <el-container>
              <el-header>
                  未定义
              </el-header>
              <el-main>
                  <router-view></router-view>
              </el-main>
          </el-container>

      </el-container>
  </div>
</template>

<script>
    export default {
      name: 'App'
    }
</script>
<style>
    html, body, #app, .el-container{
        height: 100%;
        margin: 0;
    }

    .el-menu{
        height: 100%;
    }

    .el-header, .el-footer {
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 25px;
        height: 100%;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>

