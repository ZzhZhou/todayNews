<template>
  <div class="water">
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list  v-for="(video,index) in videoData" :key="index" v-if="index<num">
            <div class="video">
              <img :src="video.large_image_url" alt="">
              <video src="../../assets/video/demo.mp4" class="vid" ref="video" controls></video>
              <div class="title">{{video.title}}</div>
            </div>
            <div class="content">
              <span>{{video.media_name}}</span>
              <span @click="getTheComment(video.group_id)">评论 {{video.comment_count}}</span>
              <span>{{video.datetime}}</span>
            </div>
            <mu-divider />
          </mu-list>
          <mu-list>
            <p class="mini"><span>正在加载中...</span></p>
            <mu-divider />
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        videoData: this.$store.state.newVideo,
        imageUrl: [],
        title: [],
        nameurl: [],
        num: 3,
        refreshing: false,
        loading: false,
        text: 'List'
      }
    },
    methods: {
      getData() {
        for (let i = 0; i < this.videoData.length; i++) {
          this.imageUrl.push(this.videoData[i].large_image_url)
        }
//        console.log(this.imageUrl)
      },
      refresh () {
        this.refreshing = true
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
          this.num = 3
        }, 2000)
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.num += 3
        }, 2000)
      },
      getTheComment(val) {
        this.$store.dispatch('getComment', val)
        this.$store.state.commentshow = true
      },
      play() {
        var audio = this.$refs.video
        if (!this.isPlaying) {
          audio.play()
          this.isPlaying = true
        }
      },
      stop() {
        var audio = document.querySelector('#audio')
        if (this.isPlaying) {
          audio.pause()
          audio.currentTime = 0
        }
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .water
    margin-top: 100px
    text-align: center
    .mini
      width: 100%
    .video
      position: relative
      .vid
        position: absolute
        top: 0
        left: 2%
        width: 96%
        height: 100%
      & > img
        width: 96%
      .title
        position: absolute
        top: 0
        left: 2%
        width: 96%
        color: #ffffff
        font-size: 14px
        text-align: left
    .content
      margin-left: 3px
      text-align: left
      font-size: 12px
      & > span
        display: inline-block
        margin-left: 5px
        margin-bottom: 12px
        color: #666
</style>
