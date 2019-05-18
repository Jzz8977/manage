<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input  placeholder="请输入要搜索的店铺"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">添加店铺</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>

</style>