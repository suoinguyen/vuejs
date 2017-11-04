import Vue from "vue"
import Vuex from 'vuex'
import {mutations} from './mutation'
import * as actions from './action'

Vue.use(Vuex)

const state = {
  joke: [],
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})