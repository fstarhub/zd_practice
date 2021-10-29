<!--
 * @Description: 欢迎页layout
 * @Autor: fengshuai
 * @Date: 2021-10-26 08:50:53
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-10-27 09:10:13
-->
<template>
  <el-container>
    <el-header>
      {{ store.state.user_name }}, 欢迎主人回来~ {{ time }}
    </el-header>
    <el-container>
      <el-aside width="200px">
        菜单栏
      </el-aside>
      <el-container class="contentContainer">
        <router-view></router-view>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import moment from 'moment'
export default {
  name: 'BasicLayout',
  setup() {
    const store = useStore()
    const time = ref()
    const state = reactive({
      user_name: ''
    })

    onMounted(() => {
      time.value = moment(new Date()).format('YYYY-MM-DD')
      // console.log(store, 'store')
    })

    return { time, state, store }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-container {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  // text-align: center;
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  // line-height: 160px;
}

// body > .el-container {
//   margin-bottom: 40px;
// }

.contentContainer {
  padding: 20px;
}
</style>
