<template>
  <div id="chooseImages">
    <button type="button" @click="openList">写真を選択</button>
    <div class="chooseImages_list" v-if="isOpenList" v-on:click.prevent="closeList"> 
      <ul>
        <li v-for="image in imagesList" :key="image.id"><a href=""  v-on:click.prevent="choose(image.id);showThumb(image.id)" ><img :src="getImgeUrl(image.name)" alt=""></a></li>
      </ul>
    </div>
    <img :src="getImgeUrl(choseImage.name)" alt="" v-if="isChoosed" >
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
      isChoosed:false,
      choseImage:{}
    }
  },
  watch:{
    id(newId){
      this.choose(newId)
    }
  },
  methods:{
    openList(){
      this.imagesList = this.$store.state.images
      this.isOpenList = true
    },
    closeList(){
      this.isOpenList = false
    },
    choose(id){
      const category = this.$props.category.toString()
      this.$emit(category,id)
      this.isOpenList = false
    },
    getImgeUrl(name){
      return require(`../assets/image/${name}`)
    },
    showThumb(id){
      this.isChoosed = true
      const image = this.imagesList.find((image) => image.id === id)
      this.choseImage = image
    }
  }
}
</script>
<style scoped lang="scss">
.chooseImages_list{
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba($color: #000000, $alpha: 0.8);
}
li img{
  width:120px;
  height:auto;
}

</style>