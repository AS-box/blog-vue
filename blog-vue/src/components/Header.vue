<template>
  <header>
    <div class="menu_btn" :class="{open:isOpen}" @click="menuBtn">
      <div v-if="!isOpen"><font-awesome-icon  icon="hamburger" /></div>
      <div v-if="isOpen"><font-awesome-icon icon="times" /></div>
    </div>
    <div @click="selectCategory()" class="logo"><img src="@/assets/image/asport_logo.png" alt=""></div>
    <transition name="category-list">
      <ul class="category_list" v-if="isOpen">
        <li @click="selectCategory(category)" class="category_item" v-for="(category,key) in categories" :key="key">{{ category }}</li>
      </ul>
    </transition>
  </header>
</template>

<script>
import 'normalize.css'
export default {
  name:'Header',
  data(){
    return {
      name:'',
      categories:['HTML','CSS','javascript','学習','デザイン','イラスト','その他'],
      isOpen:false
    }
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
    },
    selectCategory(category){
      this.$emit('selectedCategory',category)
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
  .menu_btn{
    width: get_size(90px);
    height: get_size(90px);
    font-size: get_size(45px);
    color: $base_color;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    margin-right: 10px;
    svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }
  .category-list-enter-active, .category-list-leave-active {
    transform: translate(0px, 0px); 
    transition:transform .5s;
  }
  .category-list-enter, .category-list-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-100vh) translateY(0px);
  }
  .category_list{
    height: auto;
    overflow: hidden;
    position: absolute;
    width: 100%;
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