<template>
  <div class="createArticle">
    <form>
      <h2>タイトル</h2>
      <input type="text" name="createArticle-title" v-model="title">
      <h2>タグ</h2>
      <input type="text" name="createArticle-tag" v-model="tag">
      <h2>キービジュアル</h2>
      <input type="file" name="createArticle-mv" accept="image/*">
      <h2>本文</h2>
      <textarea v-model="text"></textarea>
    </form>

  </div>
</template>
<script>
export default {
  name:'CreateArticle',
  data(){
    return{
      title:'',
      tag:[],
      mv:'',
      text:''
    }
  },
  props:{}
}
</script>