<template>
    <div id="app">
      <Header></Header>
      <main>
        <div id="article">
          <img :src="getImgeUrl(data.kvName)" alt="">
          <span><font-awesome-icon icon="pen-nib" />{{data.date}}</span>
          <h2>{{data.title}}</h2>
          <p ref="article_text" class="article_text"></p>
          <div class="article_tagList">
            <ul>
              <li v-for="(tag,key) in data.tag" :key="key"><span><font-awesome-icon icon="hashtag" /></span>{{tag}}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import marked from 'marked';

export default {
  name:'Article',
  components:{
    Header,
    Footer
  },
  props:{
    'article':{}
  },
  data(){
    return {
      data:this.$route.params.data
    }
  },
  beforeCreate(){
    console.log(this.data)
  },
  mounted(){
    if(this.$route.params.data){
      localStorage.setItem('article', JSON.stringify(this.$route.params.data))
      this.data = this.$route.params.data
    }else{
      this.data = JSON.parse(localStorage.getItem('article'))
    }
    
    this.getText()
    this.getTags()
  },
  methods:{
    getText(){
      this.$nextTick(() => this.$refs.article_text.innerHTML = marked(this.data.text))
    },
    getTags(){
      this.data.tag = this.data.tag.split(',');
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/common.scss";
@import "@/assets/scss/article.scss";
main{
  padding: 10px 0;
}
  
</style>