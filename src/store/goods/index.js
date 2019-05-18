import axios from "axios";
const state = {
    goodsTypeList: [],
}
const mutations = {
    //修改goodsTypeList
    SET_GOODS_TYPE_LIST(state, goodsTypeList) {
        state.goodsTypeList = goodsTypeList;
    }
}
const actions = {
    // 获得类别日志

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
                    commit("SET_PAGE_INFO", {
                        pageIndex: data.pageIndex,
                        pageSum: data.pageSum
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