import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './modules/user'
import skin from './modules/skin'
import createVuexPersisted from 'vuex-persistedstate'
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    skin
  },
  plugins:[createVuexPersisted(
  //   {
  //   reducer(state){
  //     return{
  //       user: state.user
  //     }
  //   }
  // }
  )]
})
