<template>
<div id="app">
  <Header></Header>
  <div id="create" v-show="!isConfirm">
    <div class="create-kv">
      <h2>画像アップロード</h2>
      <upload-image></upload-image>
      <h2>キービジュアル</h2>
      <choose-image @kv="setkv" category="kv" :name="article.kvName"></choose-image>
      <button @click='deleteKv'>キービジュアルを破棄</button>
      <img :src="kvImgUrl" alt="">
    </div>
    <div class="create-title">
      <h2>タイトル</h2>
      <input type="text" name="create-title" v-model="article.title">
    </div>
    <div class="create-category">
      <h2>カテゴリー</h2>
      <select name="create-category" v-model="article.category">
        <option v-for="(category,key) in categoryList" :key="key">{{category}}</option>
      </select>
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
    </div>
    <div class="create-pickup">
      <h2>記事指定</h2>
      <ul>
        <li>
          <input type="radio" id="normal" value="normal" v-model="article.special">
          <label for="normal">指定なし</label>
        </li>
        <li>
          <input type="radio" id="pickup" value="pickup" v-model="article.special">
          <label for="pickup">ピックアップ記事に指定する</label>
        </li>
        <li>
          <input type="radio" id="popular" value="popular" v-model="article.special">
          <label for="popular">人気記事に指定する</label>
        </li>
      </ul>
    </div>
    <button @click="toConfirm">確認する</button>
  </div>
  <div id="confirm" v-show="isConfirm">
    <p>下記の内容で投稿されます。</p>
        <div id="article">
          <img :src="kvImgUrl" alt="">
          <span><font-awesome-icon icon="pen-nib" />{{article.date}}</span>
          <h2>{{article.title}}</h2>
          <p ref="article_text" class="article_text"></p>
          <div class="article_tagList">
            <ul>
              <li v-for="(tag,key) in article.tag" :key="key"><span><font-awesome-icon icon="hashtag" /></span>{{tag}}</li>
            </ul>
          </div>
        </div>
    <button @click="toForm">戻る</button>
    <button @click="postArticle">決定</button>
  </div>
  <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
</div>
</template>
<script>
'use strict';
import UploadImage from '../components/UploadImage'
import ChooseImage from '../components/ChooseImage'
import Header from '../components/Header'
import marked from 'marked'

export default {
  name:'Edit',
  components:{
    UploadImage,
    ChooseImage,
    Header
  },
  data(){
    return{
      article:{
        title:'',
        date:'',
        tag:'',
        category:'',
        kvName:'',
        text:'',
        special:''
      },
      isConfirm:false,
      kvImgUrl:'',
      load:false,
      categoryList:['その他','HTML','CSS','javascript','学習','デザイン','イラスト']
    }
  },
  beforeCreate(){
    this.$store.commit('getImages')
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
      this.kvImgUrl  = this.getImgeUrl(this.article.kvName)
    },
    setkv(name){
      this.article.kvName = name
      this.showThumb()
    },
    deleteKv(){
      this.article.kvName = ''
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
      this.$refs.article_text.innerHTML = marked(this.article.text)
    },
    getTags(){
      if(typeof this.article.tag == 'string'){
        console.log(typeof this.article.tag)
        this.article.tag = this.article.tag.split(',');
      }
    },
    toConfirm(){
      this.article.date = this.getDate()
      this.setTitle()
      this.showText()
      this.getTags()
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
        this.$store.dispatch('postAtricle',this.article)
        resolve()
      }).then(() =>{
        this.load = false
        this.$router.push({path:'formComplete', name:'FormComplete'})
      })
    }
    
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/common.scss";
@import "@/assets/scss/article.scss";
#create{
  padding:get_size(40px);
  h2{
    color: $blue;
    margin-top: get_size(40px);
  }
  .create-title{
    input{
      width:100%;
    }
  }
  .create-tag{
    input{
      width:100%;
    }
  }
  .create-kv{
    img{
    width: 100%;
    }
  }
  .create-text{
    textarea{
      width: 100%;
      height: get_size(1000px);
    }
  }
  .create-pickup{
    ul{
      padding-left: 0;
      li{
        list-style-type:none;
      }
    }
  }
}
#confirm{
    #article{
    .article_tagList{
      ul{
        padding:0;
      }
    }
  }
}
</style>