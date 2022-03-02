<template>
  <div>
    <el-table border :data="tableData" :max-height="`${windowHeight - 180}`">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            border
            :data="props.row.child"
            style="width: 93%; margin: 0 47px"
          >
            <el-table-column label="版本名" prop="name"></el-table-column>
            <el-table-column label="版本号" prop="version"></el-table-column>
            <el-table-column label="状态" prop="status"></el-table-column>
            <el-table-column label="描述" prop="desc"></el-table-column>
            <el-table-column label="继承的版本" prop="extend"></el-table-column>
            <el-table-column
              label="创建时间"
              prop="creatTime"
            ></el-table-column>
            <el-table-column label="操作">
              <template>
                <el-button type="text" size="small">打开</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">发布</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template></el-table-column
            >
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="项目名" prop="name"></el-table-column>
      <el-table-column width="600" label="描述" prop="desc"></el-table-column>
      <el-table-column label="创建时间" prop="creatTime"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">用户</el-button>
          <el-button type="text" size="small">创建版本</el-button>
          <el-button type="text" size="small">删除</el-button>
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
  </div>
</template>

<script>
export default {
  props: {
    windowHeight: Number,
  },
  data() {
    return {
      tableData: [
        {
          name: "测试项目A",
          desc: "test project A descriptiontest project A descriptiontest project A descriptiontest project A descriptiontest project A descriptiontest project A description",
          creatTime: "2021-12-29 08:10:45",
          child: [
            {
              name: "初始版本",
              version: "0.0.0",
              status: "设计中",
              desc: "初始化版本",
              extend: "无",
              creatTime: "2021-12-29 08:10:45",
            },
            {
              name: "第二版本",
              version: "0.0.1",
              status: "设计中",
              desc: "初始化版本",
              extend: "初始版本",
              creatTime: "2021-12-29 08:10:45",
            },
          ],
        },
        {
          name: "测试项目B",
          desc: "test project B description",
          creatTime: "2021-12-29 08:10:45",
        },
        {
          name: "测试项目C",
          desc: "test project C description",
          creatTime: "2021-12-29 08:10:45",
        },
        {
          name: "测试项目A",
          desc: "test project A description",
          creatTime: "2021-12-29 08:10:45",
        },
        {
          name: "测试项目B",
          desc: "test project B description",
          creatTime: "2021-12-29 08:10:45",
        },
      ],
      currentPage: 1,
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>

<style lang="less" scoped>
.pagination {
  position: fixed;
  bottom: 40px;
  right: 50px;
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