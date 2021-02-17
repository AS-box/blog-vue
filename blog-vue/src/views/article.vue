<template>
  <div id="article">
    <img :src="getImgeUrl(data.kvName)" alt="">
    <span>{{data.date}}</span>
    <h3>{{data.title}}</h3>
    <p ref="article_text" class="article_text"></p>
  </div>
</template>
<script>
import marked from 'marked';

export default {
  name:'Article',
  props:{
    'article':{}
  },
  data(){
    return {
      data:this.$route.params.data
    }
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
  components:{
    
  },
  methods:{
    getText(){
      this.$nextTick(() => this.$refs.article_text.innerHTML = marked(this.data.text))
    }

  }
}
</script>