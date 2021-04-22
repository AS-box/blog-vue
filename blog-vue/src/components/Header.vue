<template>
  <header>
    <div class="menu_btn close"><font-awesome-icon icon="hamburger" /></div>
    <div>
      <ul class="category_list" v-for="(category,key) in categories" :key="key">
        <li class="menu_categorr"><a href="">{{ category }}</a></li>
      </ul>
    </div>
    <div class="logo"><img src="@/assets/image/asport_logo.png" alt=""></div>
  </header>
</template>

<script>
import 'normalize.css'
export default {
  name:'Header',
  data(){
    return {
      name:'',
      categories:this.$store.state.category
    }
  },
  created(){
    console.log(this.category)
  },
  methods:{
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