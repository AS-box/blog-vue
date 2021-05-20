<template>
    <div id="app">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import VueHead from 'vue-head'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.use(VueHead)
export default {
  name:'Home',
  components:{
    Header,
    Footer
  }
  
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
html,body{
  height:100%;
}

main{
  padding: 0;
  margin: 0;
  ul{
  padding: 0;
  margin: 0;
  }
}

</style>