<template>
  <div id="app">
    <navigation></navigation>
   <div class="nav">
     <mu-list>
     <div class="menu" ref="menu">
       <span @click="getName(value = 'homepage')"><router-link to="/homepage" class="item">推荐</router-link></span>
       <span @click="getName(value = 'HotPage')" class="item">热点</span>
       <span @click="getName(value = 'Entertainment')" class="item">娱乐</span>
       <span @click="getName(value = 'SocietyPage')" class="item">社会</span>
       <span @click="getName(value = 'MilitaryPage')" class="item">军事</span>
       <span @click="getName(value = 'SportPage')" class="item">体育</span>
       <span @click="getName(value = 'WorldPage')" class="item">国际</span>
       <span @click="getName(value = 'FashionPage')" class="item">时尚</span>
     </div>
       <span class="icon"><mu-icon value="dehaze"></mu-icon></span>
     <mu-divider />
     </mu-list>
   </div>
    <SearchContent v-if="$store.state.showsearch"></SearchContent>
    <comment-page v-if="$store.state.commentshow"></comment-page>
    <router-view/>
    <bottom-tab></bottom-tab>
  </div>
</template>

<script>
  import Navigation from './components/navigation/Navigation.vue'
  import BottomTab from './components/bottomtab/BottomTab.vue'
  import CommentPage from './components/news/CommentPage.vue'
  import * as types from './store/mutation-types'
  import $ from 'jquery'
  import SearchContent from './components/navigation/SearchContent.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    BottomTab,
    CommentPage,
    SearchContent
  },
  methods: {
    getName(val, e) {
//      console.log(val)
      this.$store.commit(types.GETCONTENT_NAME, val)
      this.$router.push('HotPage')
      if (val === 'homepage') {
        $('.item').eq(0).css('color', 'red').parent().siblings().css('color', 'black')
      } else if (val === 'HotPage') {
        $('.item').eq(1).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(1).css('color', 'red').siblings().children().css('color', 'black')
      } else if (val === 'Entertainment') {
        $('.item').eq(2).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(2).css('color', 'red').siblings().children().css('color', 'black')
      } else if (val === 'SocietyPage') {
        $('.item').eq(3).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(3).css('color', 'red').siblings().children().css('color', 'black')
      } else if (val === 'MilitaryPage') {
        $('.item').eq(4).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(4).css('color', 'red').siblings().children().css('color', 'black')
      } else if (val === 'SportPage') {
        $('.item').eq(5).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(5).css('color', 'red').siblings().children().css('color', 'black')
      } else if (val === 'WorldPage') {
        $('.item').eq(6).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(6).css('color', 'red').siblings().children().css('color', 'black')
      } else if (val === 'FashionPage') {
        $('.item').eq(7).css('color', 'red').siblings().css('color', 'black')
        $('.item').eq(7).css('color', 'red').siblings().children().css('color', 'black')
      }
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  #app
    overflow: hidden
    .nav
      position: fixed
      top: 58px
      width: 100%
      font-size: 20px
      background: #fbfbfb
      z-index: 100
      .icon
        position: absolute
        right: 6px
        top: 12px
      .menu
        margin-left: 10px
        width: 87%
        white-space: nowrap
        display: -webkit-box
        overflow-x: auto
        -webkit-overflow-scrolling: touch
        color: #000
        & > span
          display: inline-block
          padding: 3px 3px 6px 3px
          /deep/ .router-link-active
          & > a
            color: #000
        .active
          color: red
      .menu::-webkit-scrollbar
        display: none
</style>
