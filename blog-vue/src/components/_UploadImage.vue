<template>
  <div class="upload-image">
    <input type="file" @change="setData" accept="image/*">
    <img :src="url" alt="">
    <button @click='upload'>アップロード</button>
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
      this.imageURL(e.target.files[0])
    },
    imageURL(fileObject){
      // ローカルにある画像ファイルのURLを取得する
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.url = e.target.result;
      }
      fileReader.readAsDataURL(fileObject);
    },
    upload(){
      this.$store.dispatch('postImages',{
        title:this.title,
        url:this.url
      })
    }
  }
}
</script>