<template>
  <div id="coiceImages">
    <button type="button" @click="openList">写真を選択</button>
    <ul>
      <li v-for="image in imagesList" :key="image.id"><a href=""  v-on:click.prevent="choice(image.id)" ><img :src="image.url" alt=""></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'ChoiceImages',
  props:['name'],
  data(){
    return {
      imagesList:[]
    }
  },
  methods:{
    openList(){
      this.imagesList = this.$store.state.images
    },
    choice(id){
      const name = this.$props.name.toString()
      this.$emit(name,id)
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