
<template>
  <div class="login-vue" :style="bg">
    <el-container>
      <el-main>
        <el-row :gutter="20" class="colClass">
          <el-col :span="7" :offset="4">
            <div class="grid-content bg-left">
              <p class="welcomeTitle">欢迎登陆呀码头商城</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-right">
              <p class="welcome">welcome</p>
              <el-form
                ref="loginformRef"
                class="loginFormClass"
                label-position="right"
                label-width="80px"
                :model="loginform"
                hide-required-asterisk
                @submit.prevent
              >
                <el-form-item
                  prop="account"
                  class="accountClass"
                  label="account"
                  :rules="[
                    {
                      required: true,
                      message: 'Please input account',
                      trigger: 'blur'
                    }
                  ]"
                >
                  <el-input
                    v-model="loginform.account"
                    placeholder="Please input account"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  class="clearfix"
                  label="password"
                  prop="password"
                  :rules="[
                    {
                      required: true,
                      message: 'Please input password',
                      trigger: 'blur'
                    }
                  ]"
                >
                  <el-input
                    v-model="loginform.password"
                    show-password
                    placeholder="Please input password"
                  ></el-input>
                </el-form-item>
                <el-form-item class="login_btn_box clearfix">
                  <el-button
                    class="register_btn"
                    native-type="submit"
                    plain
                    @click="register"
                  >
                    register
                  </el-button>
                  <el-button
                    class="login_btn"
                    type="primary"
                    native-type="submit"
                    @click="login"
                  >
                    Login
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

import userApi from '@/api/user.js'
export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const store = useStore()
    const accountError = ref('')
    const pwdError = ref('')
    const isShowLoading = false
    const bg = reactive({
      backgroundImage: ''
    })
    const loginform = reactive({
      account: '',
      password: ''
    })
    const register = async() => {
      router.push({
        path: 'register',
        params: {
          name: 'register'
        }
      })
    }
    const login = async() => {
      if (!loginform.account || !loginform.password) {
        ElMessage({
          message: '请输入账户名称和密码',
          type: 'warning'
        })
        return
      }
      const param = {
        user_name: loginform.account,
        password: loginform.password
      }
      const res = await userApi.login(param)
      if (res.message === '用户登录成功') {
        const token = res.result.token
        localStorage.setItem('token', token)
        store.commit('setLogin', res.result.userInfo)
        router.push({
          path: 'basicLayout',
          query: {
            name: '测试'
          }
        })
      } else {
        return ElMessage.error(res.message)
      }
    }

    //   loginformRef.value.validate(async(valid) => {
    //     if (valid) {
    //       const payload = {
    //         account: parseInt(loginform.account),
    //         password: loginform.password
    //       }
    //       const res = await userApi.userLogin(payload)
    //       if (res.code !== 200) {
    //         return ElMessage.error(res.msg)
    //       } else {
    //         const token = res.data.token
    //         localStorage.setItem('token', token)
    //         store.commit('setLogin', res.data)
    //         // router.push('/home')
    //         router.push({
    //           path: 'home',
    //           query: {
    //             name: 'zhangsan'
    //           }
    //         })
    //         ElMessage.success('login success !')
    //       }
    //     } else {
    //       ElMessage.error('validate fail !')
    //       return false
    //     }
    //   })
    // }
    onBeforeRouteLeave((to, from) => {
      console.log('jaja')
    })
    return { accountError, pwdError, isShowLoading, bg, loginform, register, login, onBeforeRouteLeave }
  },
  watch: {
    // $route: {
    //   handler(route) {
    //     this.redirect = route.query && route.query.redirect
    //   },
    //   immediate: true
    // }
  },
  created() {
    this.bg.backgroundImage = 'url(' + require('../../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
// @import "@styles/login.scss";
.login-vue {
  height: 100%;
  // width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
  .el-main {
    height: 100%;
    width: 100%;
  }
}

.grid-content {
  height: 400px;
}

.loginFormClass {
  padding: 30px 60px 10px 40px;
  // .el-form--label-top .el-form-item__label {
    color: #fff;
  // }
}
.bg-left {
  // background: url('../../assets/imgs/login_bg.jpg') no-repeat;
  background: pink;
  border-radius: 10px;
  .welcomeTitle {
    font-size: 20px;
    padding-top: 20px;
    text-align: center;
  }
}
.bg-right {
  // color: pink;
  background:rgba(255, 255, 255, .5);
  border-radius: 10px;
  color: #fff;
  .welcome {
    text-align: center;
    font-size: 30px;
    padding-top: 40px;
  }
}
.login_btn_box {
  // text-align: center;
  padding-top: 20px;
}
::v-deep .el-form-item__label {
  color: #fff;
  font-size: 15px;
}
::v-deep .el-input__inner {
  color: #fff;
  background: rgb(255,255,255,0);
}
.register_btn {
  background: rgba(255, 255, 255, .3);
  color: #fff;
}
.colClass {
  width: 100%;
  margin: 0 auto;
  margin-top: 8%;
}
// .login_btn {
//   width: 100px;
// }
</style>
