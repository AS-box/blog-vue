import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    images:[]
  },
  
  // getters:{},
  // setter: {

  // },
  mutations: {
    setImages() {
      this.state.images = JSON.parse(window.localStorage.images)
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
      return this.state.images
    }
     
  }
})
export default store;
