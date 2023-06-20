<template>
  <div class="tabs">
    <el-tag
      :key="item.path"
      v-for="item in tags"
      :closable="item.name !== 'home'"
      :type="item.type"
      :effect="$route.name===item.name ? 'dark' :'plain'"
    >
      >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'CommonTag',
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      tags: state=> state.tab.tabList
    })
  }
};
</script>

<style lang="less" scoped>
</style>