const db = require('../module/db')
const { getPageList } = require('../module/common')
const { upPic } = require("../module/upPic");
const formidable = require("formidable");



//添加广告
module.exports.addAdv = function (req, res) {
    upPic(req, "advPic", function (obj) {
        console.log(obj);
        if (obj.ok === 3) {
            db.insertOne("advList", {
                // goodsTypeName: "", //商品类别名称        // goodsNewPrice: "",        // goodsOldPrice: "",
                // goodsIntroduction: "",        // goodsScore: "",        // goodsSupportNum: "", //点赞数
                // goodsSold: "",        // module: "", // shopName: "",  // shopShowNum: "", //商品数量     
                // shopActivities: "", //活动公告// shopNotices: "" //公告
                advName: obj.params.advName,
                advPic: obj.params.newPicName,
                advType: obj.params.advType,
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
//获取广告
module.exports.getAdvList = function (req, res) {
    /*
* 1、ajax请求的时候需要验证token
* 2、前端发送token
* 3、后端验证
* 4、验证token失败，返回ok:-2*/
    var advTypeId = req.query.advTypeId || "";
    var whereObj = {};
    if (advTypeId.length > 0) {
        whereObj.goodsTypeId = new RegExp(advTypeId);
    }
    var pageIndex = req.query.pageIndex / 1;
    var limitNum = 5;
    db.count("advList", {}, function (count) {
        db.find("advList", {
            whereObj,
            limitNum,
            skipNum: (pageIndex - 1) * limitNum,
            sortObj: { loginTime: -1 }
        }, function (err, advList) {
            var pageSum = Math.ceil(count / limitNum);
            if (pageSum < 1)
                pageSum = 1;
            if (pageIndex > pageSum)
                pageIndex = pageSum;
            if (pageIndex < 1)
                pageIndex = 1;
            res.json({
                ok: 1,
                advList,
                pageIndex,
                pageSum
            })
        })
    })
}
//删除广告
module.exports.advDelete = function (req, res) {
    console.log(req.query);
    db.deleteOneById("advList", req.query.id, function () {
        res.json({
            ok: 1,
            msg: "删除成功"
        })
    })
}