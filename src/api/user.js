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

  static test() {
    console.log('ceshi')
  }
}
