import * as types from './mutation-types'

export const mutations = {
  [types.INIT_JOKES] (state, payload) {
    state.joke.push(...payload);
  },
  [types.ADD_JOKE](state, payload){
    state.joke.push(payload);
  },
  [types.REMOVE_JOKE](state, index){
    state.joke.splice(index, 1);
  }
}