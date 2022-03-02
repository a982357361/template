<template>
  <div>
    <el-card class="card-container">
      <div class="title">
        <icon name="menu-user" :w="32" :h="32" class="icon"></icon>用户管理
      </div>

      <el-tabs>
        <el-tab-pane label="用户">
          <Search
            buttonName="创建用户"
            searchDefault="输入用户名搜索"
            @btnCreate="createUser"
            @emitSearch="(value) => emitSearch(value, 'user')"
          />
          <tableUser
            ref="tableUser"
            @editUser="editUser"
            :windowHeight="windowHeight"
          />
        </el-tab-pane>

        <el-tab-pane label="角色">
          <Search
            buttonName="创建角色"
            searchDefault="输入角色名搜索"
            @btnCreate="createUser"
            @emitSearch="(value) => emitSearch(value, 'role')"
          />
          <!-- <tableUser
            ref="tableRole"
            @editUser="editUser"
            :windowHeight="windowHeight"
          /> -->
        </el-tab-pane>
        <el-tab-pane label="权限">
          <Search
            buttonName="创建权限"
            searchDefault="输入权限名搜索"
            @btnCreate="createUser"
            @emitSearch="(value) => emitSearch(value, 'premission')"
          />
          <!-- <tableUser
            ref="tablePremission"
            @editUser="editUser"
            :windowHeight="windowHeight"
          /> -->
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <userCreate ref="userCreate" @getList="getList" />
  </div>
</template>

<script>
import tableUser from "./components/tableUser";
import Search from "@/components/Search.vue";
import userCreate from "./dialog/userCreate.vue";

export default {
  props: {
    windowHeight: Number,
  },
  components: {
    tableUser,
    Search,
    userCreate,
  },

  methods: {
    //创建用户
    createUser() {
      this.$refs.userCreate.show();
    },
    //查询
    emitSearch(value, type) {
      console.log("参数", value, type);
    },
    //刷新用户列表
    getList() {
      this.$refs.tableUser.getList();
    },
    //编辑用户
    editUser(row) {
      this.$refs.userEdit.show(row);
    },
  },
};
</script>

<style lang="less" scoped>
.card-container {
  height: 100%;
  .title {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 10px;
    }
  }
}
/deep/ .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 18px;
}
/deep/ .el-tabs__active-bar {
  width: 70px !important;
  margin-left: -17px;
  background-color: #2269f4;
}
/deep/ .el-tabs__item:hover {
  color: #27323f;
  cursor: pointer;
}
/deep/ .el-tabs__item.is-active {
  color: #27323f;
  cursor: pointer;
}
/deep/ .el-tabs__item {
  color: #0000008c;
  font-weight: 600;
  font-size: 17px;
}
</style>