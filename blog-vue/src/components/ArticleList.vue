<template>
  <div id="articleList">
  <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
    <div class="list" v-if="articles.length">
      <div class="item" v-for="(article,key) in articles" :key="key" @click="toArticle(article)">
        <img :src="getImgeUrl(article.kvName)" alt="">
        <p>{{ article.title }}</p>
      </div>
    </div>
    <p v-else>該当の記事がありません</p>
  </div>
</template>

<script>
export default {
  name:'ArticleList',
  props:['category'],
  data(){
    return{
      articles:this.$store.state.articles,
      // images:[],
      load:false
    }
  },
  created(){
    if(this.category){
      this.getArticleCategory(this.category)
    }
  },
  watch:{
    // articles:function(newVal,oldVal){
    //   console.log(newVal,oldVal)
    // }
  },
  async mounted(){//もっと良い書き方ありそう
    this.load = true
    await this.$store.commit('getArticles')
    await this.$store.commit('getImages')
    this.load = false
  },
  methods:{
    toArticle(data){
      this.$router.push({name:'Article',params:{data:data}})
    },
    getArticleCategory(){
      this.articles = []
      const articles = this.$store.state.articles.filter((article)=>article.category === this.category)      
      this.articles = articles
      console.log(this.articles.length)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
  #articleList{
    .list{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item{
        flex-basis: 50%;
        list-style: none;
        font-size: get_size(25px);
        padding: get_size(20px);
        box-sizing: border-box;
        img{
          width: 100%;
          height: get_size(230px);
        }
        p{
          padding:10px;
          margin: 0;
          margin-top: -2px;
          background: #fff;
          min-height: 62px;
          box-sizing: border-box;
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