<template>
  <header>
    <h1><img src="@/assets/image/asport_logo.png" alt=""></h1>
  </header>
</template>

<script>
import 'normalize.css'
export default {
  name:'Header',
  created(){
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
  h1{
    width: get_size(354px);
    margin: auto;
    font-size: 0;
    padding:5px 0;
    img{
      width: 100%;
    }
  }
}

</style>