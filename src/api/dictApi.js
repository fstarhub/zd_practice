/*
 * @Description: 字典查询api
 * @Autor: feng
 * @Date: 2023-09-27 15:56:52
 * @LastEditors: feng
 * @LastEditTime: 2023-09-27 16:07:37
 */
import request from '../utils/request'

export default class dictApi {
  // 查询所有商
  static getOptions(param) {
    return request({
      url: '/users/getOptions',
      method: 'post',
      data: param
    })
  }
}
