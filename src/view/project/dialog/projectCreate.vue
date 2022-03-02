<template>
  <div>
    <el-dialog :visible.sync="visi" :close-on-click-modal="false" width="30%">
      <div slot="title" class="dialog-top">
        <icon name="dialog-title" :w="32" :h="32"></icon>
        <div>新建项目</div>
      </div>
      <div class="dialog-main">
        <div>
          <el-radio v-model="radio" label="1">直接创建</el-radio>
        </div>
        <div>
          <el-radio v-model="radio" label="2">从本地创建</el-radio>
        </div>

        <el-button size="small" @click="btnEnter">确定</el-button>
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
    };
  },
  methods: {
    btnEnter() {
      this.$emit("directProject");
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
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  margin-left: 40%;
  .el-radio {
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 20px;
  }
  .el-button {
    width: 90px;
    background: #9972b5;
    color: #ffffff;
    border-radius: 5px;
    font-size: 13px;
  }
}
</style>