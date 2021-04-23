<template>
    <div id="app">
      <Header></Header>
      <main>
        <div id="articleList">
        <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
          <div class="list">
            <div class="item" v-for="(article,key) in articles" :key="key" @click="toArticle(article)">
              <img :src="getImgeUrl(article.kvName)" alt="">
              <p>{{ article.title }}</p>
            </div>
          </div>
        </div> 
      </main>
      <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import VueHead from 'vue-head'
import Header from '../components/Header'
import Footer from '../components/Footer'

Vue.use(VueHead)
export default {
  name:'Home',
  components:{
    Header,
    Footer,
  },
  data(){
    return{
      articles:this.$store.state.articles,
      // images:[],
      load:false
    }
  },
  created(){
    this.getArticleTag('CSS')
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
    },
    getArticleTag(category){
      const articles = this.articles.find((article)=>article.category === category)
      console.log(articles)
    }
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

main{
  padding: 0;
  margin: 0;
  ul{
  padding: 0;
  margin: 0;
  }
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
}

</style>