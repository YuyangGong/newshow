import Vue from 'vue'
import Router from 'vue-router'

// lazy load components
const loginPage = () => import('../views/login')
const registerPage = () => import('../views/register')
const passwordForgetPage = () => import('../views/password-forget')
const photoAlbumPage = () => import('../views/photo-album')
const bestPhotoPage = () => import('../views/photo-best')
const photoDetailPage = () => import('../views/photo-detail')
const photoWallPage = () => import('../views/photo-wall')
const userHomePage = () => import('../views/user-home')
// const managerPage = () => import('../views/manager-page')

Vue.use(Router)

export default new Router({
  routes: [
    // default redirect to home
    {
      path: '/',
      redirect: '/photo-wall'
    },
    // home page(photo wall)
    {
      path: '/home',
      name: 'home',
      component: photoWallPage
    },
    // login
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    // register
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    // forget password page
    {
      path: '/password-forget',
      name: 'password-forget',
      component: passwordForgetPage
    },
    // photo wall
    {
      path: '/photo-wall',
      name: 'photo-wall',
      component: photoWallPage
    },
    // photo album
    {
      path: '/photo-album',
      name: 'photo-album',
      component: photoAlbumPage
    },
    // best photo page
    {
      path: '/best-photo',
      name: 'best-photo',
      component: bestPhotoPage
    },
    // photo detail page
    {
      path: '/photo/:photoid',
      name: 'photo-detail',
      component: photoDetailPage
    },
    // user home page
    {
      path: '/user/:userid',
      name: 'user-home',
      component: userHomePage
    }
    // ,
    // {
    //   path: '/manager',
    //   name: 'manager-page',
    //   component: managerPage
    // }
  ]
})
