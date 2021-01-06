<template>
  <div class="upload-image">
    <input type="file" @change="setName" accept="image/*">
    <img src="@/assets/image/Preloader_1.gif" alt="" v-if="load">
    <button @click="upload">アップロード</button>
  </div>
</template>
<script>
export default {
  name:'postImage',
  data(){
    return{
      name:'',
      load:false
    }
  },
  methods:{
    setName(e){
      this.name = e.target.files[0].name
    },
    upload(){
      if(this.name !== ''){
        return new Promise((resolve)=>{
          this.load = true
          this.$store.dispatch('postImages',{
            id:("0000000" + Math.floor(Math.random() * 10000000)).slice(-7),
            date:this.getDate(),
            name:this.$data.name
          })
          resolve()
        }).then(() =>{
          this.load = false
        })
      }else{
        alert('アップロードするファイルを選択してください')
      }
    }
  }
}
</script>