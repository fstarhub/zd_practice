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
                label-position="top"
                label-width="100px"
                :model="loginform"
                hide-required-asterisk
                @submit.prevent
              >
                <el-form-item
                  prop="account"
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
                    class="login_btn"
                    native-type="submit"
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
export default {
  name: 'Login',
  setup() {
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
    return { accountError, pwdError, isShowLoading, bg, loginform }
  },
  data() {
    return {
      aa: ''
    }
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
    login() {},
    register() {
      console.log('jjaajaj')
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
// .login-vue .container {
//   background: rgba(255, 255, 255, 0.5);
//   width: 300px;
//   text-align: center;
//   border-radius: 10px;
//   padding: 30px;
// }
// .login-vue .ivu-input {
//   background-color: transparent;
//   color: #fff;
//   outline: #fff;
//   border-color: #fff;
// }
// .login-vue ::-webkit-input-placeholder {
//   /* WebKit, Blink, Edge */
//   color: rgba(255, 255, 255, 0.8);
// }
// .login-vue :-moz-placeholder {
//   /* Mozilla Firefox 4 to 18 */
//   color: rgba(255, 255, 255, 0.8);
// }
// .login-vue ::-moz-placeholder {
//   /* Mozilla Firefox 19+ */
//   color: rgba(255, 255, 255, 0.8);
// }
// .login-vue :-ms-input-placeholder {
//   /* Internet Explorer 10-11 */
//   color: rgba(255, 255, 255, 0.8);
// }
// .login-vue .title {
//   font-size: 16px;
//   margin-bottom: 20px;
// }
// .login-vue .input-c {
//   margin: auto;
//   width: 200px;
// }
// .login-vue .error {
//   color: red;
//   text-align: left;
//   margin: 5px auto;
//   font-size: 12px;
//   padding-left: 30px;
//   height: 20px;
// }
// .login-vue .submit {
//   width: 200px;
// }
// .login-vue .account {
//   margin-top: 30px;
// }
// .login-vue .account span {
//   cursor: pointer;
// }
// .login-vue .ivu-icon {
//   color: #eee;
// }
// .login-vue .ivu-icon-ios-close-circle {
//   color: #777;
// }

.grid-content {
  height: 400px;
}

.loginFormClass {
  padding: 20px 100px;
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
    padding-top: 20px;
  }
}
.login_btn_box {
  text-align: center;
  margin-top: 50px;
}
.el-form-item__label {
  color: #fff;
  font-size: 15px;
}
.login_btn {
  width: 100px;
}
</style>
