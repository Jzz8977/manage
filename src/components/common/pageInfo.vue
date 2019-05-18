<template>
  <div class="toolbar">
    <el-pagination
      background
      @current-change="currentChange"
      :current-page="$store.state.pageInfo.pageIndex"
      layout="prev, pager, next"
      :page-count="$store.state.pageInfo.pageSum"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "page-info",
  props: ["actionsName", "params"],
  methods:{
    currentChange(pageI){
      //修改了默认pageIndex值，会报错
      this.$store.dispatch(this.actionsName,{
        ...this.params||{},
        ...{
          pageIndex:pageI
        }
      }) 
    }
  }
};
</script>

<style lang="scss" scoped>
</style>