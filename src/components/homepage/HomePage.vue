<template>
    <div class="homepage">
        <mu-container ref="container" class="demo-loadmore-content">
          <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
            <mu-list v-for="(news,index) in $store.state.data" :key="index" v-if="index<=num" class="list" @click="getId(news.source_url, index)">
                <mu-list-item :ripple="true">
                 <span class="title">{{news.title}}</span>
                  <img :src="news.image_url" alt="" class="img" v-if="news.image_url">
                </mu-list-item>
              <div class="image" v-if="news.image_list[0]">
                <img :src="news.image_list[0].url" alt="">
                <img :src="news.image_list[1].url" alt="">
                <img :src="news.image_list[2].url" alt="">
              </div>
              <div class="min">
                <span v-if="news.label" class="label">{{news.label}}</span>
                <span>{{news.media_name}}</span>
                <span>评论{{news.comment_count}}</span>
                <span>{{news.datetime}}</span>
              </div>
                <mu-divider />
            </mu-list>
            <mu-list>
            <p class="mini"><span>正在加载中...</span></p>
            <mu-divider />
            </mu-list>
          </mu-load-more>
        </mu-container>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        num: 6,
        refreshing: false,
        loading: false,
        text: 'List'
      }
    },
    methods: {
      ...mapActions(['getContent']),
      getId(val, val2) {
        this.getContent({itemId: val, gId: val2})
        this.$router.push('/newspage')
      },
      refresh () {
        this.refreshing = true
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
          this.num = 6
        }, 2000)
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.num += 6
        }, 2000)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .homepage
    position: relative
    margin-top: 105px
    z-index: 1
    /deep/ .list
      padding: 0
      overflow: hidden
      /deep/ .mu-item
        padding: 0 6px 0 10px
        .title
          display: inline-block
          padding-top: 15px
          font-size: 17px
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
        .img
          display: inline-block
          margin-left: 6%
          padding-top: 12%
          padding-left: 1%
          width: 30%
      .min
        padding: 10px 10px 16px 12px
        font-size: 12px
        color: #aaa
        & > span
          padding-right: 4px
        .label
          border: 1px solid red
          color: red
          border-radius: 5px
          font-size: 12px
      .image
        margin-top: 20px
        width: 100%
        text-align: center
        & > img
          width: 30%
    .mini
      width: 100%
      text-align: center
</style>
