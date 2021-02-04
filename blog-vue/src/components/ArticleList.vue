<template>
  <div id="articleList">
  <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
    <ul>
      <li v-for="(article,key) in articles" :key="key">
        <a href="" v-on:click.prevent="choose(image.id)">
        <img :src="getImgeUrl(article.kvName)" alt="">
        {{ article.title }}
        </a>
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
        a{
          width: 100%;
          height: 100%;
          display: block;
          color: $text_color;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>