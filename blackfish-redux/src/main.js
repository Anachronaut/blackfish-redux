import Vue from 'vue'
import App from './App.vue'
//Import VueRouter library, and the routers for this app
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import top10APIService from '@/services/bfService'

//Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Add API service to Vue prototype
Vue.prototype.$bfService = top10APIService
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
