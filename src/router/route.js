
import { basicLayout, blankLayout, loginView } from '../layouts/index'
const userRoute = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/basicLayout',
    component: basicLayout,
    redirect: '/basicLayout/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'allGoods',
        component: () => import('@/views/goods/allGoods/index')
      },
      {
        path: 'uploadGoods',
        component: () => import('@/views/goods/uploadGoods/index')
      },
      {
        path: 'publishGoods',
        component: () => import('@/views/goods/publishGoods/index')
      },
      {
        path: 'maintainGoods',
        component: () => import('@/views/goods/maintainGoods/index')
      },
      {
        path: 'cart',
        component: () => import('@/views/person/cart/cart')
      },
      {
        path: 'order',
        component: () => import('@/views/person/order/order')
      },
      {
        path: 'address',
        component: () => import('@/views/person/address/address')
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/register/register')
  }
]

export default userRoute
