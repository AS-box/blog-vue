<template>
  <div id="articleList">
    <ul>
      <li v-for="(article,key) in articles" :key="key"><img :src="getKvName(article.kvId)" alt="">{{ article.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'ArticleList',
  data(){
    return{
      articles:[]
    }
  },
  beforeCreate(){
  },
  created(){
    this.$store.dispatch('getArticles')
    this.$store.dispatch('getImages')
    this.articles = this.$store.state.articles
  },
  mounted(){

  },
  beforeUpdate() {
    this.articles = this.$store.state.articles
  },
  methods:{
    getKvName(kvId){
      const kv = this.$store.state.images.find((image) => image.id === kvId)
      return this.getImgeUrl(kv.name)
    }
  }
  
}
</script>

<style>

</style>