import axios from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'
//*  nprogress 进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

let Inc = (new Date()).getTime()

const http = axios.create({
  baseURL: window.location.origin, // 配置 baseURL
  timeout: 3000, // 配置请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})
// 请求拦截器
http.interceptors.request.use((config) => {
  Nprogress.start()
  console.log('请求之前', config)
  // get请求添加一个去缓存变量
  if (config.method === 'get') {
    Inc += 1
    if (config.params) {
      config.params._ = Inc
    } else {
      config.params = {
        _: Inc
      }
    }
  } else {
    config.data = qs.stringify(config.data)
  }
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
  return response.data
}, (error) => {
  console.log(error, 'eroor')
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
        console.log(error.response.data.msg) // 其他的错误，抛出错误提示
    }
    return Promise.reject(error)
  }
})

export default http
