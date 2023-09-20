<!--
 * @Description: 
 * @Autor: feng
 * @Date: 2023-08-18 14:14:09
 * @LastEditors: feng
 * @LastEditTime: 2023-09-19 13:41:57
-->
<template>
  <el-container>
    <el-main>
      我的购物车
      <el-button @click="changeParam">修改传参</el-button>
      <testC :textMsg="textMsg"></testC>
    </el-main>
  </el-container>
</template>
<script>
import testC from '@/components/test.vue'
import { reactive } from 'vue'
export default {
  name: 'Cart',
  components: { testC },
  setup() {
    const textMsg = reactive({
      name: '李四',
      age: 12
    })
    const changeParam = () => {
      setTimeout(() => {
        textMsg.name = '张三'
        textMsg.age = 28
      }, 1000)
    }
    return { textMsg, changeParam }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
