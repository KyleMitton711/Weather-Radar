import 'reset-css'
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate'
import store from './store'

Vue.config.productionTip = false

Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
