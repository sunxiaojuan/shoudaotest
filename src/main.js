// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/iconfont.css'
import '../config/rem'
import './assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
