import addGoodsType from "./goods/addGoodsType.vue"
import pageInfo from './common/pageInfo.vue'
const components = {
    addGoodsType,
    pageInfo,
}
export default {
    install(Vue){
       for(var key in components){
        Vue.component(key,components[key])
       }
    }
}