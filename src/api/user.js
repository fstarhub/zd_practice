import request from '../utils/request'

export default class userApi {
  static login(data) {
    request({
      url: '111',
      data: data
    })
  }

  static test() {
    console.log('ceshi')
  }
}
