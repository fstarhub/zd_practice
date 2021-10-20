<template>
  <div class="login-vue" :style="bg">
    <div class="container">
      <p class="title">WELCOME</p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.account" prefix-icon="el-icon-s-custom" placeholder="用户名" />
          <!-- <p class="error">{{ accountError }}</p> -->
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.pwd"
            placeholder="密码"
            prefix-icon="el-icon-lock"
            show-password
            @blur="verifyPwd"
          />
          <p class="error">{{ pwdError }}</p>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isShowLoading"
            type="primary"
            @click="submit"
          >
            登 陆
          </el-button>
        </el-form-item>
      </el-form>
      <!-- <p class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p> -->
    </div>
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
    const form = reactive({
      account: '',
      pwd: ''
    })
    return { accountError, pwdError, isShowLoading, bg, form }
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
    verifyAccount() {
      // if (this.account !== 'admin') {
      //     this.accountError = '账号为admin'
      // } else {
      //     this.accountError = ''
      // }
    },
    verifyPwd() {
      // if (this.pwd !== 'admin') {
      //     this.pwdError = '密码为admin'
      // } else {
      //     this.pwdError = ''
      // }
    },
    // register() {

    // },
    // forgetPwd() {

    // },
    submit() {
      this.$axios({
        url: 'http://localhost:9999/auth/auth/login',
        params: {
          account: this.account,
          password: this.pwd
        }
      }).then(response => {
        if (response.data.code === 0) {
          this.isShowLoading = true
          // 登陆成功 设置用户信息
          localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
          localStorage.setItem('userName', response.data.data.user.name)
          // 登陆成功 假设这里是后台返回的 token
          localStorage.setItem('token', response.data.data.token)
          this.$router.push({ path: this.redirect || '/' })
        } else {
          if (response.data.code === 4000003) {
            this.accountError = response.data.msg
            this.pwdError = ''
          }
          if (response.data.code === 4000004) {
            this.accountError = ''
            this.pwdError = response.data.msg
          }
        }
      })
    }
  }
}
</script>

//页面样式
<style scoped>
.login-vue {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.login-vue .container {
  background: rgba(255, 255, 255, 0.5);
  width: 300px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
}
.login-vue .ivu-input {
  background-color: transparent;
  color: #fff;
  outline: #fff;
  border-color: #fff;
}
.login-vue ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue .title {
  font-size: 16px;
  margin-bottom: 20px;
}
.login-vue .input-c {
  margin: auto;
  width: 200px;
}
.login-vue .error {
  color: red;
  text-align: left;
  margin: 5px auto;
  font-size: 12px;
  padding-left: 30px;
  height: 20px;
}
.login-vue .submit {
  width: 200px;
}
.login-vue .account {
  margin-top: 30px;
}
.login-vue .account span {
  cursor: pointer;
}
.login-vue .ivu-icon {
  color: #eee;
}
.login-vue .ivu-icon-ios-close-circle {
  color: #777;
}
</style>
