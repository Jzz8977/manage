import Vue from 'vue'
import Vuex from 'vuex'
import market from './market'
import admin from './admin'
import goods from './goods'
import adv from './adv'
import config from './common'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        pageInfo:{
            pageIndex:1,
            pageSum:1
        },
        isLoading:false
    },
    mutations:{
        SET_IS_LOADING(state,bool){
            state.isLoading = bool;
        },
        SET_PAGE_INFO(state,info){
            state.pageInfo.pageIndex = info.pageIndex;
            state.pageInfo.pageSum = info.pageSum;
        },
        // 对分页信息实行初始化
        SET_INIT(state){
            state.pageInfo.pageIndex =1;
            state.pageInfo.pageSum =1;
        }
    },
    actions:{

    },
    modules:{
        market,
        admin,
        goods,
        adv,
        config
    }
})