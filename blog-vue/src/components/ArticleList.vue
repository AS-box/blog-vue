<template>
  <div id="articleList">
  <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
    <ul>
      <li v-for="(article,key) in articles" :key="key" @click="toArticle(article)">
        <img :src="getImgeUrl(article.kvName)" alt="">
        {{ article.title }}
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
    await this.$store.commit('getArticles')
    await this.$store.commit('getImages')
    this.load = false
  },
  computed:{
    // articles(){
    //   return this.$store.state.articles
    // }
  },
  methods:{
    toArticle(data){
      this.$router.push({name:'Article',params:{data:data}})
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
  #articleList{
    padding: 10px 0;
    ul{
      display:flex;
      li{
        width:get_size(375px);
        padding:10px;
        list-style: none;
        font-size: get_size(40px);
        img{
          width: 100%;
        }
        a{
          width: 100%;
          height: 100%;
          display: block;
          color: $text_color;

        }
      }
    }
  }
</style>