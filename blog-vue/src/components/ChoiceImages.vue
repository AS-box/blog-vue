<template>
  <div id="coiceImages">
    <button type="button" @click="openList">写真を選択</button>
    <!-- <ul>
      <li v-for="image in imagesList" :key="image"><a href=""><img :src="image" alt="">{{ image }}</a></li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name:'ChoiceImages',
  data(){
    return {
      imagesList:[]
    }
  },
  methods:{
    openList(){
      this.imagesList = this.$store.state.images
      console.log(this)
    }
  }
}
</script>