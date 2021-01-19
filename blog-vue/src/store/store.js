import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    images: [],
    url: './js/data/',
    articles: [],
  },
  mutations: {
    // setImages() {
    //   fetch('http://localhost:3000/images')
    //   .then( res => res.json() )
    //     .then(res => this.state.images = res)

    // },
    setArticles(data) {
      console.log(data)
    },
    // addImages(s, file) {
    //   this.state.images.push(file)
    // },
    // addArticle(s, article) {
    //   this.state.articles.push(article)
    // }
  },
  actions: {
    // postImages(state, file) {
    //   state.commit('addImages',file)
    //   fetch('http://localhost:3000/images', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(file)
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //     console.log('success:',data)
    //     }).
    //     catch(err => {
    //       console.log('error:',err)
    //     })
    //   state.commit('setImages')
    // },

    async getImages() {
      this.state.images.splice(0,this.state.images.length)
      axios
        .get('http://localhost:3000/images')
          .then(res => {
            res.data.forEach(image => {
              this.state.images.push(image)
            });
          })
    },
    // postAtricle(state, article) {
    //   state.commit('addArticle', article)
    //   fetch('http://localhost:3000/articles', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify(article)
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //   console.log('success:',data)
    //   }).
    //   catch(err => {
    //     console.log('error:',err)
    //   })

    // },
    // async getArticles() {
    //   const res = await axios.get('http://localhost:3000/articles');
    //   res.data.forEach(article => {
    //     this.state.articles.push(article)
    //   });
    // }
    async getArticles() {
      this.state.articles.splice(0,this.state.articles.length)
      await axios
        .get('http://localhost:3000/articles')
          .then(res => {
            res.data.forEach(article => {
              this.state.articles.push(article)
            });
          })

    },
     
  }
})
export default store;
