<template>
<div id="app">
  <Header></Header>
  <Item></Item>
</div>
</template>
<script>
'use strict';
import Header from '../components/Header'
import Item from '../components/Item'

export default {
  name:'Create',
  components:{
    Header,
    Item
  },
  data(){
    return{
    }
  },
  beforeCreate(){
  },
  computed:{

  },
  methods:{

    // postArticle(){
    //   return new Promise((resolve)=>{
    //     this.load = true
    //     this.$store.dispatch('postAtricle',this.article)
    //     resolve()
    //   }).then(() =>{
    //     this.load = false
    //     this.$router.push({path:'formComplete', name:'FormComplete'})
    //   })
    // }
    
  }
}
</script>
