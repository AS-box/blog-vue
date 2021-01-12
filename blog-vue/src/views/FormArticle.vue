<template>
<div>
  <div id="create" v-show="!isConfirm">
    <div class="create-kv">
      <h2>キービジュアル</h2>
      <upload-image></upload-image>
      <choose-image @kv="setkv" category="kv" :id="article.kvId"></choose-image>
      <button @click='deleteKv'>キービジュアルを解除する</button>
      <img :src="kvImgUrl" alt="">
    </div>
    <div class="create-title">
      <h2>タイトル</h2>
      <input type="text" name="create-title" v-model="article.title">
    </div>
    <div class="create-tag">
      <h2>タグ</h2>
      <input type="text" name="create-tag" v-model="article.tag">
    </div>
    <div class="create-text">
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
      <choose-image @image="selectImage" category="image"></choose-image>

      <textarea v-model="article.text" ref="ta"></textarea>
      <button @click="toConfirm">確認する</button>
    </div>
  </div>
  <div id="confirm" v-show="isConfirm">
    <article id="article">
      <h2>confirm</h2>
      <img :src="kvImgUrl" alt="">
      <h3>{{article.title}}</h3>
      <ul class="article_tag" v-if="article.tag !== ''">
        <li v-for="(tag,key) in arrayTag" :key="key">{{tag}}</li>
      </ul>
      <div ref="confirm_text" class="confirm-text"></div>
    </article>
    <button @click="toForm">戻る</button>
    <button @click="postArticle">決定</button>
  </div>
  <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
</div>
</template>
<script>
import UploadImage from '../components/UploadImage'
import ChooseImage from '../components/ChooseImage'
import marked from 'marked'

export default {
  name:'create',
  components:{
    UploadImage,
    ChooseImage,
  },
  data(){
    return{
      article:{
        title:'',
        date:'',
        tag:'',
        kvId:'',
        text:'',
      },
      isConfirm:false,
      kvImgUrl:'',
      load:false
    }
  },
  computed:{
    arrayTag(){
      return this.article.tag.split(',')
    }
  },
  methods:{
    setTitle(){
      if(this.article.title === ''){
        this.article.title = '無題'
      }
    },
    showThumb(){
      console.log(this)
      const imagesList = this.$store.state.images
      const image = imagesList.find((image) => image.id === this.kvId)
      this.kvImgUrl  = this.getImgeUrl(image.name)
    },
    setkv(kvid){
      this.kvId = kvid
      this.showThumb()
    },
    deleteKv(){
      this.kvId = ''
      this.kvImgUrl = ''
    },
    selectMark(e){
      const area = this.$refs.ta
      this.article.text = area.value.substr(0, area.selectionStart) + e.target.value + area.value.substr(area.selectionStart);
    },
    selectImage(id){
      const area = this.$refs.ta
      const image = this.$store.state.images.find((image) => image.id === id)
      const mark = "!["+ image.name + "](" + this.getImgeUrl(image.name) + ")"
      this.article.text = area.value.substr(0, area.selectionStart) + mark + area.value.substr(area.selectionStart);
    },
    showText(){
      this.$refs.confirm_text.innerHTML = marked(this.article.text)
    },
    toConfirm(){
      this.article.date = this.getDate()
      this.setTitle()
      this.showText()
      this.isConfirm = true
    },
    toForm(){
      this.isConfirm = false
    },
    toComplete(){

    },
    postArticle(){
      return new Promise((resolve)=>{
        this.load = true
        // this.$store.dispatch('postAtricle',this.article)
        resolve()
      }).then(() =>{
        this.load = false
        this.$router.push({path:'formComplete', name:'FormComplete'})
      })
    }
    
  },
  beforeCreate(){
    this.$store.dispatch('getImages')
  }
}
</script>