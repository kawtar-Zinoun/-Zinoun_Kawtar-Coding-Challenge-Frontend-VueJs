import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
