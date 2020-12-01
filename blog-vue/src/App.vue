
<template>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header></header>
  <div id="app">
    <create-article></create-article>
  </div>
  <footer></footer>
</body>
</html>
</template>

<script>
import CreateArticle from './components/CreateArticle.vue';

export default {
  name: 'App',
  components: {
    CreateArticle
  },
  methods:{
    // getImages(){
    //   this.$store.dispatch('getImages')
    // }
  },
  // created(){
  //   this.getImages()
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
