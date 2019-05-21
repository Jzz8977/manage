<template>
  <div>
    <el-table
      v-loading="$store.state.isLoading"
      :data="$store.state.goods.goodsList"
      :border="true"
      style="width: 100%"
    >
      <el-table-column label="商品id" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row._id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品Logo" width="150">
        <template slot-scope="scope">
          <img width="100px"  :src="$store.state.config.url+ scope.row.goodsLogo" alt="">
        </template>
      </el-table-column>
      <el-table-column label="商品类别ID" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ $store.state.goods.goodsTypeList.find(v=>v._id === scope.row.goodsType).goodsTypeName  }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品新价格" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsNewPrice }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商品旧价格" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsOldPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品介绍" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsIntroduction }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品分区" width="70">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ moduleArr[scope.row.module/1] }}</span>
        </template>
      </el-table-column>
      <!-- 
        shopName: "",
        shopShowNum: "", //商品数量
        shopActivities: "", //活动公告
      shopNotices: "" //公告-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="dialogFormVisible=true">添加商品</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--<div class="toolbar">-->
    <!--<el-pagination-->
    <!--background-->
    <!--layout="prev, pager, next"-->
    <!--@current-change="pageI=>$store.dispatch('getShopTypeList',pageI)"-->
    <!--:current-page="$store.state.pageInfo.pageIndex"-->
    <!--:page-count="$store.state.pageInfo.pageSum"-->
    <!--&gt;-->
    <!--</el-pagination>-->
    <!--</div>-->
    <addGoods :visible.sync="dialogFormVisible"></addGoods>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      dialogFormVisible: false,
      search: "",
      moduleArr:["无","尝鲜","上新","经典"]
    };
  },
  created() {
    this.$store.dispatch("getGoodsList", {
      pageIndex: 1
    });
  }
};
</script>

<style lang="scss" scoped>
</style>