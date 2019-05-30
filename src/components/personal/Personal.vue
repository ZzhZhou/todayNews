<template>
    <div class="person">
      <div class="image">
        <span class="login"><b>登 录</b></span>
      </div>
      <mu-list>
        <mu-divider />
      </mu-list>
      <div class="tab">
        <mu-container>
          <mu-bottom-nav color="red" value="0">
            <mu-bottom-nav-item title="我的收藏" icon="star" color="yellow"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="我的评论" icon="chat_bubble_outline"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="我的点赞" icon="thumb_up"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="浏览历史" icon="schedule"></mu-bottom-nav-item>
          </mu-bottom-nav>
        </mu-container>
      </div>
      <div class="list">
        <mu-paper :z-depth="1" class="demo-list-wrap">
          <mu-list toggle-nested>
            <mu-list-item button :ripple="true" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
              <mu-list-item-title>我的关注</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="true" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
              <mu-list-item-title>消息通知</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="true" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
              <mu-list-item-title>阅读公益</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="true" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
              <mu-list-item-title>我的钱包</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="true" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
              <mu-list-item-title>京东特供</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="true" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
              <mu-list-item-title>用户反馈</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
          </mu-list>
        </mu-paper>
      </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        open: 'send'
      }
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .person
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 100
    .image
      width: 200px
      height: 200px
      .login
        position: absolute
        top: 56px
        left: 127px
        display: inline-block
        padding: 30px
        width: 120px
        height: 120px
        border: none
        font-size: 20px
        border-radius: 50%
        background: #e80e0d
        line-height: 60px
        text-align: center
        color: #fff
    .tab
      position: absolute
      left: 0
      bottom: 380px
      width: 100%
    .list
      position: absolute
      bottom: 56px
      width: 100%
</style>
