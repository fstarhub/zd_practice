
import { loginView } from '../layouts/index'
const userRoute = [
  {
    path: '/',
    component: loginView,
    // redirect: '/index',
    // children: [
    //   {
    //     path: 'login',
    //     name: 'login',
    //     component: () => import('@/views/login/login'),
    //     meta: { title: '登录', noCache: false }
    //   },
    // ]
  },
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/login'),
  //   children: [
  //     {
  //       path: 'login',
  //       component: () => import('@/views/Exception/NoRole'),
  //       name: 'login',
  //     }

  //   ]
  // },
]

export default userRoute