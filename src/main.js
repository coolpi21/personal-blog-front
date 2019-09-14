import Vue from 'vue'
import App from './App.vue'
import {Input, Button, Message} from 'element-ui'
import Detail from "./components/Detail";
import BlogList from "./components/BlogList";
import admin from './components/admin'
import edit from './components/edit'
import vueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(vueRouter)
Vue.use(Input)
Vue.use(Button)
Vue.prototype.$message = Message
const routes = [
  {path: '/', redirect: '/blog'},
  {path: '/detail', component: Detail},
  {path: '/blog', component: BlogList},
  {path: '/login', component: admin},
  {path: '/edit', component: edit}
]

const router = new vueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
