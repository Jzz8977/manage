<template>
  <el-dialog title="添加广告" :visible="visible" @update:visible="v=>$emit('update:visible',v)">
    <el-form :model="form" ref="myForm">
      <el-form-item prop="advName" label="广告名称" label-width="150px">
        <el-input placeholder="广告名称" v-model="form.advName" style="width:300px;" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="广告类别" label-width="150px">
        <el-radio-group v-model="form.advType">
          <el-radio :label="1">首页</el-radio>
          <el-radio :label="2">市集</el-radio>
          <el-radio :label="3">课堂</el-radio>
          <el-radio :label="4">收藏</el-radio>
          <el-radio :label="5">我的</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="广告图片" label-width="150px">
        <el-upload
          :data="form"
          ref="upload"
          class="upload-demo"
          action="/ele/addAdv"
          name="advPic"
          :auto-upload="false"
          :limit="1"
          :on-success="upSuccess"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible',false)">取 消</el-button>
      <el-button type="primary" @click="addAdv">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "add-adv-type",
  data() {
    return {
      form: {
          advName:"",
          advType:""
      }
    };
  },
  props: ["visible"],
  methods: {
    upSuccess(res) {
      if (res.ok === 1) {
        this.$message({
          message: "恭喜你，添加店铺类别成功！",
          type: "success"
        });
        // 清空表单
        this.$refs.myForm.resetFields();
        // 清空上传的文件
        this.$refs.upload.clearFiles();
        this.$store.dispatch("getAdvList", {
          pageIndex: 1
        });
        this.$emit("update:visible", false);
      } else {
        this.$message.error(res.msg);
      }
      console.log(res);
    },
    addAdv() {
      this.$refs.upload.submit();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>