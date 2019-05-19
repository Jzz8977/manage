import pageInfo from './common/pageInfo.vue'
import addGoodsType from "./goods/addGoodsType.vue"
import addAdv from "./adv/addAdv.vue"
import addGoods from "./goods/addGoods.vue"
const components = {
    addGoodsType,
    pageInfo,
    addGoods,
    addAdv
}
export default {
    install(Vue){
       for(var key in components){
        Vue.component(key,components[key])
       }
    }
}