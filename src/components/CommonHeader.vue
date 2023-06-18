<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleMenu" icon="el-icon-menu"  size="mini"></el-button>
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/image/QQ图片20230605191623.jpg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
      console.log(this.$store.state.tab);
    }
  }
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    margin: 0 20px;
    font-size: 14px;
  }
  .r-content .user{
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}
</style>