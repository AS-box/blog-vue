<template>
  <div id="app">
    <create-article></create-article>
  </div>
</template>

<script>
import CreateArticle from './components/CreateArticle.vue'

export default {
  name: 'App',
  components: {
    CreateArticle
  }
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
