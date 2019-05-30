<template>
    <div class="comment">
      <div class="top"><mu-appbar style="width: 100%;" color="#fff" z-depth="1">
        <mu-button icon slot="left" @click="back">
          <mu-icon value="chevron_left"></mu-icon>
        </mu-button>
        <mu-button flat slot="right"><span class="act">关注</span></mu-button>
        <mu-button flat slot="right"><mu-icon value="more_horiz"></mu-icon></mu-button>
      </mu-appbar></div>
      <div class="allcomment"><mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <mu-container ref="container" class="demo-loadmore-content">
          <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
            <mu-list v-for="(comment,index) in $store.state.commentdata.comments" :key="index" v-if="index<num">
              <div class="com">
                <div class="icon">
                  <img :src="comment.user.avatar_url" alt="">
                </div>
                <div class="content">
                  <div class="name">
                    <span class="reader">{{comment.user.name}}</span>
                    <span class="digg"><mu-button flat slot="right"><mu-icon value="thumb_up"></mu-icon><span class="count" v-if="comment.digg_count">{{comment.digg_count}}</span></mu-button></span>
                  </div>
                  <div class="text">{{comment.text}}</div>
                  <div class="replys"><span class="time">{{comment.create_time | time}}</span><span class="reply">{{comment.reply_count}}回复</span></div>
                </div>
              </div>
            </mu-list>
          </mu-load-more>
        </mu-container>
      </mu-paper></div>
      <div class="tab">
        <div class="text"><mu-icon value="create"></mu-icon><input type="text" placeholder="写评论..."></div>
        <div class="tabbar">
          <span @click="getTheComment(comdata[$store.state.index].group_id)"><mu-icon value="chat_bubble_outline"></mu-icon></span>
          <span><mu-icon :value="star" @click="changestar" :color="star==='star_border'?'black':'yellow'"></mu-icon></span>
          <span @click="changeDigg"><mu-icon value="thumb_up" :color="digg?'red':'black'"></mu-icon></span>
          <span><mu-icon value="subdirectory_arrow_right"></mu-icon></span>
        </div>
      </div>
    </div>
</template>

<script>
  import {filterCustomDate} from '../../assets/js/tools.js'
  export default {
    data () {
      return {
        num: 10,
        refreshing: false,
        loading: false,
        text: 'List',
        star: 'star_border',
        digg: false,
        commentdata: {}
      }
    },
    methods: {
      back() {
        this.$store.state.commentshow = false
      },
      refresh () {
        this.refreshing = true
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
          this.num = 10
        }, 2000)
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.num += 10
        }, 2000)
      },
      changestar() {
        this.star = 'star'
      },
      changeDigg() {
        this.digg = !this.digg
      }
    },
    filters: {
      time(date) {
        return filterCustomDate(date)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .comment
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 103
    overflow: auto
    .top
      position: fixed
      top: -1px
      left: 0
      width: 100%
      background: #fff
      z-index: 150
      .act
        display: inline-block
        padding: 8px 15px
        background: #f95b5c
        color: #fff
        border-radius: 5px
    .allcomment
      margin-top: 60px
      .com
        display: flex
        margin: 10px 10px
        width: 100%
        .icon
          flex: 1
          display: inline-block
          & > img
            width: 40px
            height: 40px
            border-radius: 50%
        .content
          display: inline-block
          flex: 0 0 90%
          margin-left: 10px
          .name
            width: 100%
            color: #888
            .reader
              display: inline-block
              margin-top: 8px
              vertical-align: middle
            .digg
              display: inline-block
              float: right
              margin-right: 12px
              .count
                display: inline-block
                padding-top: 3px
                margin-left: 5px
                vertical-align: middle
          .text
            margin: 15px 0
            width: 90%
            font-size: 16px
          .replys
            .reply
              display: inline-block
              margin-left: 10px
              padding: 3px 6px
              background: #eed
              border-radius: 15px
    .tab
      position: fixed
      bottom: 0
      display: flex
      padding-top: 10px
      width: 100%
      background: #fff
      .text
        box-sizing: border-box
        display: inline-block
        margin-left: 10px
        margin-bottom: 8px
        padding-left: 8px
        flex: 0 0 50%
        background: #ccc
        border-radius: 15px
        & > input
          height: 30px
          border: none
          outline: none
          vertical-align: top
          background: #ccc
          border-radius: 15px
      .tabbar
        flex: 1
        text-align: center
        & > span
          display: inline-block
          padding: 2px 8px
</style>
