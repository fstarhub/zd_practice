
import { basicLayout, blankLayout, loginView } from '../layouts/index'
const userRoute = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/home',
    component: basicLayout
  },
  {
    path: '/register',
    component: () => import('@/views/register/register')
  }
]

export default userRoute
