import Cookie from "js-cookie";

export default {
  state: {
    tabList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ], //面包屑数据
    isCollapse: false, //控制菜单展开还是收起
    menu: [],
  },

  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //更新面包屑数据
    selectMenu(state, val) {
      //判断添加的数据是否为首页
      if (val.name !== "home") {
        const index = state.tabList.findIndex((item) => item.name === val.name);

        if (index === -1) {
          state.tabList.push(val);
        }
      }
    },
    clearLogin(state){
      state.tabList = [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
      ]
      state.menu = []
      console.log('qingchule');
    },
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    //动态路由注册
    addMenu(state, router) {
      // 判断缓存是否有数据
      if (!Cookie.get("menu")) return;
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((child) => {
            return child;
          });
          menuArray.push(...item.children);
        } else {
          menuArray.push(item);
        }
      });
      console.log(menuArray, "menuArr");
      // 路由的动态添加
      menuArray.forEach((item) => {
        // addRoute添加路由值为主路由的name
        console.log(item.path);
        router.addRoute("Main", {
          path: item.name,
          name: item.name,
          label: item.label,
          icon: item.icon,
          url: item.url,
          component: () => import(`../views/${item.url}`)
        });
      });
    },
  },
};
