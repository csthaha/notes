export default {
    state: {
        moduleAName: 'moduleA',
        moduleADesc: '这是模块A, 用来学习module',
        moduleAList: [1,2,3,5]
    },
    getters: {
        filterList(state) {
            return state.moduleAList.filter((item, index, arrSelf) => {
              return item % 2 !== 0;
            });
        }
    },
    mutations: {
        modifyName(state, payload) {
            console.log('store', state, payload)
            state.moduleAName = payload.name
        }
    },
    actions: {

    }
}