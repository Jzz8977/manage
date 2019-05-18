import shopList from "@/components/shop/list"
import shopTypeList from "@/components/shop/typeList"
export default [
    {
        path: '/shopList',
        name: 'shopList',
        component: shopList,
        meta:{
            isAuthorization:true
        }
    },
    {
        path: '/shopTypeList',
        name: 'shopTypeList',
        component: shopTypeList,
        meta:{
            isAuthorization:true
        }
    }
]