export default {
    state: {
        skinlist:[]
    },
    getters: {},
    mutations: {
        addlist(state,payload){
            state.skinlist.push(payload);
            console.log(state.skinlist);
        }
    },
    actions: {
        asyncAddlists(context,str){
            context.commit('addlist',str)
        } 
    },
}