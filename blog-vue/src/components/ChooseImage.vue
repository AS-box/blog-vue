<template>
  <div id="chooseImage">
    <button type="button" @click="openList">写真を選択</button>
    <div class="chooseImage_list" v-if="isOpenList" v-on:click.prevent="closeList"> 

      <ul>
        <li v-for="image in imagesList" :key="image.id"><a href=""  v-on:click.prevent="choose(image.name)" ><img :src="getImgeUrl(image.name)" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'chooseImage',
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
      choseImage:{},
      isShowThmb:false
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
    choose(name){
      const category = this.$props.category.toString()
      this.$emit(category,name)
      this.isOpenList = false
    }
    // showThumb(id,boo){
    //   this.isChoosed = true
    //   const image = this.imagesList.find((image) => image.id === id)
    //   this.choseImage = image
    //   this.isShowThmb = boo
    // }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
.chooseImage_list{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,0.5);
}
ul{
  list-style: none;
  padding:get_size(20px);
  display:inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 45%;
    flex-basis:45%;
    height:auto;
    align-items: start;
    margin-bottom: 10px;
    img{
      width: 100%;
    }
  }
}

</style>