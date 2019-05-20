<template>
  <div>
    <div class="toolbar">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="管理员">
          <el-input placeholder="请输入要搜索的管理员"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dialogFormVisible=true">添加广告</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="$store.state.isLoading"
      :data="$store.state.adv.advList"
      :border="true"
      style="width: 100%"
    >
      <el-table-column label="广告id" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row._id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="广告名称" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.advName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="广告类别名称" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.advName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="广告图片" width="150">
        <template slot-scope="scope">
          <img width="50px" :src="$store.state.config.url + scope.row.advPic">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="advDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pageInfo actionsName="getAdvList"></pageInfo>
    <addAdv :visible.sync="dialogFormVisible"></addAdv>
  </div>
</template>

<script>
export default {
  name: "adv-log",
  data() {
    return {
      dialogFormVisible: false
    };
  },
  methods: {
    advDelete(id){
        console.log(id)
        this.$store.dispatch("advDelete",{
            id
        })
    }
  },
  mounted() {
    this.$store.commit("SET_INIT");
    this.$store.dispatch("getAdvList", {
      pageIndex: 1
    });
  }
};
</script>

<style lang="scss" scoped>
</style>