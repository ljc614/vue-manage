<template>
  <el-menu
    ref="menu"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ !isCollapse ? "通用后台管理" : "后台" }}</h3>
    <!-- 渲染一级菜单 -->
    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.path"
      @click="changeMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 渲染有二级菜单的一级菜单 -->
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <!-- 渲染二级菜单 -->
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item
          @click="changeMenu(subItem)"
          :index="subItem.path"
          :default-active="subItem.path"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // 是否折叠菜单
      // isCollapse: false,
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeMenu(item) {
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    //vuex获取数据
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  watch: {
    "$route.path"(newVal, oldVal) {
      if (newVal === "/home") {
        console.log(`route.path变化了:${oldVal} => ${newVal}`);
        this.$refs.menu.activeIndex = "/";
      } else {
        console.log(`route.path变化了:${oldVal} => ${newVal}`);
        this.$refs.menu.activeIndex = `${newVal}`;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 48px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  border-right: none;
}
</style>