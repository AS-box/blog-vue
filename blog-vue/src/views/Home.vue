<template>
  <ArticleList></ArticleList>
</template>

<script>
import Vue from 'vue';
import VueHead from 'vue-head'
import ArticleList from '../components/ArticleList.vue';

Vue.use(VueHead)
export default {
  name:'Home',
  components:{
    ArticleList
  },
  props:{
  },
  methods:{
    toArticle(data){
      this.$router.push({name:'Article',params:{data:data}})
    },
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