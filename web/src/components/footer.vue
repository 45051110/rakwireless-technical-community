<template>
<div class="footer">
  <div>瑞科慧联(RAK)新闻中心 © 2021  </div>
  <div>Published with Ghost</div>
</div>
</template>

<script>
export default {
  name: 'Footer',
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
.footer{
  width: calc( 100vw - 100% + 1220px ) !important;
  text-align: center;
  border-top: 1px solid #ddd;
  padding: 40px;
  margin: 0 auto;
}
.footer>div{
  margin-top:15px;
}
@import './styles/index.css';
</style>

