<template>
  <div class="top">
    <div class="topnav">
      <div class="searchbar">
        <mu-icon value="search" color="#000" class="search" ></mu-icon>
        <input type="text" placeholder="搜索" v-model="content" @keyup.enter="goSearch"><span v-if="content.length>0?(!alldel):alldel" @click="del"><mu-icon value="cancel" color="#aaa" class="del"></mu-icon></span>
      </div>
      <div class="icon"><mu-icon value="camera_alt" color="#fff" class="cam"></mu-icon>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      alldel: false,
      content: []
    }
  },
  methods: {
    ...mapActions(['getSearch']),
    del() {
      this.content = ''
    },
    goSearch() {
      this.$store.dispatch('getSearch', this.content)
      this.$store.state.showsearch = true
      this.content = ''
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
   .top
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 100
    background: #eb3031
    .topnav
      display: flex
      width: 100%
      height: 58px
      .searchbar
        flex: 0 0 80%
        margin-top: 25px
        margin-left: 10px
        height: 26px
        line-height: 26px
        border-radius: 5px
        text-align: left
        background: #fff
        .search
          margin-top: 1px
          margin-left: 10px
        & > input
          margin-top: 1px
          display: inline-block
          width: 79%
          height: 24px
          line-height: 24px
          vertical-align: top
          border-radius: 5px
          outline: none
          border: none
      .icon
        flex: 1
        margin-top: 25px
        text-align: center
</style>
