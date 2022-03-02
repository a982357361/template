<template>
  <div>
    <el-form class="form" label-width="50px" label-position="left">
      <h3>Sign In</h3>
      <el-form-item label="账户:">
        <el-input placeholder="请输入账户" v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="密码:">
        <el-input
          placeholder="请输入密码"
          show-password
          v-model="formData.password"
        ></el-input
      ></el-form-item>
      <div class="radio">
        <el-checkbox v-model="remember" label="记住密码"></el-checkbox>
        <el-checkbox v-model="auto" label="自动登录"></el-checkbox>
      </div>

      <el-button type="primary" @click="btnLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/http";
export default {
  data() {
    return {
      formData: {
        name: "",
        password: "",
      },
      remember: false,
      auto: false,
    };
  },
  methods: {
    btnLogin() {
      this.login();
    },
    login() {
      login(this.formData)
        .then((res) => {
          localStorage.setItem("token", res.token);

          if (res.code === 1) {
            this.$message.success(res.message);
            this.$router.push("/user");
          } else {
            this.$message.error(res.message);
          }

          console.log("token", localStorage.getItem("token"));
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
.form {
  width: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 2px 4px 0px #d5d5d5;
  .el-button {
    width: 100px;
    margin-top: 30px;
  }
  h3 {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .radio {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>