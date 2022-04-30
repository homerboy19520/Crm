import Vue from "vue";
import { Vuelidate } from "vuelidate";
import App from "./App.vue";
import Vuex from "vuex";
import store from "@/store";
import VueRouter from "vue-router";
import router from "./router";
import messagePlugin from "@/utils/message.plugin";
import dateFilter from "@/filters/date.filter";
import "materialize-css/dist/js/materialize.min";

Vue.filter("date", dateFilter);

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
