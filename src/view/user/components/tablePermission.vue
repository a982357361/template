<template>
  <div>
    <el-table border :data="tableData" :max-height="`${windowHeight - 290}`">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="权限名" prop="name"></el-table-column>
      <el-table-column label="描述" prop="password"></el-table-column>
      <el-table-column label="资源类别" prop="desc"></el-table-column>
      <el-table-column label="资源名称" prop="creatTime"></el-table-column>
      <el-table-column label="授权" prop="creatTime"></el-table-column>
      <el-table-column label="是否继承" prop="creatTime"></el-table-column>
      <el-table-column label="创建时间" prop="creatTime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editRow(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">角色</el-button>
          <el-button @click="deleteRow(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="100"
      class="pagination"
    >
    </el-pagination>
    <userEdit ref="userEdit" @getList="getList" />
  </div>
</template>

<script>
import { getUserList, deleteUser } from "@/api/http";
import userEdit from "../dialog/userEdit.vue";
export default {
  props: {
    windowHeight: Number,
  },
  components: {
    userEdit,
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
    };
  },
  mounted() {
    //this.getList();
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},

    getList() {
      getUserList()
        .then((res) => {
          console.log(res);
          this.tableData = res;
        })
        .catch(() => {});
    },

    deleteRow(row) {
      deleteUser({ name: row.name })
        .then(() => {
          this.$confirm("确认删除该用户", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
        })
        .catch(() => {});
    },
    editRow(row) {
      this.$refs.userEdit.show(row);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  position: fixed;
  bottom: 40px;
  right: 50px;
  margin-top: 20px;
  float: right;
}

/deep/.el-table th > .cell {
  text-align: center;
}

/deep/.el-table .cell {
  text-align: center;
}
/deep/ .el-button--mini,
.el-button--small {
  font-size: 13px;
}
</style>