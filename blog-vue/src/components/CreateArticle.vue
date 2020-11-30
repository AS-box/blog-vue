<template>
  <div id="createArticle">
    <h2>タイトル</h2>
    <input type="text" name="createArticle-title" v-model="title">
    <h2>タグ</h2>
    <input type="text" name="createArticle-tag" v-model="tag">
    <h2>キービジュアル</h2>
    <upload-image></upload-image>
    <choice-images></choice-images>
    <h2>本文</h2>
    <textarea v-model="text"></textarea>
  </div>
</template>
<script>
import UploadImage from './UploadImage'
import ChoiceImages from './ChoiceImages'

export default {
  name:'CreateArticle',
  components:{
    UploadImage,
    ChoiceImages
  },
  data(){
    return{
      title:'',
      tag:[],
      mv:'',
      text:''
    }
  },
  props:{},
  methods:{
  }
}
</script>