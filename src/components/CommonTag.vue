<template>
  <div class="tabs">
    <el-tag
      :key="item.path"
      v-for="item in tags"
      :closable="item.name !== 'home'"
      :type="item.type"
      :effect="$route.name===item.name ? 'dark' :'plain'"
      @close="handleClose(item)"
      @click="changeMenu(item)"
      size="small"
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
  methods:{
    handleClose(tag){
      const t = this.tags
      if(this.$route.name === 'home'){
        //splice参数第二个为一代表只删除一个元素
        t.splice(t.indexOf(tag),1)
      }
      else if (this.$route.name !== tag.name ){
        t.splice(t.indexOf(tag),1)
      }
      else if(this.$route.name === t[t.length-1].name){
        t.splice(t.indexOf(tag),1)
        this.$router.push(t[t.length-1])
      }
      
      else{
        const i = t.indexOf(tag)
        t.splice(t.indexOf(tag),1)
         
        this.$router.push(t[i-1])
      }
    },
    changeMenu(item){

      if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu',item)
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
  .tabs{
    padding: 20px;
    .el-tag{
      margin-right: 15px;
      cursor: pointer;
    }
  }
</style>