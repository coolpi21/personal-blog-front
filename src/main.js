import Vue from 'vue'
import App from './App.vue'
import {Input, Button, Message} from 'element-ui'
import vueRouter from 'vue-router'
import routes from '../router/router'

Vue.config.productionTip = false
Vue.use(vueRouter)
Vue.use(Input)
Vue.use(Button)
Vue.prototype.$message = Message


const router = new vueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
