import axios from "axios"
import storage from './storage'
/**
 * 
 * @param {请求地址} url 
 * @param {请求方式} method 
 * @param {入参} options 
 * @param {文件名} filename 
 * @returns 
 */
export function exportExcel(url, method, options = {}, filename) {
  return new Promise((resolve, reject) => {
    axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8'
    axios.defaults.headers['Authorization'] = storage.getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    axios.defaults.headers["accessToken"] = storage.getToken()
    axios({
      url: process.env.VUE_APP_BASE_API + url,
      method: method,
      data: options,
      responseType: 'arraybuffer'
    }).then(response => {
      resolve(response.data)
      let blob = new Blob([response.data], {
        type: 'application/octet-stream'
      })
      let fileName = filename + '.xlsx'
      if (window.navigator.msSaveOrOpenBlob) {
        // console.log(2)
        navigator.msSaveBlob(blob, fileName)
      } else {
        // console.log(3)
        var link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        //释放内存
        document.body.removeChild(link) // 下载完成移除元素
        window.URL.revokeObjectURL(link.href)
      }
      
    }).catch((err) => {
    })
  })
}

export function exportWord(url, method, options = {}, filename) {
  return new Promise((resolve, reject) => {
    axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8'
    axios.defaults.headers['Authorization'] = storage.getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    axios.defaults.headers["accessToken"] = storage.getToken()
    axios({
      url: process.env.VUE_APP_BASE_API + url,
      method: method,
      data: options,
      responseType: 'blob',
    }).then(response => {
      resolve(response.data)
      let blob = new Blob([response.data], {
        type: 'application/octet-stream'
      })
      let fileName = filename
      if (window.navigator.msSaveOrOpenBlob) {
        // console.log(2)
        navigator.msSaveBlob(blob, fileName)
      } else {
        // console.log(3)
        var link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        //释放内存
        document.body.removeChild(link) // 下载完成移除元素
        window.URL.revokeObjectURL(link.href)
      }
      
    }).catch((err) => {
    })
  })
}