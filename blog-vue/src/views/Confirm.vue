<template>
  <div id="confirm">
    <article id="article">
      <h2>confirm</h2>
      <h3>{{article.title}}</h3>
      <ul class="article_tag" v-if="tags.length">
        <li v-for="(tag,key) in tags" :key="key">{{tag}}</li>
      </ul>
      <div ref="confirm_text" class="confirm-text">

      </div>
    </article>
    <button @click="toForm">戻る</button>
    <button @click="postArticle">決定</button>
  </div>
</template>

<script>
export default {
  name:'confirm',
  data(){
    return{
      article:{},
      tags:[]
    }

  },
  created(){
    this.setData()
  },
  mounted(){
    this.setHtml()
  },
  methods:{
    toForm(){

    },
    setData(){
      this.article = JSON.parse(localStorage.getItem('article'))
      this.tags = this.article.tag
    },
    setHtml(){
      const area = this.$refs.confirm_text
      area.insertAdjacentHTML('beforeend',this.article.convHtml)
    }
  }
  
}
</script>

<style>

</style>