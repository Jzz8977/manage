import axios from "axios";
const state = {
    goodsList: [],
    goodsTypeList: []
}
const mutations = {
    //修改goodsTypeList
    SET_GOODS_TYPE_LIST(state, goodsTypeList) {
        state.goodsTypeList = goodsTypeList;
    },
    SET_GOODS_LIST(state, goodsList) {
        state.goodsList = goodsList;
    }
}
// const actions = {
//     // 获得类别日志

// }
export default {
    state,
    mutations,
    actions: {
        getGoodsTypeList({ commit, rootState }, params) {
            // commit("SET_IS_LOADING",true);
            // console.log()
            axios.get("goodsTypeList", {
                params
            })
                .then(data => {
                    // commit("SET_IS_LOADING",false);
                    console.log(data)
                    if (data) {
                        commit("SET_GOODS_TYPE_LIST", data.goodsTypeList);
                        //就八条，不需要配置换业
                        // commit("SET_PAGE_INFO", {
                        //     pageIndex: data.pageIndex,
                        //     pageSum: data.pageSum
                        // })

                    }
                })
        },
        getGoodsList({commit,rootState},params) {
            axios.get("getGoodsList", {
                params
            })
                .then(data => {
                    // commit("SET_IS_LOADING",false);
                    console.log(data)
                    if (data) {
                        commit("SET_GOODS_LIST", data.goodsList);
                        //就八条，不需要配置换业
                        commit("SET_PAGE_INFO", {
                            pageIndex: data.pageIndex,
                            pageSum: data.pageSum
                        })
                    }
                })
        }
    }
}