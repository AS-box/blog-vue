<template>
  <div id="createArticle">
    <h2>タイトル</h2>
    <input type="text" name="createArticle-title" v-model="title">
    <h2>タグ</h2>
    <input type="text" name="createArticle-tag" v-model="tag">
    <h2>キービジュアル</h2>
    <upload-image></upload-image>
    <choose-images @kv="setkv" category="kv" :id="kvId"></choose-images>
    <h2>本文</h2>
    <textarea v-model="text"></textarea>
    <button @click="postArticle">投稿する</button>
  </div>
</template>
<script>
import UploadImage from './UploadImage'
import ChooseImages from './ChooseImages'
import marked from 'marked'

export default {
  name:'CreateArticle',
  components:{
    UploadImage,
    ChooseImages
  },
  data(){
    return{
      title:'',
      tag:[],
      kvId:'',
      text:''
    }
  },
  methods:{
    setkv(kvid){
      this.kvId = kvid
    },
    setTag(){
      this.tag = this.tag.split(/[,、]/)
    },
    postArticle(){
      this.setTag()
    },
    markUp(){
      this.text = marked(this.text)
    }
  },
  beforeCreate(){
    this.$store.dispatch('getImages')
  }
}
</script>