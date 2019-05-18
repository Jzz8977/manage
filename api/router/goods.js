const db = require('../module/db')
const { getPageList } = require('../module/common')
const { upPic } = require("../module/upPic");
const formidable = require("formidable");

//添加商品类别
module.exports.addGoodsType = function (req, res) {
    console.log(req.body)
    db.insertOne("goodsTypeList", {
        goodsTypeName: req.body.goodsTypeName,
        goodsTypeLogo: req.body.goodsTypeLogo,
        goodsTypeHref: req.body.goodsTypeHref,
        addTime: Date.now()
    }, function (err, results) {
        res.json({
            ok: 1,
            msg: "上传成功"
        })
    })
}

module.exports.goodsTypeList = function(req,res){

    db.find('goodsTypeList',{},function(err,goodsTypeList){
        console.log(goodsTypeList);
        res.json({
            ok:1,
            goodsTypeList,
            msg:"获取成功"
        })
    })
}