<template>
    <div id="app">
      <Header @selectedCategory='catchCategory'></Header>
      <main>
        <ArticleList :category='category' :key="category"></ArticleList>
        <!-- <div id="articleList">
        <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
          <div class="list">
            <div class="item" v-for="(article,key) in articles" :key="key" @click="toArticle(article)">
              <img :src="getImgeUrl(article.kvName)" alt="">
              <p>{{ article.title }}</p>
            </div>
          </div>
        </div>  -->
      </main>
      <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import VueHead from 'vue-head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleList from '../components/ArticleList.vue';

Vue.use(VueHead)
export default {
  name:'Home',
  components:{
    Header,
    Footer,
    ArticleList
  },
  data(){
    return{
      category:''
    }
  },
  methods:{
    toArticle(data){
      this.$router.push({name:'Article',params:{data:data}})
    },
    catchCategory(category){
      this.category = category
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