import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import Cookie from "js-cookie";
import "./api/mock";

Vue.use(ElementUI);

//导航守卫
router.beforeEach((to, from, next) => {
  const token = Cookie.get("token");
  if (!token && to.name !== 'login') {
    next({name:'login'})
  }
  else if(token && to.name === 'login'){
    next({name:'home'})
  }
  else {
    next()
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
  created(){
    //vue一创建就去初始化动态路由
    store.commit('addMenu',router)
  }
});
