import addGoodsType from "@/components/goods/addGoodsType"
import goodsType from "@/components/goods/goodsType"
export default [
    {
        path: '/addGoodsType',
        name: 'addGoodsType',
        component: addGoodsType,
        meta:{
            isAuthorization:true// 如果值为true是需要登陆以后才可以进入该路由
        }
    },
    {
        path: '/goodsType',
        name: 'goodsType',
        component: goodsType,
        meta:{
            isAuthorization:true// 如果值为true是需要登陆以后才可以进入该路由
        }
    }
]