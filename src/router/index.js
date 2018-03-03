import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TaskDetail from '@/components/TaskDetail'
import TaskPost from '@/components/TaskPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: TaskDetail
    },
    {
      path: '/post',
      name: 'post',
      component: TaskPost
    }
  ]
})
