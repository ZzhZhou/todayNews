/**
 * Created by zhouzhengh on 2018/11/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
  data: {},
  isAjax: false,
  newscontent: {
    node: null
  },
  newVideo: {
    node: null
  },
  commentdata: {
    node: null
  },
  index: 0,
  commentshow: false,
  authorname: [],
  avatar: [],
  searchdata: {},
  showsearch: false,
  hotdata: {},
  societydata: {},
  endata: {},
  militarydata: {},
  sportdata: {},
  worlddata: {},
  fashiondata: {},
  contentname: ['homepage'],
  comdata: {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
