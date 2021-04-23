<template>
  <header>
    <div class="menu_btn" :class="{open:isOpen}" @click="menuBtn">
      <div v-if="!isOpen"><font-awesome-icon  icon="hamburger" /></div>
      <div v-if="isOpen"><font-awesome-icon icon="times" /></div>
    </div>
    <div class="logo"><img src="@/assets/image/asport_logo.png" alt=""></div>
    <ul class="category_list" :class="{show:isOpen,hide:!isOpen}">
      <li class="category_item" v-for="(category,key) in categories" :key="key"><a href="">{{ category }}</a></li>
    </ul>
  </header>
</template>

<script>
import 'normalize.css'
export default {
  name:'Header',
  data(){
    return {
      name:'',
      categories:this.$store.state.category,
      isOpen:false
    }
  },
  created(){
    console.log(this.category)
  },
  methods:{
    toggleMenu(){

    },
    menuBtn(){
      if(this.isOpen){
        this.isOpen = false
      }else{
        this.isOpen = true  
      }
    }
  }
  
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
h1,h2,h3,h4{
  margin: 0;
  padding:0;
}
header{
  background-color: $base_color;
  height: get_size(120px);
  position: relative;
  z-index: 100;
  .menu_btn{
    width: get_size(90px);
    height: get_size(90px);
    font-size: get_size(45px);
    color: $base_color;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    margin-left: 10px;
    svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }
  .category_list{
    @keyframes slideleft {
      0% {
        top: get_size(120px);
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
    @keyframes slideright {
      0% {
        top: get_size(120px);
        width: 100%;
      }
      100% {
        width: 0;
      }
    }
    &.show{
      animation-name: slideleft;
      animation-duration: 0.2s;
      animation-timing-function: ease-out;
      width: 100%;
    }
    &.hide{
      animation-name: slideright;
      animation-duration: 0.2s;
      animation-timing-function: ease-out;
      width: 0;
    }
    overflow: hidden;
    position: absolute;
    width: 0;
    margin: 0;
    top: get_size(120px);
    background: $base_color;
    list-style: none;
    padding: 0;
    li{
      line-height: get_size(100px);
      padding-left: get_size(90px);
      border-top: 2px dashed #fff;
      white-space: nowrap;
      a{
        color: #fff;
      }
    }
  }
  img{
    position: absolute;
    width: get_size(354px);
    font-size: 0;
    padding:5px 0;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
}

</style>