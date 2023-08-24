/*
 * @Description: 用户接口类
 * @Autor: feng
 * @Date: 2023-08-18 14:14:09
 * @LastEditors: feng
 * @LastEditTime: 2023-08-22 14:57:55
 */
import request from '../utils/request'

export default class userApi {
  static login(data) {
    return request({
      url: '/users/login',
      method: 'post',
      data: data
    })
  }
  static register(data) {
    return request({
      url: '/users/register',
      method: 'post',
      data: data
    })
  }
  static modifyPassword(data) {
    return request({
      url: '/users/',
      method: 'patch',
      data: data
    })
  }
  static getCurrentUser(data) {
    return request({
      url: '/users/findCurrent',
      method: 'get',
      params: data
    })
  }

  static test() {
    console.log('ceshi')
  }
}
