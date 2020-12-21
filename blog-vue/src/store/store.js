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
        .then(res => this.state.images = res)

    },
    addImages(s, file) {
      this.state.images.push(file)
    }
  },
  actions: {
    postImages(state, file) {
      state.commit('addImages',file)
      fetch('http://localhost:3000/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(file)
      })
        .then(res => res.json())
        .then(data => {
        console.log('success:',data)
        }).
        catch(err => {
          console.log('error:',err)
        })
      state.commit('setImages')
    },
    getImages() {
      this.commit('setImages')
    }
     
  }
})
export default store;
