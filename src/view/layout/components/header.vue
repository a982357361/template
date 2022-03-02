<template>
  <div class="head">
    <div>
      <el-tooltip content="文件">
        <icon name="head-file" :w="25" :h="25" class="icon"></icon>
      </el-tooltip>

      <el-tooltip content="编辑">
        <icon name="head-edit" :w="25" :h="25" class="icon"></icon>
      </el-tooltip>

      <el-tooltip content="窗口">
        <icon name="head-window" :w="25" :h="25" class="icon"></icon>
      </el-tooltip>

      <el-tooltip content="工具">
        <icon name="head-tool" :w="25" :h="25" class="icon"></icon>
      </el-tooltip>

      <el-tooltip content="帮助">
        <icon name="head-help" :w="25" :h="25" class="icon"></icon>
      </el-tooltip>
    </div>
    <div class="right">
      <el-tooltip content="退出登录">
        <icon
          @click.native="unLogin"
          name="head-quit"
          :w="25"
          :h="25"
          class="icon"
        ></icon>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    unLogin() {
      console.log(111);
      localStorage.setItem("token", "");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  height: 50px;
  background: #fff;
  box-shadow: rgba(86, 96, 117, 0.15) 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    margin-right: 30px;
  }
  .icon {
    cursor: pointer;
    margin-left: 30px;
    margin-right: 10px;
  }
}
</style>