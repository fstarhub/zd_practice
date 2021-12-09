import request from '../utils/request'

export default class goodsApi {
  // 查询所有商品
  static findAllGoods(data) {
    return request({
      url: '/goods/findAllGoods',
      method: 'get',
      params: data
    })
  }

  // 删除商品
  static delGoods(id) {
    return request({
      url: '/goods/' + id,
      method: 'delete'
    })
  }

  // 发布商品
  static publishItemGoods(data) {
    return request({
      url: '/goods/',
      method: 'post',
      data: data
    })
  }
}
