import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
import store from "./store";
import Dialog from './components/Dialog'
import './assets/styles/index.styl'

Vue.config.productionTip = false;

Vue.component("Mydialog", Dialog)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
