import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    images: [],
    url: './js/data/',
    articles: [],
    categoryArticles:[],
    category:'All'
  },
  getters: {
    categoryArticles: (state) => {
      return state.articles.filter(article => article.category === state.category);

    }
  },
  mutations: {
    setCategory(state, category) {
      state.category = category;
    },
    setCategoryArticles() {
      if (this.state.category !== 'All' && this.state.category) {
        this.state.categoryArticles = this.getters.categoryArticles
      } else {
        this.state.categoryArticles = this.state.articles
      }
    },
    async getArticles() {
      this.state.articles.splice(0)
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
    async deleteArticle(state,id) {
      console.log(id)
      await axios
        .delete('http://localhost:3000/articles/'+ id)
          .then(res => {
            console.log('結果'+res)
          })
    },
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
    },
    async putAtricle(state, article) {
      await axios
        .put('http://localhost:3000/articles/' + article.id, {
          "title":article.title,
          "date":article.date,
          "tag":article.tag,
          "category":article.category,
          "kvName":article.kvName,
          "text":article.text,
          "special":article.special
        })
        .then(res => {
        console.log(res)
      })
    }

     
  }
})
export default store;
