<template>
  <div>
    <el-dialog
      :visible.sync="visi"
      :close-on-click-modal="false"
      width="550px"
      style="margin-top: -8vh"
    >
      <div slot="title" class="dialog-top">
        <icon name="dialog-title" :w="32" :h="32"></icon>
        <div>创建用户</div>
      </div>
      <div class="dialog-main">
        <el-form ref="formRef" :model="formData" :rules="rules">
          <el-form-item label="用户名:" prop="name">
            <el-input size="small" v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input size="small" v-model="formData.password"></el-input>
          </el-form-item>

          <el-form-item label="描述:">
            <el-input
              size="small"
              type="textarea"
              rows="5"
              resize="none"
              v-model="formData.desc"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <div class="btnGroup">
          <el-button size="small" @click="btnCreate">创建</el-button>
          <el-button size="small" @click="btnCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addUser } from "@/api/http";
export default {
  data() {
    return {
      visi: false,
      radio: "1",
      formData: {
        name: "",
        password: "",
        desc: "",
      },

      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    btnCancel() {
      this.visi = false;
    },
    clearData() {
      for (let val in this.formData) {
        this.formData[val] = "";
      }
    },
    show() {
      this.clearData();
      this.visi = true;
    },
    btnCreate() {
      this.formVali("formRef", this.addUser);
    },
    addUser() {
      addUser(this.formData)
        .then((res) => {
          if (res.code !== 1) {
            this.$message.error(res.message);
            return;
          }
          this.$message({
            type: "success",
            message: "创建成功!",
          });
          this.visi = false;
          this.$emit("getList");
        })
        .catch(() => {});
    },

    formVali(formRef, fun) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          fun();
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.dialog-top {
  display: flex;
  align-items: center;
  color: #9972b5;
  //   font-weight: bold;
  font-size: 18px;
}
.dialog-main {
  width: 90%;
  margin: 0 auto;
  .el-button {
    width: 90px;
    background: #9972b5;
    color: #ffffff;
    border-radius: 5px;
    font-size: 13px;
  }
  .btnGroup {
    width: 70%;
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: space-around;
  }
}
/deep/ .el-select {
  width: 100%;
}

/deep/ .el-form-item {
  margin-bottom: 20px;
}
/deep/ .el-dialog__body {
  padding-top: 10px;
}
/deep/.el-form-item__label {
  line-height: 30px;
}
</style>