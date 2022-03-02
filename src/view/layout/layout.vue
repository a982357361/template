<template>
  <div>
    <el-container>
      <el-header class="affix" style="display: none">
        <HeadBar></HeadBar>
      </el-header>

      <el-container class="container">
        <el-aside width="120px">
          <SliderBar :windowHeight="windowHeight"></SliderBar>
        </el-aside>
        <el-container>
          <el-header>
            <HeadBar></HeadBar>
          </el-header>
          <el-main>
            <AppMain :windowHeight="windowHeight - 90"></AppMain>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { HeadBar, SliderBar, AppMain } from "./components";
export default {
  components: {
    HeadBar,
    SliderBar,
    AppMain,
  },
  data() {
    return {
      windowHeight: window.innerHeight - 1,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowHeight = window.innerHeight - 1;
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.affix {
  position: fixed;
}
.container {
  //margin-top: 60px;
}

.el-header {
  padding: 0px;
  height: 50px;
}
.el-main {
  padding: 10px 25px;
}
</style>