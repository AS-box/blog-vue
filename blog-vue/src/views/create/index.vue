<template>
  <Item></Item>
</template>
<script>
'use strict';
import Item from '../../components/Item'

export default {
  name:'Create',
  components:{
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
