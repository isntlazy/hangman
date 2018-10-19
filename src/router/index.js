import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Game from '@/components/Game'
import GameOver from '@/components/GameOver'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/game_over',
      name: 'GameOver',
      component: GameOver
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
