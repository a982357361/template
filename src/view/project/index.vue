<template>
  <div>
    <el-card class="card-container">
      <div class="card-top">
        <el-button class="button-style" @click="btnCreateProject">
          新建项目
        </el-button>
        <el-input
          size="small"
          placeholder="输入项目名搜索"
          suffix-icon="el-icon-search"
          v-model="searchValue"
        >
        </el-input>
      </div>

      <projectTable :windowHeight="windowHeight"></projectTable>
    </el-card>
    <projectCreate ref="refProjectCreate" @directProject="directProject" />
    <projectDirect ref="refProjectDirect" />
  </div>
</template>

<script>
import projectCreate from "./dialog/projectCreate.vue";
import projectDirect from "./dialog/projectDirect.vue";
import projectTable from "./components/table.vue";
export default {
  components: {
    projectCreate,
    projectTable,
    projectDirect,
  },
  props: {
    windowHeight: Number,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    btnCreateProject() {
      this.$refs.refProjectCreate.visi = true;
    },
    directProject() {
      this.$refs.refProjectDirect.visi = true;
      this.$refs.refProjectCreate.visi = false;
    },
  },
};
</script>

<style lang="less" scoped>
.card-container {
  height: 100%;
  .card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .button-style {
    background-color: #0077d3;
    border-color: #4857d0;
    margin-right: 5px;
    color: #fff;
    border: 1px solid transparent;
    font-size: 14px;
    padding: 10px 20px;
  }
}

.el-input {
  width: 300px;
}
</style>