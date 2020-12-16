<template>
  <div id="coiceImages">
    <button type="button" @click="openList">写真を選択</button>
    <ul v-if="isOpenList">
      <li v-for="image in imagesList" :key="image.id"><a href=""  v-on:click.prevent="choose(image.id);showThumb(id)" ><img :src="getImgeUrl(image.name)" alt=""></a></li>
    </ul>
    <img src="" alt="">
  </div>
</template>
<script>
export default {
  name:'ChooseImages',
  props:{
    'category':String,
    'id':String
  },
  // props:['category','id'],
  data(){
    return {
      imagesList:[],
      isOpenList:false,
    }
  },
  watch:{
    id(newId){
      console.log(newId)
    }
  },
  methods:{
    openList(){
      this.imagesList = this.$store.state.images
      this.isOpenList = true
    },
    choose(id){
      console.log(this)
      const category = this.$props.category.toString()
      this.$emit(category,id)
    },
    getImgeUrl(name){
      return require(`../assets/image/${name}`)
    },
    showThumb(id){
      console.log(id)
    }
  }
}
</script>
<style scoped>
li img{
  width:120px;
  height:auto;
}
</style>