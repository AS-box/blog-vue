<template>
    <div id="app">
      <Header></Header>
      <main>
        <div id="article">
          <img :src="getImgeUrl(data.kvName)" alt="">
          <span>{{data.date}}</span>
          <h3>{{data.title}}</h3>
          <p ref="article_text" class="article_text"></p>
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
  },
  methods:{
    getText(){
      this.$nextTick(() => this.$refs.article_text.innerHTML = marked(this.data.text))
    }

  }
}
</script>
<style lang="scss">
@import "@/assets/scss/common.scss";
  #article{
    width:get_size(696px);
    background: #ffffff;
    margin: auto;
    padding-top: 10px;
    img{
      width:100%;
      height:get_size(376px);
    }
  }
</style>