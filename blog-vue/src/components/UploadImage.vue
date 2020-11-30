<template>
  <div class="upload-image">
    <input type="file" @change="setData" accept="image/*">
    <img :src="url" alt="">
  </div>
</template>
<script>
export default {
  name:'postImage',
  data(){
    return{
      title:'',
      url:''
    }
  },
  methods:{
    setData(e){
      this.title = e.target.files[0].name 
      let promise = new Promise((resolve, reject) => {
        this.changeBase64(e.target.files[0])
        resolve('エンコード完了')
        reject('エンコードできませんでした')
      })
      promise.then(this.upload()) 
    },
    changeBase64(fileObject){
      let that = this
      // ローカルにある画像ファイルのURLを取得する
      const fileReader = new FileReader();
      fileReader.onload = function () {
        that.url = fileReader.result;
      }
      fileReader.readAsDataURL(fileObject);
    },
    upload(){
      let that = this;
      this.$store.dispatch('postImages',{
        title:that.title,
        url:that.url
      })
    }
  }
}
</script>