import axios from "axios";
const state = {
    advList: [],
}
const mutations = {
    //修改goodsTypeList
    SET_ADV_LIST(state, advList) {
        state.advList = advList;
    }
}
// const actions = {
//     // 获得类别日志
    
// }
export default {
    state,
    mutations,
    actions:{
        getAdvList({ commit, rootState }, params) {
            // commit("SET_IS_LOADING",true);
            // console.log()
            axios.get("getAdvList", {
                params
            })
                .then(data => {
                    // commit("SET_IS_LOADING",false);
                    console.log(data)
                    if (data) {
                        commit("SET_ADV_LIST", data.advList);
                        //就八条，不需要配置换业
                        commit("SET_PAGE_INFO", {
                            pageIndex: data.pageIndex,
                            pageSum: data.pageSum
                        })
    
                    }
                })
        },
        advDelete({commit,dispatch,rootState},params){
            axios.delete('advDelete',{
                params
            }).then(data=>{
                dispatch('getAdvList',{
                    pageIndex:1
                })
            })
        }
    }
}