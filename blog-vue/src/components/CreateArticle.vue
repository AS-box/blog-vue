<template>
  <div class="createArticle">
    <form>
      <h2>タイトル</h2>
      <input type="text" name="createArticle-title" v-model="title">
      <h2>タグ</h2>
      <input type="text" name="createArticle-tag" v-model="tag">
      <h2>キービジュアル</h2>
      <upload-image @upload-image='getImageFile'></upload-image>
      <h2>本文</h2>
      <textarea v-model="text"></textarea>
    </form>

  </div>
</template>
<script>
import UploadImage from './UploadImage'

export default {
  name:'CreateArticle',
  components:{
    UploadImage
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