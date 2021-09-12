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
  text-align: center;
  border-top: 1px solid #ddd;
  margin: 80px 0;
  padding: 40px;
  background: #E5E5E5;
}
.footer>div{
  margin-top:15px;
}
</style>
