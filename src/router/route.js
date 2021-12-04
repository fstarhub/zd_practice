
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
        path: 'publishGoods',
        component: () => import('@/views/goods/publishGoods/index')
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/register/register')
  }
]

export default userRoute
