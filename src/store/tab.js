export default{
  state :{
    tabList:[
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ],//面包屑数据
    isCollapse:false, //控制菜单展开还是收起
  },

  mutations:{
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    //更新面包屑数据
    selectMenu(state,val){
      console.log();

      //判断添加的数据是否为首页
      if(val.name!=='home'){
        const index = state.tabList.findIndex(item=> item.name === val.name)

        if(index === -1){
          state.tabList.push(val)
        }
      }
    }
  }
}