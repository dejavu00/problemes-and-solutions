// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import 'intro.js/introjs.css'
import _ from 'lodash'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import api from './request/api'
Vue.prototype.$api = api
Vue.prototype.$lodash = _
Vue.config.productionTip = false

// 引用自定义插件
import vpay from './lib/vpay'
Vue.use(vpay);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
