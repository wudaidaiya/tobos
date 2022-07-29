export default {
  state:{
    list:[{
    name: '吃饭',
    done: false,
    id: 1,
  },
  {
    name: '睡觉',
    done: false,
    id: 2,
  },
  {
    name: '打豆豆',
    done: false,
    id: 3,
  }]
},
  getters: {},
  mutations: {
    Addlist(state,payload){
      state.list.push(payload);
    },
    Dellist(state,payload){
      console.log(payload)
      state.list = state.list.filter(item => item.id !== payload)
    }
  },
  actions: {
    asyncAddlist(context,val){
      context.commit("Addlist",val)
    },
    asyncDellist(context,idd){
      console.log(idd);
      context.commit('Dellist',idd)
    }
  },
 
}
