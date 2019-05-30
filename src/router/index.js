import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/homepage/HomePage.vue'
import HotPage from './../components/homepage/HotPage.vue'
import Watermelon from './../components/watermelon/Watermelon.vue'
import MinVideo from './../components/minVideo/MinVideo.vue'
import Personal from './../components/personal/Personal.vue'
import NewsPage from './../components/news/NewsPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/homepage', name: 'homepage', component: HomePage},
    {path: '/hotpage', name: 'HotPage', component: HotPage},
    {path: '/watermelon', name: 'watermelon', component: Watermelon},
    {path: '/minVideo', name: 'minVideo', component: MinVideo},
    {path: '/personal', name: 'personal', component: Personal},
    {path: '/Newspage', name: 'NewsPage', component: NewsPage}
  ]
})
