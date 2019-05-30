<template>
  <div class="tab">
    <mu-container>
      <mu-bottom-nav color="#eb3031" @change="change" :value.sync="tab">
        <mu-bottom-nav-item title="首页" icon="home" value="homepage"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="西瓜视频" icon="play_arrow" value="watermelon"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="小视频" icon="live_tv" value="minVideo"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="未登录" icon="person_outline" value="personal"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tab: 'homepage'
    }
  },
  methods: {
    change(val) {
      this.$router.push(val)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .tab
    position: fixed
    bottom: 0
    width: 100%
    z-index: 100
    /deep/ .container
      padding: 0
</style>
