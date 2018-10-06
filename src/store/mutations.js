import * as types from "./mutation_types"

const mutations = {
    [types.SET_TIP](state,param){
        state.tip = param
    }
}

export default mutations