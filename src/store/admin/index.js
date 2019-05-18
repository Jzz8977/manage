import axios from 'axios'
const state = {
    token : localStorage.token,
    adminLog:[],//管理员日志
    adminName :''
}
const mutations = {
    OUT_LOGIN(state){
        localStorage.clear();
        state.token = localStorage.token;
    },
    SET_TOKEN(state,token){
        state.token = localStorage.token = token;
    },
    SET_ADMIN_LOG(state,adminLog){
        state.adminLog = adminLog;
    },
    SET_ADMIN_NAME(state,adminName){
        state.adminName = adminName;
    },
}
const actions= {
    login({commit},that){
        axios.post("login",that.adminForm).then(data=>{
            that.isLoading = false;
            if(data.ok===1){
                that.$message.success("恭喜您，登录成功")
                commit('SET_TOKEN',data.token);
                commit('SET_ADMIN_NAME',data.adminName);
                
            }else{
                that.$message.error("登录失败")
            }
        })
    },
    // 获得管理员日志
    getAdminLog({commit,rootState},params){
        // commit("SET_IS_LOADING",true);
        // console.log()
        axios.get("adminLog",{
            params

        })
            .then(data=>{
                // commit("SET_IS_LOADING",false);
                if(data){
                    commit("SET_ADMIN_LOG",data.adminLog);
                    commit("SET_PAGE_INFO",{
                        pageIndex:data.pageIndex,
                        pageSum:data.pageSum
                    })
                }
            })
    }
}
export default {
    state,
    mutations,
    actions
}