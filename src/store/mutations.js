/**
 * Created by zhouzhengh on 2018/11/17.
 */
import * as types from './mutation-types'
export default {
  [types.GETDATA_LIST](state, data) {
    state.data = data.data.data
    // console.log(state.data)
    if (state.contentname[0] === 'homepage') {
      state.comdata = state.data
    }
  },
  [types.REFRESH_AJAX](state, val) {
  state.isAjax = val
  },
  [types.GETNEWS_CONTENT](state, news) {
    state.newscontent = news.news.data.data
    state.index = news.ids
    state.authorname = state.newscontent.media_user.screen_name
    state.avatar = state.newscontent.media_user.avatar_url
    // console.log(state.newscontent)
    // console.log(state.index)
  },
  [types.GETNEWS_VIDEO](state, video) {
    state.newVideo = video.data.data
    // console.log(state.newVideo)
  },
  [types.GETCOMMENT_DATA](state, comment) {
    state.commentdata = comment.data.data
    // console.log(state.commentdata)
  },
  [types.GETSEARCH_DATA](state, content) {
    state.searchdata = content.data.data
    console.log(state.searchdata)
  },
  [types.GETHOT_DATA](state, hot) {
    state.hotdata = hot.data.data
    // console.log(state.hotdata)
  },
  [types.SOCIETY_DATA](state, society) {
    state.societydata = society.data.data
    // console.log(state.societydata)
  },
  [types.ENTERTAINMENT_DATA](state, enter) {
    state.endata = enter.data.data
    // console.log(state.endata)
  },
  [types.GETMILITARY_DATA](state, mili) {
    state.militarydata = mili.data.data
    // console.log(state.militarydata)
  },
  [types.GETSPORT_DATA](state, sport) {
    state.sportdata = sport.data.data
    // console.log(state.sportdata)
  },
  [types.GETWORLD_DATA](state, world) {
    state.worlddata = world.data.data
    // console.log(state.worlddata)
  },
  [types.GETFASHION_DATA](state, fashion) {
    state.fashiondata = fashion.data.data
    // console.log(state.fashiondata)
  },
  [types.GETCONTENT_NAME](state, name) {
    state.contentname = [name]
    if (state.contentname[0] === 'HotPage') {
      state.comdata = state.hotdata
    } else if (state.contentname[0] === 'SocietyPage') {
      state.comdata = state.societydata
    } else if (state.contentname[0] === 'Entertainment') {
      state.comdata = state.endata
    } else if (state.contentname[0] === 'MilitaryPage') {
      state.comdata = state.militarydata
    } else if (state.contentname[0] === 'SportPage') {
      state.comdata = state.sportdata
    } else if (state.contentname[0] === 'WorldPage') {
      state.comdata = state.worlddata
    } else if (state.contentname[0] === 'FashionPage') {
      state.comdata = state.fashiondata
    }
    // console.log(state.comdata)
    console.log(state.contentname[0])
  }
}
