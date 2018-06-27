import Vue from 'vue'
import Router from 'vue-router'
import Player from '@/components/Player'
import Wasif from '@/components/Wasif'
import Captain from '@/components/Captain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Player',
      component: Player
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    {
      path: '/captain',
      name: 'Captain',
      component: Captain
    },
    {
      path: '/wasif',
      name: 'Wasif',
      component: Wasif
    }
  ]
})
