const express = require("express");
const admin = require("./router/admin");
const shop = require("./router/shop");
const goods =require('./router/goods')
const adv =require('./router/adv')
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname+"/upload"))
app.use(bodyParser.json());
// 登陆接口
app.post("/login",admin.login);
app.get("/adminLog",admin.adminLog);

/*********************添加店铺类别**********************************/
app.post("/addShopType",shop.addShopType);
app.get("/getShopTypeList",shop.getShopTypeList);

//添加商品类别
app.post('/addGoodsType',goods.addGoodsType);
//获取商品类别
app.get('/goodsTypeList',goods.goodsTypeList);

//添加商品
app.post('/addGoods',goods.addGoods);
//获取广告
app.get("/getGoodsList",goods.getGoodsList);



/*********************获取广告***************************************** */
app.get("/getAdvList",adv.getAdvList)

/*********************添加广告信息***************************************** */
app.post("/addAdv",adv.addAdv);
/***********************删除广告****************************************** */
app.delete('/advDelete',adv.advDelete);

app.listen(80,function () {
    console.log("success");
})