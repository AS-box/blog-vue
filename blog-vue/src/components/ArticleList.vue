<template>
  <div id="articleList">
  <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
    <ul>
      <li v-for="(article,key) in articles" :key="key">
        {{ article.title }}
        <img :src="getImgeUrl(article.kvName)" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'ArticleList',
  data(){
    return{
      articles:this.$store.state.articles,
      // images:[],
      load:false
    }
  },
  async mounted(){//もっと良い書き方ありそう
    this.load = true
    await this.$store.dispatch('getArticles')
    await this.$store.dispatch('getImages')
    this.load = false
  },
  computed:{
    // articles(){
    //   return this.$store.state.articles
    // }
  }
}
</script>

<style>

</style>