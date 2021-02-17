import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

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

     
  },
  plugins: [
    createPersistedState({
      key: "azport",
      storage: window.localStorage,
    }),
  ],
})
export default store;
