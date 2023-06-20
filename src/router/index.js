import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import User from "../views/User";
import Main from "@/views/Main";
import Mall from "@/views/Mall";
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import VueRouter from "vue-router";
Vue.use(Router);
//创建路由表
const routes = [
  // 主路由
  {
    path: "/",
    component: Main,
    // 重定向
    redirect:'home',
    // 子路由不带'/'
    children: [
      { path: "home",name:"home", component: Home },
      { path: "user",name:"user", component: User },
      { path: "mall",name:"mall" ,component: Mall },
      { path: "page1",name:"page1", component: PageOne },
      { path: "page2",name:"page2", component: PageTwo },
    ],
  },
];

//创建router实例
const router = new VueRouter({
  routes,
});
export default router;
