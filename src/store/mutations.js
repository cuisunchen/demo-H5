import * as types from "./mutation_types"

const mutations = {
    [types.SET_TIP](state,param){
        state.tip = param
    },
    [types.SET_HEAD](state,param){
        state.headCon = param
    }
}

export default mutations