<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :style="`height:${windowHeight}px`"
    >
      <div class="title">模板</div>
      <el-menu-item
        v-for="(item, index) in menuGroup"
        :key="item.path"
        :index="item.path + index"
        class="combin"
        @click="menuClick(item.path)"
      >
        <icon :name="item.icon" :w="30" :h="30"></icon>
        <div>{{ item.name }}</div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    windowHeight: Number,
  },
  data() {
    return {
      menuGroup: [
        { name: "欢迎", icon: "menu-hi", path: "welcome" },
        { name: "用户管理", icon: "menu-user", path: "user" },
        { name: "项目管理", icon: "menu-project", path: "project" },
        { name: "模型设计", icon: "menu-design", path: "design" },
        { name: "其他", icon: "menu-other", path: "other" },
      ],
    };
  },
  methods: {
    menuClick(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  .title {
    color: #ffffff;
    font-size: 17px;
    line-height: 50px;
    font-weight: bold;
    background: #9972b5;
    margin-bottom: 10px;
    text-align: center;
  }
  .el-menu-item {
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: center;
    align-items: center;
  }
}

.el-menu-item {
  line-height: 30px;
}
</style>