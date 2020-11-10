import Vue from "vue";
import Vuex from "vuex";
import moduleA from './module/moduleA'

// 挂载vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moduleA
  }
});
