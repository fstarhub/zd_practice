import request from '../utils/request'

export default class userApi {
  static login(data) {
    request({
      url: 'users/login',
      method: 'post',
      data: data
    })
  }

  static test() {
    console.log('ceshi')
  }
}
