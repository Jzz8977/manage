const db = require("../module/db");
const {getPageList} = require("../module/common")
const {upPic} = require("../module/upPic");

/*************************店铺类别*****************************************/
// 添加店铺类别
module.exports.addShopType = function (req,res) {
    upPic(req,"shopTypePic",function (obj) {
        if(obj.ok === 3){
            db.insertOne("shopTypeList",{
                shopTypeName:obj.params.shopTypeName,
                shopTypePic:obj.params.newPicName,
                addTime:Date.now()
            },function (err,results) {
                res.json({
                    ok:1,
                    msg:"上传成功"
                })
            })
        }else{
            res.json({
                ok:-1,
                msg:obj.msg
            })
        }

        // res.json(obj);
    })
}

// 获得店铺类别
module.exports.getShopTypeList = function (req,res) {
    console.log(req.query);
    var search = req.query.search || "";
    var whereObj = {};
    if(search.length > 0){
        whereObj.shopTypeName = new RegExp(search);
    }
    getPageList(req,res,"shopTypeList",{
        sortObj:{
            addTime:-1
        },
        whereObj
    })
    // var pageIndex = req.query.pageIndex?req.query.pageIndex/1:1;
    //  db.count("shopTypeList",{},function (count) {
    //      var pageSum = Math.ceil(count/config.limitNum);
    //      if(pageSum < 1)
    //          pageSum =1;
    //      if(pageIndex > pageSum)
    //          pageIndex = pageSum;
    //      if(pageIndex <1)
    //          pageIndex = 1;
    //      db.find("shopTypeList",{
    //          sortObj:{
    //              addTime:-1
    //          }
    //      },function (err,shopTypeList) {
    //          res.json({
    //              shopTypeList,
    //              pageSum,
    //              pageIndex
    //          })
    //      })
    //  })

}