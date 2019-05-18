<template>
    <div>
        <div class="toolbar">
            商品类别
        </div>
        <!-- <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.goods.goodsTypeList"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="商品类别id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsTypeName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别ICONFONT">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsTypeLogo }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别链接">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsTypeHref }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                    >编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                    >删除</el-button>
                    <el-button
                            size="mini"
                            type="primary"
                    >添加店铺</el-button>
                </template>
            </el-table-column>
        </el-table> -->

        <!-- <pageInfo actionsName="getGoodsTypeList" ></pageInfo> -->
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
            this.$store.dispatch("getGoodsTypeList",{
                pageIndex:1
            })
        },
        mounted(){
            this.$store.commit("SET_INIT");
            console.log(1)
            
        }
    }
</script>

<style lang="scss" scoped>

</style>