import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    images: [],
    url: './js/data/',
    articles:[]
  },
  
  // getters:{},
  // setter: {

  // },
  mutations: {
    setImages() {
      fetch('http://localhost:3000/images')
      .then( res => res.json() )
      .then( res => this.state.images = res )
    },
    addImages(s, file) {
      console.log(file)
      this.state.images.push(file)
      console.log(this.state.images)
    }
  },
  actions: {
    postImages(state, file) {
      state.commit('addImages',file)
      window.localStorage.setItem('images', JSON.stringify(this.state.images))
      state.commit('setImages')
    },
    getImages() {
      this.commit('setImages')
    }
     
  }
})
export default store;
