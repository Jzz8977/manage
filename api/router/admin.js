const db = require("../module/db");
const token = require("../module/token");
module.exports.login=function (req,res) {
    /*完成登陆*/
    db.findOne("adminList",{
        adminName:req.body.adminName,
        passWord:req.body.passWord
    },function (err,adminInfo) {
        if(adminInfo){// 登陆成功
            // 插入登陆日志
            db.insertOne("adminLog",{
                adminId:adminInfo._id,
                adminName:adminInfo.adminName,
                loginTime:Date.now()
            },function (err,results) {
                res.json({
                    ok:1,
                    token:token.encode(req.body.adminName),
                    adminName:req.body.adminName
                })
            })

        }else{
            res.json({
                ok:-1,
                msg:"账号或密码错误"
            })
        }
    })
}
module.exports.adminLog = function (req,res) {
        /*
   * 1、ajax请求的时候需要验证token
   * 2、前端发送token
   * 3、后端验证
   * 4、验证token失败，返回ok:-2*/
        console.log(req.headers.authorization);
        var status = token.decode(req.headers.authorization);
        // token成功
        if(status.ok === 1){
            var whereObj = {
                adminName:status.info.adminName
            };
            var pageIndex = req.query.pageIndex/1;
            var limitNum=5;
            db.count("adminLog",whereObj,function (count) {
                db.find("adminLog",{
                    whereObj,
                    limitNum,
                    skipNum:(pageIndex-1)*limitNum,
                    sortObj:{loginTime:-1}
                },function (err,adminLog) {
                    var pageSum =Math.ceil(count/limitNum) ;
                    if(pageSum<1)
                        pageSum =1;
                    if(pageIndex>pageSum)
                        pageIndex = pageSum;
                    if(pageIndex<1)
                        pageIndex =1;
                    res.json({
                        ok:1,
                        adminLog,
                        pageIndex,
                        pageSum
                    })
                })
            })

        }else{
            res.json({
                ok:-2,
                msg:"token异常"
            });
        }

    // db.find("adminLog",{
    //
    // })
}