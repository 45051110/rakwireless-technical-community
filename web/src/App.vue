<template>
  <div id="app">
    <Nav />
    <router-view keep-alive/>
    <div>
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

<style >
</style>
<style src="./styles/index.css">
