import Router from 'vue-router'
import Leaderboard from '@/components/Leaderboard.vue'
import Canvas from '@/components/Canvas.vue'
import NewTop10Form from '@/components/NewTop10Form.vue'

export default new Router ({
  routes: [
    {
      path: '/',
      component: Canvas
    },
    {
      path:'/top10',
      component: Leaderboard
    },
    {
      path:'/youWon',
      component: NewTop10Form
    }
  ]
})
