
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/'
import store from './store'
import './api/mock'

Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});