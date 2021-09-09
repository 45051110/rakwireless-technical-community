<template>
  <div id="app">
    <Nav />
    <router-view keep-alive/>
    <div>footer</div>
  </div>
</template>

<script>

import nav from '@/components/nav';

export default {
  name: 'App',
  components: { Nav: nav },
};
</script>

<style >
</style>
<style src="./styles/index.css">
