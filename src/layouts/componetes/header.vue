<!--
 * @Description:
 * @Autor: fengshuai
 * @Date: 2021-11-01 15:34:13
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-03 09:09:23
-->

<template>
  <!-- <el-container>
    <el-main>
      aaas
    </el-main>
  </el-container> -->
  <div class="container">
    <div class="loginContainer">
      <img src="../../assets/imgs/logo.webp" alt="呀码头">
    </div>
    <div class="userTitle">
      <span class="userName">你好，{{ store.state.user_name }}</span>, 欢迎回来哦！今天是 <u class="loginTime">{{ time }}</u>
    </div>
    <div class="titleSetting">
      <el-dropdown>
        <span class="el-dropdown-link">
          设置<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="myInfo">我的信息</el-dropdown-item>
            <el-dropdown-item @click="resetPassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import moment from 'moment'
import { ArrowDown } from '@element-plus/icons'
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  name: 'Header',
  components: {
    ArrowDown
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const time = ref()

    onMounted(() => {
      time.value = moment(new Date()).format('YYYY-MM-DD')
      // console.log(store, 'store')
    })

    const handleClick = () => {
      alert('button click')
    }
    const myInfo = () => {
      alert('我的信息')
    }
    const resetPassword = () => {
      alert('修改密码')
    }
    const loginOut = () => {
      ElMessageBox.confirm(
        '确认要退出当前登录账号吗',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          localStorage.setItem('token', '')
          store.commit('setLogout', '')
          router.push({
            path: '/',
            query: {
              name: '退出登录'
            }
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        })
    }

    return { store, time, handleClick, myInfo, resetPassword, loginOut }
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
  // background: #7e3dff;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .loginContainer {
    width: 200px;
    // background: lawngreen;
    img {
      width: 200px;
      height: 50px;
    }
  }
  .userTitle {
    width: 50%;
    .userName {
      font-size: 18px;
      font-weight: 800;
      color: #00FA9A;
    }
    .loginTime {
      color: fuchsia;
    }
  }
  .titleSetting {
    width: 100px;
    // background: darkmagenta;
  }
}
</style>
