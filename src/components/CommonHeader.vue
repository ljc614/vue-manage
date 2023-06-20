<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" 
        :to="{ path: item.path }">{{item.label}}
        </el-breadcrumb-item>

      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            class="user"
            src="../assets/image/QQ图片20230605191623.jpg"
            alt=""
          />
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
//辅助函数`mapState`
import {mapState} from 'vuex'
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
      console.log(this.$store.state.tab);
    },
  },
  computed:{
    //tags:别名 后面跟函数 再用拓展运算符...进行解构
    // 这样就拥有了state中的tabList 别名tags
    ...mapState({
      tags: state => state.tab.tabList
    })
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
  .r-content .user {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .l-content{
    button{
      margin-right: 20px;
    }
    display: flex; 
    align-items: center;
    /deep/ .el-breadcrumb__item{
      .el-breadcrumb__inner{
        font-weight: normal ;
        color:#666;
      }
      &:last-child{
        .el-breadcrumb__inner{
          color: #fff;
        }
      }
    }
  }
}
</style>