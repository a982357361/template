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
        <div>创建项目</div>
      </div>
      <div class="dialog-main">
        <el-form :model="formData" :rules="rules">
          <el-form-item label="项目名:" prop="name">
            <el-input size="small" v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="项目类别:" prop="type">
            <el-select size="small" v-model="formData.type">
              <el-option
                v-for="item in projectType"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
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
          <el-form-item label="依赖:" prop="depend">
            <el-select size="small" v-model="formData.depend">
              <el-option
                v-for="item in projectDepend"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="btnGroup">
          <el-button size="small">创建</el-button>
          <el-button size="small" @click="btnCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visi: false,
      radio: "1",
      formData: {
        name: "",
        type: "",
        desc: "",
        depend: "",
      },
      projectType: [
        {
          name: "工程项目",
          value: "1",
        },
        { name: "模型库项目", value: "2" },
      ],
      projectDepend: [
        {
          name: "模型库项目1",
          value: "1",
        },
        { name: "模型库项目2", value: "2" },
      ],
      rules: {
        name: [{ required: true, message: "请输入项目名", trigger: "blur" }],
        type: [{ required: true, message: "请选择项目类别", trigger: "blur" }],
        depend: [{ required: true, message: "请选择依赖", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.formData.type = this.projectType[0].value;
    this.formData.depend = this.projectDepend[0].value;
  },
  methods: {
    btnCancel() {
      this.visi = false;
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