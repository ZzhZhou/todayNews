<template>
    <div class="search">
      <div class="topnav">
        <div class="back" @click="back"> <mu-icon value="chevron_left" color="#fff"></mu-icon></div>
        <div class="searchbar">
          <input type="text" placeholder="搜索" v-model="content" @keyup.enter="goSearch">
          <span>
            <mu-icon value="cancel" color="#aaa" class="del" v-if="content.length>0?(!alldel):alldel" @click="del"></mu-icon>
          </span>
        </div>
        <div class="btn"><button @click="goSearch">搜索</button></div>
     </div>
      <div class="content" v-if="$store.state.searchdata">
        <mu-list textline="three-line">
         <div class="con" v-for="(search,index) in $store.state.searchdata" :key="index">
           <mu-list-item avatar :ripple="false" button v-if="search.title">
           <mu-list-item-content>
             <mu-list-item-title v-if="search.title">{{search.title}}</mu-list-item-title>
             <div class="txt"><mu-list-item-sub-title v-if="search.abstract">
               {{search.abstract}}
             </mu-list-item-sub-title></div>
           </mu-list-item-content>
         </mu-list-item>
           <mu-divider></mu-divider>
         </div>
        </mu-list>
      </div>
</div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        num: 10,
        refreshing: false,
        loading: false,
        alldel: false,
        text: 'List',
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
      back() {
        this.$store.state.showsearch = false
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .search
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 103
    overflow: auto
    .topnav
      position: fixed
      display: flex
      width: 100%
      height: 78px
      z-index: 105
      background: red
      .back
        flex: 0 0 10%
        margin-left: 10px
        text-align: center
        line-height: 80px
      .searchbar
        flex: 0 0 60%
        margin-top: 20px
        margin-left: 25px
        height: 30px
        border-radius: 5px
        text-align: left
        background: #fff
        .search
          margin-top: 5px
          margin-left: 10px
        & > span
          display: inline-block
          margin-top: 3px
        & > input
          margin-left: 5px
          display: inline-block
          width: 85%
          height: 30px
          line-height: 30px
          vertical-align: top
          border-radius: 5px
          outline: none
          border: none
          font-size: 15px
      .btn
        flex: 1
        margin-top: 21px
        text-align: center
        & > button
          width: 50px
          height: 28px
          border: none
          border-radius: 4px
          background: #ccc
    .content
      margin-top: 80px
      .txt
        margin: 5px 15px
</style>
