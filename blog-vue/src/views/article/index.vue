<template>
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
          <div class="article_update">
            <router-link :to="{path:'article/edit',query:{data:true}}"><span><font-awesome-icon icon="edit" /></span></router-link>
            <span @click="deleteArticle"><font-awesome-icon icon="trash-alt" /></span>
          </div>
        </div>
      </main>
</template>
<script>
import marked from 'marked';

export default {
  name:'Article',
  components:{
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
    if(this.$route.params.data){
      localStorage.setItem('article', JSON.stringify(this.$route.params.data))
      this.data = this.$route.params.data
    }else{
      this.data = JSON.parse(localStorage.getItem('article'))
    }
  },
  mounted(){
    // if(this.$route.params.data){
    //   localStorage.setItem('article', JSON.stringify(this.$route.params.data))
    //   this.data = this.$route.params.data
    // }else{
    //   this.data = JSON.parse(localStorage.getItem('article'))
    // }
    
    this.getText()
    this.getTags()
  },
  methods:{
    getText(){
      this.$nextTick(() => this.$refs.article_text.innerHTML = marked(this.data.text))
    },
    getTags(){
      if(this.data.tag === String){
      this.data.tag = this.data.tag.split(',');
      }
    },
    deleteArticle(){
      const result = window.confirm('本当に削除しますか？')
      if(result){
        this.$store.commit('deleteArticle',this.data.id)
        this.$router.push({path:'/', name:'Home'})
      }
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