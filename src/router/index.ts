/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-11 11:04:10
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-14 14:46:50
 * @FilePath: \file-storage\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD
 */
import { createRouter, createWebHistory } from 'vue-router'
import dashboard from './modules/dashboard'
import file from './modules/file'
import three from './modules/three'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      redirect: '/dashboard',
      component: () => import('@/layouts/Layout.vue'),
      children: [...dashboard, ...file, ...three]
    }
  ]
})

export default router
