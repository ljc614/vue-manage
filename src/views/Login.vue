<template>
  <div class="login-container">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="70px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入用户名"
          type="text"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          type="password"
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "@/api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      },
    };
  },
  methods: {
    submit() {
      //token
      // const token = Mock.Random.guid()
      // //token存入cookie
      // Cookie.set('token',token)

      //校验form
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          getMenu(this.form).then(({ data }) => {

            if(data.code === 20000){
              Cookie.set('token',data.data.token)

              this.$store.commit("setMenu",data.data.menu)
              this.$store.commit("addMenu",this.$router)
              this.$router.push('home')
            } else if(data.code !== 20000){
              this.$message.error(data.data.message)
              
            }
          });
        }
      });

      
    },
  },
};
</script>
 
 <style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
  .el-button {
    margin-left: 105px;
    margin-top: 10px;
  }
}
</style>