<template>
  <div id="app">
    <Nav />
    <router-view keep-alive/>
    <div class="footerBox">
      <Footer />
    </div>
  </div>
</template>

<script>

import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default {
  name: 'App',
  components: { 
    Nav,
    Footer,
  },
};
</script>

<style scoped>

.footerBox{
  width: 100%;
  background: #E5E5E5;
}
</style>
<style src="./styles/index.css">
