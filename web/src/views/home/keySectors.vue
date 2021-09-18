<template>
<div class="keySectors">
   <el-col :span="12">
    <el-card shadow="hover" class="keySectorItem">
      <div class="keySectorsImg">图片</div>
      <div class="keySectorItemTile">知识库</div>
    </el-card>
   </el-col>
   <el-col :span="12">
    <el-card shadow="hover" class="keySectorItem">
      <div class="keySectorsImg">图片</div>
       <div class="keySectorItemTile">文档中心</div>
    </el-card>
   </el-col>
   <el-col :span="12">
    <el-card shadow="hover" class="keySectorItem">
      <div class="keySectorsImg">图片</div>
       <div class="keySectorItemTile">技术文章</div>
    </el-card>
   </el-col>
   <el-col :span="12">
    <el-card shadow="hover" class="keySectorItem">
      <div class="keySectorsImg">图片</div>
       <div class="keySectorItemTile">FAQ</div>
    </el-card>
   </el-col>
</div>
</template>

<script>
export default {
  name: 'KeySectors',
  data() {
    return {
    };
  },
  methods: {
    handleSelect() {
    },
  },
};
</script>

<style scoped>
.keySectors{
  background: #fff;
  overflow: hidden;
}
.keySectorItem{
  height: 140px;
}
.keySectorsImg{
text-align: center;
height: 80px;
line-height: 80px;
border: 1px solid #ddd;
}
.keySectorItemTile{
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>
