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
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleList from '../components/ArticleList'
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
      {name: 'description',content: 'アッズのブログです。プログラミング、イラスト、デザインについて更新していきます'}
    ]
  }
  
}
</script>

<style>

</style>