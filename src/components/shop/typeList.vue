<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="search"  placeholder="请输入要搜索的店铺类别"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getShopTypeList',{pageIndex:1,search})" >
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="dialogFormVisible=true">添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.shop.shopTypeList"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="店铺类别id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="店铺类别名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.shopTypeName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="店铺的图片">
                <template slot-scope="scope">
                    <img :src="$store.state.config.baseUrl+scope.row.shopTypePic" alt="">
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
        </el-table>

        <pageInfo actionsName="getShopTypeList" :params="{search}"></pageInfo>
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





        <addShopType :visible.sync="dialogFormVisible" ></addShopType>
    </div>
</template>

<script>
    export default {
        name: "type-list",
        data(){
            return {
                dialogFormVisible:false,
                search:""
            }
        },
        methods:{

        },
        mounted(){
            this.$store.dispatch("getShopTypeList",{
                pageIndex:1
            })
        }
    }
</script>

<style scoped>

</style>