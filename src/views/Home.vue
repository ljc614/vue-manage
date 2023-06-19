<template>
  <el-row>
    <el-col :span="8">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/image/QQ图片20230605191623.jpg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2023-6-1</span></p>
          <p>上次登录地点:<span>哈尔滨</span></p>
        </div>
      </el-card>

      <el-card style="margin-top:20px; height:460px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16"> 
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="price">￥{{item.value}}</p>
            <p class="dec">{{item.name}}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tableLabel:{
        name:'课程',
        todayBuy:'今日购买',
        monthBuy:'本月购买',
        totalBuy:'总购买'
      },
      countData:[
        {
          name:'今日支付订单',
          value:'1234',
          icon:'success',
          color:'#2ec7c9'
        },
        {
          name:'今日收藏订单',
          value:'1234',
          icon:'star-on',
          color:'#2ec7c9'
        },
        {
          name:'本月支付订单',
          value:'1234',
          icon:'star-on',
          color:'#2ec7c9'
        },
        {
          name:'今日未支付订单',
          value:'1234',
          icon:'success',
          color:'#2ec7c9'
        },
        {
          name:'本月支付订单',
          value:'1234',
          icon:'star-on',
          color:'#2ec7c9'
        },
        {
          name:'今日未支付订单',
          value:'1234',
          icon:'success',
          color:'#2ec7c9'
        },
      ],
      msg: "我是Home",
    };
  },
};
</script>
<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  //内容垂直居中
  align-items: center;

  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
}
.login-info {
  p {
    font-size: 14px;
    line-height: 28px;
    color: #999;
    span {
      padding-left: 60px;
    }
  }
}
.num{
  //card一行显示
  display: flex;
  //设置长度不压缩
  flex-wrap: wrap;
  // 元素贴边
  justify-content: space-between;
  .icon{
    width: 80px;
    height: 80px;
    font-size: 30px;
    color: #fff ;
    line-height: 80px;
    text-align: center;

  }
  .detail{
    display: flex;
    // 改变主轴显示方式 column表示主轴为垂直 从上到下排列元素
    flex-direction: column;
    justify-content: center;
    .price{
      margin-left: 15px;
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
    }
    .dec{
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
}
</style>