<template>
  <div>
    <div class="card-top">
      <el-button class="button-style" @click="btnCreate">
        {{ buttonName }}
      </el-button>
      <el-input
        size="small"
        :placeholder="searchDefault"
        v-model="searchValue"
        :aria-placeholder="searchDefault"
        @keyup.enter.native="emitSearch"
      >
        <i
          @click="emitSearch"
          slot="suffix"
          class="el-input__icon el-icon-search search-icon"
        ></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  props: {
    buttonName: {
      type: [String],
      default: "创建",
    },
    searchDefault: {
      type: [String],
      default: "请输入内容",
    },
  },
  mounted() {},
  methods: {
    btnCreate() {
      this.$emit("btnCreate");
    },
    emitSearch() {
      this.$emit("emitSearch", this.searchValue);
    },
  },
};
</script>

<style lang="less" scoped>
.card-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 10px;
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
.el-input {
  width: 300px;
}
.search-icon {
  cursor: pointer;
}
</style>