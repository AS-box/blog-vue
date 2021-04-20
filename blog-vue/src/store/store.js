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
      await axios
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
    async postImages(state, file) {
      await axios
        .post('http://localhost:3000/images', {
          "name": file.name,
          "date": file.date,
          "id": file.id
        })
        .then(res => {
        console.log(file,res )
      })
    },
    async postAtricle(state, article) {
      await axios
        .post('http://localhost:3000/articles', {
          "title":article.title,
          "date":article.date,
          "tag":article.tag,
          "category":article.category,
          "kvName":article.kvName,
          "text":article.text,
          "special":article.special
        })
        .then(res => {
        console.log(article,res,'lint回避')
      })
    }

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

     
  }
})
export default store;
