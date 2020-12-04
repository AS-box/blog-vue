<template>
  <div class="upload-image">
    <input type="file" @change="setData" accept="image/*">
    <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
    <button @click="upload">アップロード</button>
  </div>
</template>
<script>
export default {
  name:'postImage',
  data(){
    return{
      id:'',
      url:'',
      date:'',
      load:false
    }
  },
  methods:{
    setData(e){
      this.date = this.getDate()
      this.id = ("0000000" + Math.floor(Math.random() * 10000000)).slice(-7)
      this.changeBase64(e.target.files[0])
    },
    getDate(){
      const date = new Date
      const year = date.getFullYear()
      const month = date.getMonth()+1
      const day = date.getDay()
      const hour = date.getHours()
      const min = date.getMinutes()
      const sec = date.getSeconds()
      return year+'/'+month+'/'+day+'/'+hour+':'+min+':'+sec
    },
    changeBase64(fileObject){
      // ローカルにある画像ファイルのURLを取得する
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.url = e.target.result;
      }
      fileReader.readAsDataURL(fileObject);
    },
    upload(){
      return new Promise((resolve)=>{
        this.load = true
        this.$store.dispatch('postImages',{
          id:this.$data.id,
          url:this.$data.url,
          date:this.$data.date
        })
        resolve()
      }).then(() =>{
        this.load = false
      })
    }
  }
}
</script>