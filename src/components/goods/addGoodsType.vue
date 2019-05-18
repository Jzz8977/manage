<template>
    <!--<el-dialog title="添加店铺类别" :visible.sync="visible">-->
    <el-dialog title="添加商品类别" :visible="visible"  @update:visible="v=>$emit('update:visible',v)" width="500px">
        <el-form :model="form" ref="myForm">
            <el-form-item prop="goodsTypeName" label="商品类别名称" label-width="200px">
                <el-input v-model="form.goodsTypeName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺类别图片(编码)" label-width="200px">
               <el-input width="200" v-model="form.goodsTypeLogo" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="链接地址" label-width="200px">
               <el-input width="200" v-model="form.goodsTypeHref" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible',false)">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        data(){
            return {
                form:{
                    goodsTypeName:"",
                    goodsTypeLogo:"",// 店铺类别名称
                    goodsTypeHref:""
                }
            }
        },
        props:["visible"],
        name: "add-goods-type",
        methods:{
            // 上传图片成功
            upSuccess(res){
                if(res.ok === 1){
                    
                }else{
                    this.$message.error(res.msg);
                }
                console.log(res);
            },
            onSubmit(){
                console.log(this.form.goodsName,111,this.form.goodsTypeLogo)
                // this.$refs.myForm.model;
                // console.log(this.$refs.myForm.model)
                this.$axios.post("addGoodsType",this.form).then(data=>{
                    console.log(data);
                    if(data.ok===1){
                        this.$message({
                        message: '恭喜你，添加店铺类别成功！',
                            type: 'success'
                        });
                        // 清空表单
                        this.$refs.myForm.resetFields();
                        
                        this.$emit('update:visible',false);
                    }else{
                        this.$message.error("添加失败")
                    }
                })

            }
        }
    }
</script>

<style scoped>

</style>