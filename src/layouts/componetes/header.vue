<!--
 * @Description:
 * @Autor: fengshuai
 * @Date: 2021-11-01 15:34:13
 * @LastEditors: feng
 * @LastEditTime: 2023-08-24 14:16:29
-->

<template>
  <!-- <el-container>
    <el-main>
      aaas
    </el-main>
  </el-container> -->
  <div class="container">
    <div class="loginContainer" @click="goHome">
      <img src="../../assets/imgs/newLogo.png" alt="洋码头">
    </div>
    <!-- <div class="userTitle">
      <span>你好，</span><span class="userName">{{ store.state.userInfo.user_name }}</span>, 欢迎回来哦！今天是 <u class="loginTime">{{ time }}</u>
    </div> -->
    <ul class="headMenu">
      <li v-for="item in store.state.headMenu" :key="item.path">
        <el-button class="menuItem" @click="goToMenu(item)">
          {{ item.title }}
        </el-button>
      </li>
    </ul>
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

    <el-dialog v-model="personDialogVisible" title="个人信息" width="30%" center>
      <!-- <span>您的账号在{{ 2020-11-11/ }}号注册，目前是可用状态！</span> -->
      <div class="contentB">
        <p>今天是 {{ time }}</p>
        <span>您的账号在 {{ createTime }} 注册，至今已经{{ userLiveDays }}天，目前是可用状态！</span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <!-- <el-button @click="personDialogVisible = false">Cancel</el-button> -->
          <el-button type="primary" @click="personDialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="modifyPWDDialogVisible" title="个人信息" width="30%" center>
      <el-form ref="modifyformRef" :model="modifyform" label-width="120px">
        <el-form-item prop="password" label="请输入新密码：">
          <el-input v-model="modifyform.password"></el-input>
        </el-form-item>
      </el-form>
      
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="modifyPWDCancel">取 消</el-button>
          <el-button type="primary" @click="modifyPWDConfirem">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { ref, onMounted, reactive, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import moment from 'moment'
import { ArrowDown } from '@element-plus/icons'
import { ElMessageBox, ElMessage } from 'element-plus'

import userApi from '@/api/user.js'
export default {
  name: 'Header',
  components: {
    ArrowDown
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const time = ref(moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss'))
    const createTime = ref()
    const userLiveDays = ref()

    const personDialogVisible = ref(false)
    const modifyPWDDialogVisible = ref(false)
    const modifyform = reactive({
      password: ''
    })

    onMounted(() => {
      // time.value = moment(new Date()).format('YYYY年MM月DD')
      // console.log(store.state, 'store')
    })

    const liveDays0 = computed(() => {
      // return createTime.diff(time, 'day')
      return '测试'
    })
    // watchEffect(() => {
    //   if (createTime) {
    //     userLiveDays = 4
    //   }
    // })

    const handleClick = () => {
      alert('button click')
    }
    const myInfo = () => {
      personDialogVisible.value = true
      // time.value = moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss')
      userApi.getCurrentUser({ user_name: store.state.userInfo.user_name }).then(res => {
        if (res.code === 0) {
          createTime.value = moment(res.result.createdAt).format('YYYY年MM月DD日 HH:mm:ss')
          userLiveDays.value = moment().diff(moment(res.result.createdAt), 'day')
        }
      })
    }
    const resetPassword = () => {
      // alert(store.state.token)
      modifyPWDDialogVisible.value = true
    }
    const modifyPWDCancel = () => {
      modifyPWDDialogVisible.value = false
      modifyform.password = ''
    }
    const modifyPWDConfirem = () => {
      ElMessageBox.confirm(
        '确认修改当前账号的密码吗？修改后将重新登录',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async() => {
          const res = await userApi.modifyPassword({ password: modifyform.password })
          console.log(res, 'ewewewe')
          if (res.message === '修改密码成功') {
            router.push({
              path: '/',
              query: {
                name: '已退出登录'
              }
            })
            ElMessage({
              type: 'info',
              message: '您已退出系统'
            })
          }
        })
        .catch(() => {
          modifyPWDDialogVisible.value = false
          modifyform.password = ''
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        })     
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
          router.push({
            path: '/',
            query: {
              name: '退出登录'
            }
          })
          ElMessage({
            type: 'info',
            message: '您已退出系统'
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        })
    }

    onBeforeRouteLeave((to, from, next) => {
      console.log('路由导航-退出登录')
      store.commit('setLogout', '')
      next()
    })

    const goToMenu = (itemMenu) => {
      // console.log(itemMenu)
      router.push({
        path: itemMenu.path,
        // query: {
        //   name: 'lisi'
        // }
      })
    }

    const goHome = () => {
      router.replace({
        path: '/basicLayout',
      })
    }

    return { store, time, createTime, liveDays0, userLiveDays, personDialogVisible, modifyPWDDialogVisible, modifyform, handleClick, myInfo, resetPassword, loginOut, modifyPWDConfirem, modifyPWDCancel, goToMenu, goHome }
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
    cursor: pointer;
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

  .headMenu {
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titleSetting {
    width: 100px;
    // background: darkmagenta;
  }
}
</style>
