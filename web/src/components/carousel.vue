<template>
<div class="carousel">
  <el-carousel trigger="click" height="280px">
    <el-carousel-item v-for="item in item" :key="item.key">
      <img :src="item.src" alt="" class="rakNewsItemImg">
      <!-- <h3 class="small">{{ item.word }}</h3> -->
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      item: [
        { src: '@/static/1631088292.png',
          key: '1111',
        },
        { src: '@/static/1631088292.png',
          key: '2222',
        },
        { src: '@/static/1631088292.png',
          key: '333',
        },
      ],
    };
  },
  methods: {
    handleSelect() {
    },
  },
};
</script>

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
