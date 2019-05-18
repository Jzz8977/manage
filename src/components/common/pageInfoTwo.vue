<template>
    <div class="toolbar">
    <el-pagination
      background
      @current-change="currentChange"
      :current-page="pageIndex"
      layout="prev, pager, next"
      :page-count="pageSum"
    ></el-pagination>
  </div>
</template>

<script>
    export default {
        name:"page-info-two",
        props:['actions','params','pageIndex','pageSum'],
        methods:{
          currentChange(pageI){
            this.$bus.$emit("getShopList",pageI)
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>