const db = require('../module/db')
const { getPageList } = require('../module/common')
const { upPic } = require("../module/upPic");
const formidable = require("formidable");
const mongodb = require('mongodb')
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

module.exports.getGoodsTypeList = function (req, res) {
    var goodsTypeId = req.query.goodsTypeId || "";
    // var goodsName = req.query.search || "";
    var whereObj = {};
    if(goodsTypeId.length > 0){
        whereObj.goodsTypeId = new RegExp(goodsTypeId);
    }
    // if(goodsName.length>0){
    //     whereObj.goodsName = new RegExp(goodsName);
    // }
    db.find('goodsTypeList', {
        sortObj:{
            addTime:1
        },
        whereObj
    }, function (err, goodsTypeList) {
        res.json({
            ok: 1,
            goodsTypeList,
            msg: "获取成功"
        })
    })
}

module.exports.addGoods = function (req, res) {
    upPic(req, "goodsPic", function (obj) {
        console.log(obj);
        if (obj.ok === 3) {
            db.insertOne("goodsList", {
                // goodsTypeName: "", //商品类别名称        // goodsNewPrice: "",        // goodsOldPrice: "",
                // goodsIntroduction: "",        // goodsScore: "",        // goodsSupportNum: "", //点赞数
                // goodsSold: "",        // module: "", // shopName: "",  // shopShowNum: "", //商品数量     
                // shopActivities: "", //活动公告// shopNotices: "" //公告
                goodsName: obj.params.goodsName,
                goodsLogo: obj.params.newPicName,
                goodsNewPrice: obj.params.goodsNewPrice,
                goodsOldPrice: obj.params.goodsOldPrice,
                goodsType: obj.params.goodsType,
                goodsIntroduction: obj.params.goodsIntroduction,
                goodsScore: obj.params.goodsScore,
                goodsSupportNum: obj.params.goodsSupportNum,
                goodsSold: obj.params.goodsSold,
                module: obj.params.module,
                shopName: obj.params.shopName,
                shopShowNum: obj.params.shopShowNum,
                shopActivities: obj.params.shopActivities,
                shopNotices: obj.params.shopNotices,
                addTime: Date.now()
            }, function (err, results) {
                res.json({
                    ok: 1,
                    msg: "上传成功"
                })
            })
        } else {
            res.json({
                ok: -1,
                msg: obj.msg
            })
        }

    })
}

//获取分页商品列表、具有模糊搜索
module.exports.getGoodsList = function(req,res){
    var goodsTypeId =  req.query.Id || "";//类别id
    var goodsId = req.query.goodsId || "";//商品id
    var goodsName = req.query.search || "";
    var goodsModule = req.query.module || '0';
    var limitNum = req.query.limitNum/1 || 5;
    var whereObj = {};
    if(goodsTypeId.length > 0){
        //根据商品类别iD查找
        whereObj.goodsTypeId = mongodb.ObjectId(goodsTypeId);
    }
    if(goodsName.length>0){
        // 根据商品名查找
        whereObj.goodsName = new RegExp(goodsName);
    }
    if(goodsModule>0){
        //根据分区查找
        whereObj.module = goodsModule;
    }
    if(goodsId.length>0){
        whereObj._id = mongodb.ObjectId(goodsId);
    }
    var pageIndex = req.query.pageIndex/1;
        db.count("goodsList",{},function (count) {
            db.find("goodsList",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function (err,goodsList) {
                var pageSum =Math.ceil(count/limitNum) ;
                if(pageSum<1)
                    pageSum =1;
                if(pageIndex>pageSum)
                    pageIndex = pageSum;
                if(pageIndex<1)
                    pageIndex =1;
                res.json({
                    ok:1,
                    goodsList,
                    pageIndex,
                    pageSum
                })
            })
        })
}

//获取商品雷彪，不具有模糊搜索

//删除商品信息
module.exports.goodsRemove = function(req,res){
    console.log(req.query);
    db.deleteOneById("goodsList", req.query.goodsId, function () {
        res.json({
            ok: 1,
            msg: "删除成功"
        })
    })
}

// 获得店铺类别
// module.exports.goodsTypeList = function (req,res) {
//     console.log(req.query);
//     var search = req.query.search || "";
//     var whereObj = {};
//     if(search.length > 0){
//         whereObj.shopTypeName = new RegExp(search);
//     }
//     getPageList(req,res,"shopTypeList",{
//         sortObj:{
//             addTime:-1
//         },
//         whereObj
//     })
// }