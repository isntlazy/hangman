import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import PlayerMode from '@/components/PlayerMode'
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
      path: '/player_game',
      name: 'PlayerMode',
      component: PlayerMode
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
