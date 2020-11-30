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
    setStateImages(data) {
      this.state.images.push(data)
    }
  },
  actions: {
    getImages() {
    },
    postImages({ commit, state }, {title,url}) {
      let that = this
      console.log(commit, state,title,url)
      let promise = new Promise((resolve,reject) => {
        this.state.images.push({title:title,url:url})
        resolve('ポスト完了')
        reject('ポストできない')
      })
      promise.then(that.getImages)
     }
  }
})
export default store;
