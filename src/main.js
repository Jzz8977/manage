import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Login from "./views/Login"
import ElementUI from 'element-ui';// ui 核心 库
import 'element-ui/lib/theme-chalk/index.css';// 组件库所用到时的样式
import filters from "@/filters";
import axios from 'axios'
import components from "./components"

Vue.use(components);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(filters);
Vue.prototype.$axios = axios;

axios.interceptors.request.use(config => {
  store.commit("SET_IS_LOADING", true);
  config.url = "/ele/" + config.url + "?t=" + Date.now();
  // console.log(this.store.state.admin.token);
  config.headers = {
    "authorization": localStorage.token
  }
  return config;
})
// 过滤接收的数据
axios.interceptors.response.use(({ data }) => {
  store.commit("SET_IS_LOADING", false);
  if (data.ok === -2) {
    store.commit("OUT_LOGIN")
  } else {
    return data;
  }

})
/**********************************路由拦截********************************************************/
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if (to.meta.isAuthorization) {// 是否需要验证token.
    // 没有登陆过，进入到登陆界面
    if (localStorage.token) {
      next();
    } else {
      store.commit("OUT_LOGIN");
      // 进入到登陆界面
      // next("/isLogin");
      // bus.$emit("outLogin");
    }
  } else {// 不验证
    next();
  }
});
new Vue({
  router,
  store,
  // mounted() {
  //   bus.$on("outLogin", () => {
  //     this.$store.commit("OUT_LOGIN");
  //   })
  // },
  // render: h => h(store.state.admin.token ? App : Login)
  render: function (h) { return h(this.$store.state.admin.token?App:Login) }
}).$mount('#app')
