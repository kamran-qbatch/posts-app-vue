import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
    posts: [
      {id: 0, title: 'sds', description: 'sddsada'},
      {id: 1, title: 'sds', description: 'sddsada'},
    ],
  },
  render: h => h(App)
}).$mount('#app')
