<template>
  <div id="createArticle">
    <div class="createArticle_title">
      <h2>タイトル</h2>
      <input type="text" name="createArticle-title" v-model="title">
    </div>
    <div class="createArticle_tag">
      <h2>タグ</h2>
      <input type="text" name="createArticle-tag" v-model="tag">
    </div>
    <div class="createArticle_kv">
      <h2>キービジュアル</h2>
      <upload-image></upload-image>
      <choose-image @kv="setkv" category="kv" :id="kvId"></choose-image>
    </div>
    <div class="createArticle_text">
      <h2>本文</h2>
      <select name="" id="" @change="selectMark($event)" >
        <option disabled value="" selected>見出しを選ぶ</option>
        <option value="### ">見出し1</option>
        <option value="#### ">見出し2</option>
        <option value="##### ">見出し3</option>
      </select>
      <select name="" id="" @change="selectMark($event)">
        <option disabled value="" selected>引用の形を選ぶ</option>
        <option value=">">ノーマル</option>
        <option value=">>">二重引用</option>
      </select>
      <select name="" id="" @change="selectMark($event)">
        <option disabled value="" selected>強調の形を選ぶ</option>
        <option value="*文字*">斜体</option>
        <option value="**文字**">太字</option>
      </select>
      <button value="`文字`" @click="selectMark($event)">コード</button>
      <button value="***" @click="selectMark($event)">水平線</button>
      <button value="[文字](URL)" @click="selectMark($event)">リンク</button>
      <textarea v-model="text" ref="ta"></textarea>
      <button @click="postArticle">投稿する</button>
    </div>
  </div>
</template>
<script>
import UploadImage from './UploadImage'
import ChooseImage from './ChooseImage'
import marked from 'marked'

export default {
  name:'CreateArticle',
  components:{
    UploadImage,
    ChooseImage,
  },
  data(){
    return{
      title:'',
      tag:'',
      kvId:'',
      text:'',
      convHtml:''
    }
  },
  methods:{
    setTitle(){
      if(this.title === ''){
        this.title = '無題'
      }
    },
    setkv(kvid){
      this.kvId = kvid
    },
    splitTag(){
      if(this.tag !== ''){
        this.tag = this.tag.split(/[,、]/)
      }
    },
    postArticle(){
      this.setTitle()
      this.splitTag()
      this.markUp()
    },
    markUp(){
      this.convHtml = this.text
      this.convHtml = marked(this.convHtml)
    },
    selectMark(e){
      //テキストエリアと挿入する文字列を取得
      //カーソルの位置を基準に前後を分割して、その間に文字列を挿入
      const area = this.$refs.ta
      this.text = area.value.substr(0, area.selectionStart) + e.target.value + area.value.substr(area.selectionStart);
    }
    
  },
  beforeCreate(){
    this.$store.dispatch('getImages')
  }
}
</script>