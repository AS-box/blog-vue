import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    loading: false,
    images:[]
  },
  
  // getters:{},
  // setter: {

  // },
  mutations: {
    setStateImage(state,file) {
      state.images.push(file)
    },
    initState() {
      this.state.images = []
      this.state.loading = false
    }
  },
  actions: {
    postImages(s, file) {
      this.commit('setStateImage', file)
      window.localStorage.setItem('images',JSON.stringify(this.state.images))
     }
  }
})
export default store;
