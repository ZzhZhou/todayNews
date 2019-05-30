/**
 * Created by zhouzhengh on 2018/11/17.
 */
import * as types from './mutation-types'
import axios from 'axios'
export default {
  async getAllData({commit}, axios) {
    commit(types.REFRESH_AJAX, true) // 正在请求
    let list = await axios.get(`/recommod/tag=__all__&ac=wap&count=30&format=json_raw&as=A1E59B8F42A410C&cp=5BF2F451101C8E1&min_behot_time=0&_signature=.4mdvAAApIVVpt08F5Dxu.-Jna&i=`)
    commit(types.GETDATA_LIST, list)
    commit(types.REFRESH_AJAX, false) // 请求完毕
  },
  async getContent({commit}, id) {
    commit(types.REFRESH_AJAX, true)
    // console.log(id)
    let str = ''
   if (id.itemId.indexOf('tem/') > -1) {
     let strArr = id.itemId.split('tem/')
      str = strArr[0] + strArr[1]
     // console.log(str)
   } else {
      str = id.itemId
   }
    let newscontent = await axios.get(`/content${str}info/?_signature=1PzpyhAfjxh-06lKe-VuJtT86d&i=6625727357875388931`)
    commit(types.GETNEWS_CONTENT, {news: newscontent, ids: id.gId})
    commit(types.REFRESH_AJAX, false)
  },
  async getVideo({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let newsvideo = await axios.get(`/video/`)
    commit(types.GETNEWS_VIDEO, newsvideo)
    commit(types.REFRESH_AJAX, false)
  },
  async getComment({commit}, id) {
    commit(types.REFRESH_AJAX, true)
    let newscomment = await axios.get(`/comment/&group_id=${id}&item_id=${id}`)
    commit(types.GETCOMMENT_DATA, newscomment)
    commit(types.REFRESH_AJAX, false)
  },
  async getSearch({commit}, content) {
    commit(types.REFRESH_AJAX, true)
    let searchcontent = await axios.get(`/search/&keyword=${content}`)
    commit(types.GETSEARCH_DATA, searchcontent)
    commit(types.REFRESH_AJAX, false)
  },
  async getHotData({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let hot = await axios.get(`/hotnews/`)
    commit(types.GETHOT_DATA, hot)
    commit(types.REFRESH_AJAX, false)
  },
  async getSociety({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let society = await axios.get(`/society/`)
    commit(types.SOCIETY_DATA, society)
    commit(types.REFRESH_AJAX, false)
  },
  async getEntertainment({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let entertainment = await axios.get(`/happy/`)
    commit(types.ENTERTAINMENT_DATA, entertainment)
    commit(types.REFRESH_AJAX, false)
  },
  async getmilitary({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let mili = await axios.get(`/military/`)
    commit(types.GETMILITARY_DATA, mili)
    commit(types.REFRESH_AJAX, false)
  },
  async getsport({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let sport = await axios.get(`/sport/`)
    commit(types.GETSPORT_DATA, sport)
    commit(types.REFRESH_AJAX, false)
  },
  async getWorld({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let world = await axios.get(`/world/`)
    commit(types.GETWORLD_DATA, world)
    commit(types.REFRESH_AJAX, false)
  },
  async getFashion({commit}, fashion) {
    commit(types.REFRESH_AJAX, true)
    let fash = await axios.get(`/fashion/`)
    commit(types.GETFASHION_DATA, fash)
    commit(types.REFRESH_AJAX, false)
  }
}
