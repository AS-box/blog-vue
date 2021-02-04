<template>
    <div id="app">
      <Header></Header>
      <main>
        <article-list></article-list>
      </main>
      <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import VueHead from 'vue-head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleList from '../components/ArticleList'

Vue.use(VueHead)
export default {
  name:'Home',
  components:{
    Header,
    Footer,
    ArticleList
  },
  head:{
    title:{
      inner:'アッズポート',
      complement: 'AS Port'
    },
    meta:[
      {name: 'description',content: 'アッズのブログです。プログラミング、イラスト、デザインについて更新していきます'},
      {name:'viewport', content:'width=device-width,initial-scale=1.0,viewport-fit=cover'}
    ]
  }
  
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
html,body{
  height:100%;
}
#app{
  background-color: #F3F1F1;
  min-height: 812px;
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