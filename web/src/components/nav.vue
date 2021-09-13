<template>
<div class="navBox">
  <div class="navbar">
    <img src="@/assets/logo.png" class="logoImg">
    <el-menu
      :default-active="activeIndex2"
      class="elNav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0c6bc4"
      text-color="#fff"
      active-text-color="#fff">
      <el-submenu index="1">
        <template slot="title">知识库</template>
        <el-menu-item index="2-1" @click="openLink('https://docs.rakwireless.com.cn', '_blank')">文档中心</el-menu-item>
        <el-menu-item index="2-2" @click="openLink('https://docs.rakwireless.com.cn/Knowledge-Hub/Learn', '_blank')">知识学习</el-menu-item>
        <el-menu-item index="2-3" @click="openLink('https://docs.rakwireless.com.cn/Application-Note', '_blank')">笔记应用</el-menu-item>
        <el-menu-item index="2-4" @click="openLink('https://docs.rakwireless.com.cn/Product-Terms-and-Abbreviations', '_blank')">产品术语/缩略语</el-menu-item>
            <!-- <el-submenu index="2-4">
              <template slot="title">选项4</template>A
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
      </el-submenu>
      <el-menu-item index="2">问答</el-menu-item>
      <el-menu-item index="3">下载中心</el-menu-item>
      <el-menu-item index="4" @click="openLink('https://docs.rakwireless.com.cn/RUI', '_blank')">RAK服务</el-menu-item>
    </el-menu>
    <div class="loginBox">
      <span>
        <router-link to="/login">登录</router-link>
      </span>
      <span class="ml10">
        <router-link to="/register">注册</router-link>
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
    
    },
    openLink(url, opt = '_self') {
      window.open(url, opt);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBox{
  background: #0c6bc4;
}
.navbar{
  width: calc( 100vw - 100% + 1220px ) !important;
  margin: 0 auto;
  position: relative;
}
.logoImg{
  height: 60px;
  width: 130px;
  position: absolute;
}
.elNav{
  width:calc(100% - 130px);
  margin-left: 130px;
}
.loginBox{
  color: #fff;
  width: 80px;
  position: absolute;
  right: 0;
  top: 0;
  line-height: 60px;
  text-align: center;
}
.loginBox span{
  cursor: pointer;
}
</style>
