<template>
  <el-dialog title="添加商品" :visible="visible" @update:visible="v=>$emit('update:visible',v)">
    <el-form :model="form" ref="myForm">
      <el-form-item prop="goodsName" label="商品名称" label-width="150px">
        <el-input placeholder="商品名称" v-model="form.goodsName" style="width:300px;" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="goodsType" label="商品类别" label-width="150px">
        <el-select v-model="form.goodsType" placeholder="请选择">
          <el-option
            v-for="item in $store.state.goods.goodsTypeList"
            :key="item._id"
            :label="item.goodsTypeName"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" label-width="150px">
        <el-input
          placeholder="新价格"
          v-model="form.goodsNewPrice"
          style="width:100px;"
          autocomplete="off"
        ></el-input>
        <el-input
          placeholder="旧价格"
          v-model="form.goodsOldPrice"
          style="width:100px;margin:0 30px"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="goodsIntroduction" label="商品介绍" label-width="150px">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.goodsIntroduction"
          maxlength="100"
          show-word-limit
          style="width:300px"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品反馈" label-width="150px">
        <el-input
          placeholder="商品评分"
          v-model="form.goodsScore"
          style="width:100px;margin:0 10px"
          autocomplete="off"
        ></el-input>
        <el-input
          placeholder="商品点赞数"
          v-model="form.goodsSupportNum"
          style="width:100px;margin:0 10px"
          autocomplete="off"
        ></el-input>
        <el-input
          placeholder="商品卖出数量"
          v-model="form.goodsSold"
          style="width:100px;margin:0 10px"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="商品分区" label-width="150px">
        <el-radio-group v-model="form.module">
          <el-radio :label="0">无</el-radio>
          <el-radio :label="1">尝鲜</el-radio>
          <el-radio :label="2">上新</el-radio>
          <el-radio :label="3">经典</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商品Logo图片" label-width="150px">
        <el-upload
          :data="form"
          ref="upload"
          class="upload-demo"
          action="/ele/addGoods"
          name="goodsPic"
          :auto-upload="false"
          :limit="1"
          :on-success="upSuccess"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <!-- modeule: "",
        shopName: "",
        shopShowNum: "", //商品数量
        shopActivities: "", //活动
      shopNotices: "" //公告-->
      <el-form-item label="店铺名称" label-width="150px">
        <el-input
          placeholder="店铺名称"
          v-model="form.shopName"
          style="width:300px;"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="店铺活动" label-width="150px">
        <el-input
          type="textarea"
          placeholder="店铺活动"
          v-model="form.shopActivities"
          maxlength="100"
          show-word-limit
          style="width:300px"
        ></el-input>
      </el-form-item>
      <el-form-item label="店铺公告" label-width="150px">
        <el-input
          type="textarea"
          placeholder="店铺公告"
          v-model="form.shopNotices"
          maxlength="100"
          show-word-limit
          style="width:300px"
        ></el-input>
      </el-form-item>
      <el-form-item label="店铺商品个数" label-width="150px">
        <el-input
          placeholder="店铺商品个数"
          v-model="form.shopShowNum"
          style="width:100px;margin:0 10px"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible',false)">取 消</el-button>
      <el-button type="primary" @click="addGoods">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "add-goods",
  data() {
    return {
      form: {
          goodsName:"",
        goodsType: "", //商品类别名称
        goodsNewPrice: "",
        goodsOldPrice: "",
        goodsIntroduction: "",
        goodsScore: "",
        goodsSupportNum: "", //点赞数
        goodsSold: "",
        module: "",
        shopName: "",
        shopShowNum: "", //商品数量
        shopActivities: "", //活动公告
        shopNotices: "" //公告
      }
    };
  },
  props: ["visible"],
  methods: {
    // 上传图片成功
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
        this.$store.dispatch("getShopTypeList", {
          pageIndex: 1
        });
        this.$emit("update:visible", false);
      } else {
        this.$message.error(res.msg);
      }
      console.log(res);
    },
    addGoods() {
      this.$refs.upload.submit();
    }
    // ,
    // addGoods(){ //test
    //     console.log(this.form);
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>