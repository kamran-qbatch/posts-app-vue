import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {
      allPosts: [],
      post: {},
    },
  },
  getters: {
    allPosts: state => state.posts.allPosts,
    post: state => state.posts.post,
  },
  mutations: {
    setAllPosts(state, posts) {
      state.posts.allPosts = posts;
    },
    setPost(state, post) {
      state.posts.post = post;
    },
  },
  actions: {
    async getAllPosts({ commit }) {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
      commit('setAllPosts', await posts.json());
    },
    async getPost({ commit }, postId) {
      const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      commit('setPost', await post.json());
    },
  },
  modules: {
  }
})
