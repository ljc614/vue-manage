<template>
  <el-row>
    <el-col :span="8" style="padding-right: 10px">
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

      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="padding-left: 10px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">￥{{ item.value }}</p>
            <p class="dec">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card style="height: 280px">
        <div ref="echarts1" style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div ref="echarts2" style="height: 260px"></div>
        </el-card>

        <el-card style="height: 260px">
          <div ref="echarts3" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// 解构引入getData方法
import { getData } from "@/api/index";

import * as echarts from "echarts";
export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: "1234",
          icon: "star-on",
          color: "#2ec7c9",
        },
        {
          name: "本月支付订单",
          value: "1234",
          icon: "star-on",
          color: "#2ec7c9",
        },
        {
          name: "今日未支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本年支付订单",
          value: "1234",
          icon: "star-on",
          color: "#2ec7c9",
        },
        {
          name: "今年未支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
      ],
      msg: "我是Home",
    };
  },
  mounted() {
    getData().then((res) => {
      const { tableData,userData,videoData } = res.data.data;
      this.tableData = tableData;
      console.log('v',res.data.data);
      // 初始化echarts
      var echarts1 = echarts.init(this.$refs.echarts1);

      const echarts1Option = {};
      //处理数据xAxis(x轴)
      const { orderData } = res.data.data;
      // object.key返回元素的key值
      console.log("order", orderData.data[0]);
      const xAxis = Object.keys(orderData.data[0]);
      const xAxisData = {
        data: xAxis,
      };
      echarts1Option.xAxis = xAxisData;
      echarts1Option.yAxis = {};
      //legend图例
      echarts1Option.legend = xAxisData;
      // 图表数据
      echarts1Option.series = [];
      xAxis.forEach((key) => {
        echarts1Option.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });

      echarts1.setOption(echarts1Option);

      //柱状图
      const echarts2 = echarts.init(this.$refs.echarts2);

      const echarts2Option = {
        legend: {
          //图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        gird: {
          left: "20%",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: userData.map(item=>item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ab3c6", "#b6a2de"],
        series:[
          {
            name:'新增用户',
            data:userData.map(item=>item.new),
            type:'bar'
          },
          {
            name:'活跃用户',
            data:userData.map(item=>item.active),
            type:'bar'
          }
        ],
      };
      echarts2.setOption(echarts2Option)


      //饼状图
      const echarts3 = echarts.init(this.$refs.echarts3)
      const echarts3Option = {
        tooltip:{
          trigger:"item"
        },
        color:[
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series:[
          {
            data:videoData,
            type:"pie"
          }
        ],
      }
      echarts3.setOption(echarts3Option)
    });
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
.num {
  //card一行显示
  display: flex;
  //设置长度不压缩
  flex-wrap: wrap;
  // 元素贴边
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    color: #fff;
    line-height: 80px;
    text-align: center;
  }
  .detail {
    display: flex;
    // 改变主轴显示方式 column表示主轴为垂直 从上到下排列元素
    flex-direction: column;
    justify-content: center;
    .price {
      margin-left: 15px;
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
    }
    .dec {
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
</style>