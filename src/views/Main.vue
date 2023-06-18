<template>
  <div>
    <el-container>
      <el-aside style="width:auto">
        <CommonAside></CommonAside>
      </el-aside>
      
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from '@/components/CommonHeader.vue';

export default {
  data() {
    return {
      msg: "我是main",
    };
  },
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>

<style lang="less" scoped>
  .el-header{
    padding: 0;
  }

</style>