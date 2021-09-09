<template>
<div class="navBox">
  <el-menu
      :default-active="activeIndex2"
      class="navbar"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0c6bc4"
      text-color="#fff"
      active-text-color="#fff">
    <el-submenu index="1">
      <template slot="title">知识库</template>
      <el-menu-item index="2-1">文档中心</el-menu-item>
      <el-menu-item index="2-2">知识学习</el-menu-item>
      <el-menu-item index="2-3">笔记应用</el-menu-item>
      <el-menu-item index="2-4">产品术语/缩略语</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>A
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
    </el-submenu>
    <el-menu-item index="2">问答</el-menu-item>
    <el-menu-item index="3">下载中心</el-menu-item>
    <el-menu-item index="4">RAK服务</el-menu-item>
  </el-menu>
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
}
</style>
