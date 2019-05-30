<template><div>
    <div class="news">
      <div class="nav"><mu-appbar style="width: 100%;" color="#fff" z-depth="1">
        <mu-button icon slot="left" @click="back">
          <mu-icon value="chevron_left"></mu-icon>
        </mu-button>
        <mu-button flat slot="right"><mu-icon value="search"></mu-icon></mu-button>
        <mu-button flat slot="right"><mu-icon value="more_horiz"></mu-icon></mu-button>
      </mu-appbar></div>
      <div class="content"  ref="content">
        <h2 class="title">{{$store.state.newscontent.title}}</h2>
        <div class="author"><span class="icon" ><img :src="$store.state.avatar" alt=""></span>
          <span class="name">{{$store.state.authorname}}</span>
          <span class="txt">
          <span>{{$store.state.newscontent.publish_time | time}}</span><span class="dot"></span>
          <span>{{$store.state.newscontent.comment_count}}评论</span>
          </span>
        </div>
        <div class="txt" v-html="$store.state.newscontent.content"></div>
      </div>
        <div class="tab">
         <div class="text"><mu-icon value="create"></mu-icon><input type="text" placeholder="写评论..."></div>
          <div class="tabbar">
            <span @click="getTheComment(commentdata[$store.state.index].group_id)"><mu-icon value="chat_bubble_outline"></mu-icon></span>
            <span><mu-icon :value="star" @click="changestar" :color="star==='star_border'?'black':'yellow'"></mu-icon></span>
            <span @click="changeDigg"><mu-icon value="thumb_up" :color="digg?'red':'black'"></mu-icon></span>
            <span><mu-icon value="subdirectory_arrow_right"></mu-icon></span>
          </div>
        </div>
    </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {filterCustomDate} from '../../assets/js/tools.js'
  export default {
    data() {
      return {
        star: 'star_border',
        digg: false,
        commentdata: this.$store.state.data
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      changestar() {
        this.star = 'star'
      },
      changeDigg() {
        this.digg = !this.digg
      },
      sildeDown() {
        if (this.$store.state.comdata === {}) {
          this.commentdata = this.$store.state.data
        } else {
          this.commentdata = this.$store.state.comdata
        }
        this.$nextTick(() => {
          this.menuScroll = new BScroll(this.$refs.content)
        })
      },
      getTheComment(val) {
        console.log(val)
        this.$store.dispatch('getComment', val)
        this.$store.state.commentshow = true
      }
    },
    filters: {
      time(date) {
        return filterCustomDate(date)
      }
    },
    created() {
      this.sildeDown()
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .news
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 101
    overflow-x: hidden
    .nav
      position: fixed
      top: 0
      left: 0
      width: 100%
      background: #fff
      z-index: 100
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
    .content
      margin: 50px 10px 0 10px
      padding-bottom: 150px
      height: 100%
      overflow-x: hidden
      font-size: 18px
      text-align: left
      .txt
        margin: 0 auto
        /deep/ & > img
          width: 99%
        & > p
          /deep/ & > img
            width: 99%
        & > div
          /deep/ & > img
            width: 99%
          /deep/ & > div
            text-align: center
            /deep/ & > img
              width: 99%
      .title
        font-size: 24px
      .author
        margin-bottom: 20px
        font-size: 13px
        .icon
          display: inline-block
          margin-left: 5px
          vertical-align: middle
          & > img
            width: 30px
            height: 30px
        .name
          display: inline-block
          margin-left: 10px
          vertical-align: middle
          font-size: 14px
          color: #000
        .txt
          display: inline-block
          float: right
          line-height: 34px
          color: #aaa
          .dot
            display: inline-block
            margin: 0 2px 0 5px
            height: 3px
            width: 3px
            border-radius: 50%
            background: #aaa
            vertical-align: middle
</style>
