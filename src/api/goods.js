import request from '../utils/request'

export default class goodsApi {
  static findAllGoods(data) {
    return request({
      url: '/goods/findAllGoods',
      method: 'get',
      params: data
    })
  }
}
