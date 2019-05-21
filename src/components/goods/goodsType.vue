<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item label="管理员">
                    <el-input  placeholder="请输入要搜索的管理员"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="dialogFormVisible=true" >添加商品</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.goods.goodsTypeList"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="商品类别id"
                    width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别名称"
                    width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsTypeName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别ICONFONT"
                    width="150">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsTypeLogo }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别链接"
                    width="160">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsTypeHref }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!-- <el-button
                            size="mini"
                            type="danger"
                    >删除</el-button> -->
                    <el-button
                            size="mini"
                            type="primary"
                            @click="dialogFormVisible=true"
                    >添加商品</el-button>
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
        name:"goods-type",
        data(){
            return {
                dialogFormVisible:false,
                search:""
            }
        },
        methods:{

        },
        beforeMount(){
           
        },
        mounted(){
             this.$store.dispatch("getGoodsTypeList",{
                pageIndex:1
            })
            console.log(1);
            
        }
    }
</script>

<style lang="scss" scoped>
.toolbar{
    background:#EBEEF5;
}
</style>