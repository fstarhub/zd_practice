import Vue from 'vue'

class Dict {
  constructor(dict) {
    this.dict = dict
  }

  async init(names) {
    const ps = []
    names.forEach(name => {
      vue
    })
  }
}

const install = function(Vue) {
  Vue.mixins({
    data() {
      if (this.$options.dicts instanceof Array && this.$options.dicts.length > 0) {
        return { dict: {} }
      } else {
        return {}
      }
    },
    created() {

    }
  })
}

export default {
  install
}