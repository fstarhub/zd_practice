<!--
 * @Description: 测试组件
 * @Autor: feng
 * @Date: 2023-09-19 10:29:30
 * @LastEditors: feng
 * @LastEditTime: 2023-09-19 15:42:26
-->
<template>
  <div>
    <p>测试script setup标签创建得ref：{{ setupScript }}</p>
    <!-- <div>title：{{ title }}</div> -->
    <div>组件接收得props：name: {{ textMsg.name }}, age: {{ textMsg.age }}</div>
    <p>count: {{ count }}, count值加2乘5: {{ result }}</p>
    <p>watch: count值加1：{{ plusOne }},----,count值加2：{{ plusTow }}</p>
    <el-button @click="changeCount">修改数据</el-button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '33'
    },
    textMsg: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<script setup>
import { ref, computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, watch, watchEffect } from 'vue'
const setupScript = ref('setup就是我')
const count = ref(1)
const result = ref(0)
const plusOne = computed(() => { return count.value + 1 })
const plusTow = computed({
  get: () => count.value + 2,
  set: (value) => {
    console.log(value, 'val')
    result.value = value + 3
  }
})
const changeCount = () => {
  count.value = count.value + 1
}
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal, 'newVal, OldVal')
})
// watchEffect 也是一个帧听器，是一个副作用函数。 它会监听引用数据类型的所有属性，
// 不需要具体到某个属性，一旦运行就会立即监听，组件卸载的时候会停止监听
watchEffect(() => {
  console.log(count.value, 'count')
})
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUnmount(() => {
  console.log('onUnmounted')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>
<style lang="less" scoped>
</style>
