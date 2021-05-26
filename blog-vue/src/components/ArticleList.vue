<template>
  <div id="articleList">
  <img src="@/assets/image/Preloader_1.gif" alt="" v-show="load">
    <div class="list" v-if="articles.length" v-show="!load">
      <div class="item" v-for="(article,key) in articles" :key="key" @click="toArticle(article)">
        <img :src="getImgeUrl(article.kvName)" alt="">
        <p>{{ article.title }}</p>
      </div>
    </div>
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
    this.load = true
    this.$store.commit('getArticles')
    this.$store.commit('getImages')
    this.getArticleCategory()
    this.load = false
  },
  methods:{
    toArticle(data){
      this.$router.push({name:'Article',query:{id:data.id}})
    },
    getArticleCategory(){
      if(this.category !== 'All'){
        const articles = this.$store.state.articles.filter((article)=>article.category === this.category)    
        this.articles = articles
      }else{
        this.$router.push({name:'Home',query:{category:this.category}},() => {
        })
      }
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