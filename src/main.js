import Vue from 'vue'
import App from './App.vue'
import Detail from "./components/Detail";
import BlogList from "./components/BlogList";
import vueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(vueRouter)
const routes = [
  {path: '/', redirect: '/blog'},
  {path: '/detail', component: Detail},
  {path: '/blog', component: BlogList}
]

const router = new vueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
