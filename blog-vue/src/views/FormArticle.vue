<template>
  <div id="createArticle">
    <div class="createArticle-kv">
      <h2>キービジュアル</h2>
      <upload-image></upload-image>
      <choose-image @kv="setkv" category="kv" :id="kvId"></choose-image>
    </div>
    <div class="createArticle-title">
      <h2>タイトル</h2>
      <input type="text" name="createArticle-title" v-model="title">
    </div>
    <div class="createArticle-tag">
      <h2>タグ</h2>
      <input type="text" name="createArticle-tag" v-model="tag">
    </div>
    <div class="createArticle-text">
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
      <button value="![代替テキスト](画像のURL)" @click="selectMark($event)">画像</button>
      <textarea v-model="text" ref="ta"></textarea>
      <button @click="toConfirm">確認する</button>

    </div>
  </div>
</template>
<script>
import UploadImage from '../components/UploadImage'
import ChooseImage from '../components/ChooseImage'
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
      date:'',
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
    markUp(){
      this.convHtml = this.text
      this.convHtml = marked(this.convHtml)
    },
    selectMark(e){
      const area = this.$refs.ta
      this.text = area.value.substr(0, area.selectionStart) + e.target.value + area.value.substr(area.selectionStart);
    },
    toConfirm(){
      this.setTitle()
      this.splitTag()
      this.markUp()
      const data = JSON.stringify(this.$data)
      localStorage.setItem('article',data)
      this.$router.push({
        'path':'/confirm',
        'name':'confirm'
      })
    },
    getId(){
      this.id = ("0000000" + Math.floor(Math.random() * 10000000)).slice(-7)
    }
    
  },
  beforeCreate(){
    this.$store.dispatch('getImages')
  }
}
</script>