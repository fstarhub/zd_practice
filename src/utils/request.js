import axios from 'axios'
import qs from 'qs'

import store from '../store/index'
import { ElMessage } from 'element-plus'
//*  nprogress 进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '/'
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = ''
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'http://api.123dailu.com/'
// }

// let Inc = (new Date()).getTime()

const http = axios.create({
  baseURL: window.location.origin, // 配置 baseURL
  timeout: 3000, // 配置请求超时时间
  // headers: {
  //   'Content-Type': 'application/json;charset=UTF-8;',
  // },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

// 请求超时时间
// http.defaults.timeout = 3000

// post请求头
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
http.interceptors.request.use((config) => {
  Nprogress.start()
  // console.log('请求之前', config)
  // get请求添加一个去缓存变量
  // if (config.method === 'get') {
  //   Inc += 1
  //   if (config.params) {
  //     config.params._ = Inc
  //   } else {
  //     config.params = {
  //       _: Inc
  //     }
  //   }
  // } else {
  //   config.data = qs.stringify(config.data)
  // }

  // 登录流程控制中，根据本地是否存在token判断用户的登录情况
  // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
  // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
  // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
  const token = store.state.token
  console.log(token, 'token')
  token && (config.headers.Authorization = token)
  return config
}, (error) => {
  // 请求发生错误的业务逻辑
  console.log('请求发生错误')
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
  Nprogress.done()
  // 对响应数据的处理
  // 如果后端响应的状态不是200，那么直接抛出异常
  // console.log(response, 'resonsole')
  return response.data
}, (error) => {
  console.log(error, 'eroor')
  // 异常处理
  if (error.response.code) {
    // 响应错误
    const status = error.response.code
    // 根据不同的状态码，提示不同的信息
    switch (status) {
      case 404:
        ElMessage.error('你访问的网页不存在')
        break
      case 401:
        ElMessage.error('身份验证失败')
        break
      case 403:
        ElMessage.error('登录过期')
        break
      default:
        ElMessage.error(`连接错误，${status}`)
        console.log(error.response.data.msg) // 其他的错误，抛出错误提示
    }
    // return Promise.reject(error)
  } else {
    // 超时处理
    if (JSON.stringify(error.include('timeout'))) {
      ElMessage({
        type: 'warning',
        message: '服务器响应超时，请重新刷新页面'
      })
    }
  }

  // return Promise.resolve(error.response)
})

export default http
