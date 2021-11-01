/*
 * @Author: fengshuai
 * @Date: 2021-11-Mo 03:34:15
 * @Last Modified by:   fengshuai
 * @Last Modified time: 2021-11-Mo 03:34:15
 */
<template>
  <!-- <el-container>
    <el-main>
      aaas
    </el-main>
  </el-container> -->
  <div class="container">
    <div class="loginContainer">
      图片
    </div>
    <div class="userTitle">
      {{ store.state.user_name }}, 欢迎主人回来~ {{ time }}
    </div>
    <div class="titleSetting">
      设置
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'Header',
  setup() {
    const store = useStore()
    return { store }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
// .el-main {
//   // width: 100%;
//   color: var(--el-text-color-primary);
// }
.container {
  background: pink;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .loginContainer {
    width: 200px;
    background: lawngreen;
  }
  .userTitle {
    width: 50%;
  }
  .titleSetting {
    width: 60px;
    background: darkmagenta;
  }
}
</style>
