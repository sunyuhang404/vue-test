
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 全局
import state  from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// 模块
import home from './home';
import mine from './mine';

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    home,
    mine
  }
});

export default store;