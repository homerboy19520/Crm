import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import store from "@/store";
import VueRouter from "vue-router";
import router from "./router";
import "materialize-css/dist/js/materialize.min";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
