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
                    <el-button type="primary" @click="dialogFormVisible=true" >添加商品类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.admin.adminLog"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="管理员日志id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理员账号">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.adminName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理员登陆时间">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.loginTime | date }}</span>
                </template>
            </el-table-column>
            <!--<el-table-column-->
            <!--label="姓名"-->
            <!--width="180">-->
            <!--<template slot-scope="scope">-->
            <!--<el-popover trigger="hover" placement="top">-->
            <!--<p>姓名: {{ scope.row.name }}</p>-->
            <!--<p>住址: {{ scope.row.address }}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
            <!--<el-tag size="medium">{{ scope.row.name }}</el-tag>-->
            <!--</div>-->
            <!--</el-popover>-->
            <!--</template>-->
            <!--</el-table-column>-->
            
        </el-table>

        <pageInfo actionsName="getAdminLog"></pageInfo>
        <!--<div class="toolbar">-->
            <!--<el-pagination-->
                    <!--background-->
                    <!--layout="prev, pager, next"-->
                    <!--@current-change="pageI=>$store.dispatch('getAdminLog',pageI)"-->
                    <!--:current-page="$store.state.pageInfo.pageIndex"-->
                    <!--:page-count="$store.state.pageInfo.pageSum"-->
            <!--&gt;-->
            <!--</el-pagination>-->
        <!--</div>-->
        <addGoodsType :visible.sync="dialogFormVisible"></addGoodsType>
    </div>
</template>

<script>
    import addShopType from "@/components/shop/addShopType"
    export default {
        name: "log",
        data(){
          return {
              dialogFormVisible:false,
          }
        },
        components:{
            addShopType
        },
        // methods:{
        //     currentChange(pageI){
        //         this.$store.dispatch("getAdminLog",pageI);
        //     }
        // },
        mounted(){
            // vuex
            this.$store.commit("SET_INIT");
            this.$store.dispatch("getAdminLog",1);
        }
    }
</script>

<style scoped>

</style>