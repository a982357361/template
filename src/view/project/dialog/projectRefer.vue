<template>
  <div>
    <el-dialog :visible.sync="visi" :close-on-click-modal="false" width="30%">
      <div slot="title" class="dialog-top">
        <icon name="dialog-title" :w="32" :h="32"></icon>
        <div>项目上传</div>
      </div>
      <div class="dialog-main"></div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visi: false,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.dialog-top {
  display: flex;
  align-items: center;
  color: #9972b5;
  font-size: 18px;
}
.dialog-main {
  .el-button {
    width: 90px;
    background: #9972b5;
    color: #ffffff;
    border-radius: 5px;
    font-size: 13px;
  }
}
</style>