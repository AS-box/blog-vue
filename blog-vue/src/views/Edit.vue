<template>
  <div>
    <form-Article></form-Article>
  </div>
</template>
<script>
import FormArticle from '../components/FormArticle'

export default {
  name:'Edit',
  components:{
    FormArticle
  },
  methods:{
    showText(){
      console.log(this.article)
      // this.$refs.confirm_text.insertAdjacentHTML('beforeend', html);
    },
    backToForm(){
      this.isConfirm = false
    },
    postArticle(){
      alert('投稿完了しました')
    }
  }
}
</script>