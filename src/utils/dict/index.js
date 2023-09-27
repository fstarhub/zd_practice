/*
 * @Description: 字典查询插件 
 * @Autor: feng
 * @Date: 2023-08-18 14:14:09
 * @LastEditors: feng
 * @LastEditTime: 2023-09-27 16:01:15
 */
import Vue from 'vue'
import DictApi from '@/api/dictApi'

class Dict {
  constructor(dict) {
    this.dict = dict
  }

  async init(names) {
    const ps = []
    names.forEach(name => {
      Vue.set(this.dict, name, [])
      ps.push(
        DictApi.getOptions({ typeId: name }).then(res => {
          this.dict[name] = Object.freeze(res.data)
        })
      )
    })
    await Promise.all(ps)
  }
}

const install = function(Vue) {
  Vue.mixins({
    data() {
      if (this.$options.dicts instanceof Array && this.$options.dicts.length > 0) {
        return { dict: {}}
      } else {
        return {}
      }
    },
    created() {
      if (this.$options.dicts instanceof Array && this.$options.length > 0) {
        new Dict(this.dict).init(this.$options.dicts)
      }
    }
  })
}

export default {
  install
}
