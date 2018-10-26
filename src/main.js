// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Promise from "promise-polyfill"


if(!window.Promise){
  window.Promise = Promise;
}

const FastClick = require('fastclick')
FastClick.attach(document.body)

import remjs from "./common/js/rem.js"
import api from "@/common/js/api.js"
import "./common/css/reset.css"
remjs()

Vue.config.productionTip = false;
Vue.prototype.api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
