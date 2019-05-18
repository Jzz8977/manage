<template>
    <el-form :model = "adminForm" :rules = "rules" ref="adminForm" class="container">
        <h3>下厨房后台</h3>
        <el-form-item prop="adminName">
            <el-input v-model="adminForm.adminName" placeholder="请输入管理员账号"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
            <el-input v-model="adminForm.passWord" type="password" placeholder="请输入管理员密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%;" :loading = "isLoading" type="primary" @click="login">登陆</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {
                isLoading:false,
                adminForm:{
                    adminName:"",
                    passWord:""
                },
                rules:{
                    adminName: [
                        { required: true, message: '请输入管理员账号', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入管理员密码', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ]

                }
            }
        },
        methods:{
            login(){
                this.isLoading = true;
                this.$refs.adminForm.validate(valid=>{
                    if(valid){// 实现登陆
                        /*
                        * 1、创建一个actions
                        *      actions当中调用登陆接口，成功以后修改用户的登陆状态
                        * */
                        this.$store.dispatch("login",this);
                    }else{
                        this.isLoading = false;
                        this.$message.error('错了哦，请认真填写');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    width:350px;
    margin:250px auto;
    padding:10px 30px;
    border:1px solid #eaeaea;
    box-shadow:0 0 20px #cc3366;
    h3{
        text-align:center;
    }
}
</style>