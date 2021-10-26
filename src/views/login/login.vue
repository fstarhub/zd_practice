<template>
  <div class="login-vue" :style="bg">
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6">
            <div class="grid-content bg-left">
              <p class="welcomeTitle">欢迎登陆呀码头商城</p>
            </div>
          </el-col>
          <el-col :span="6">
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
    const loginformRef = ref(null)
    const loginform = reactive({
      account: '',
      password: ''
    })
    const login = async() => {
      // router.push({
      //   path: 'home',
      //   query: {
      //     name: 'zhangsan'
      //   }
      // })
      const param = {
        account: loginform.account,
        password: loginform.password
      }
      const res = await userApi.login(param)
      console.log(res, 'res')
      // loginformRef.value.validate(async(valid) => {
      //   if (valid) {
      //     const payload = {
      //       account: parseInt(loginform.account),
      //       password: loginform.password
      //     }
      //     const res = await userApi.userLogin(payload)
      //     if (res.code !== 200) {
      //       return ElMessage.error(res.msg)
      //     } else {
      //       const token = res.data.token
      //       localStorage.setItem('token', token)
      //       store.commit('setLogin', res.data)
      //       // router.push('/home')
      //       router.push({
      //         path: 'home',
      //         query: {
      //           name: 'zhangsan'
      //         }
      //       })
      //       ElMessage.success('login success !')
      //     }
      //   } else {
      //     ElMessage.error('validate fail !')
      //     return false
      //   }
      // })
    }
    // async function login() {
    //   // const res = await userLogin(payload)
    //   // router.push({
    //   //   path: 'home',
    //   //   query: {
    //   //     name: 'zhangsan'
    //   //   }
    //   // })

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
    return { accountError, pwdError, isShowLoading, bg, loginform, login, onBeforeRouteLeave }
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.bg.backgroundImage = 'url(' + require('../../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
  },
  methods: {
    // login() {

    // },
    register() {
      console.log('jjaajaj')
      // console.log(this.$router, 'router', this.$route, 'route')
      // userApi.test()
      console.log(window.location.origin, 'oriigns')
    }
    // submit() {
    //   this.$axios({
    //     url: 'http://localhost:9999/auth/auth/login',
    //     params: {
    //       account: this.account,
    //       password: this.pwd
    //     }
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       this.isShowLoading = true
    //       // 登陆成功 设置用户信息
    //       localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
    //       localStorage.setItem('userName', response.data.data.user.name)
    //       // 登陆成功 假设这里是后台返回的 token
    //       localStorage.setItem('token', response.data.data.token)
    //       this.$router.push({ path: this.redirect || '/' })
    //     } else {
    //       if (response.data.code === 4000003) {
    //         this.accountError = response.data.msg
    //         this.pwdError = ''
    //       }
    //       if (response.data.code === 4000004) {
    //         this.accountError = ''
    //         this.pwdError = response.data.msg
    //       }
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
// @import "@styles/login.scss";
.login-vue {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // color: #fff;
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
.login_btn {
  width: 100px;
}
</style>
