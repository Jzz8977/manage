const db = require("./db");
const config = require("../config");
module.exports.getPageList=function(req,res,coll,obj) {
    var pageIndex = req.query.pageIndex?req.query.pageIndex/1:1;
    db.count(coll,(obj.whereObj || {}),function (count) {
        var pageSum = Math.ceil(count/config.limitNum);
        if(pageSum < 1)
            pageSum =1;
        if(pageIndex > pageSum)
            pageIndex = pageSum;
        if(pageIndex <1)
            pageIndex = 1;
        obj.limitNum = obj.limitNum || config.limitNum;
        obj.skipNum = (pageIndex-1)*obj.limitNum;
        db.find("shopTypeList",obj,function (err,shopTypeList) {
            res.json({
                shopTypeList,
                pageSum,
                pageIndex
            })
        })
    })
}