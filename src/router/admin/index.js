import adminLog from "@/components/admin/log"
import isLogin from "@/components/common/isLogin"
import adminAdd from "@/components/admin/add"
export default [
    {
        path: '/isLogin',
        name: 'isLogin',
        component: isLogin
    },
    {
        path: '/adminLog',
        name: 'adminLog',
        component: adminLog,
        meta:{
            isAuthorization:true
        }
    },{
        path: '/adminAdd',
        name: 'adminAdd',
        component: adminAdd,
        meta:{
            isAuthorization:true
        }
    }
]