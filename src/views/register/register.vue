/*
 * @Author: fengshuai 
 * @Date: 2021-11-17 10:31:41 
 * @Last Modified by: fengshuai
 * @Last Modified time: 2021-11-17 10:32:30
 */

<template>
  <!-- <el-container style="background: pink"> -->
  <!-- <el-container :style="{ background: bg}"> -->
  <el-container class="elContainer">
    <el-main>
      <el-row :gutter="20" class="registerClass">
        <el-col v-if="needRegisterStatus" :span="8" :offset="8">
          <div class="grid-content bg-right">
            <p class="welcome">欢迎注册呀码头商城</p>
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
              <el-form-item
                class="clearfix"
                label="confirm"
                prop="confirm"
                :rules="[
                  {
                    required: true,
                    message: 'Please input confirm',
                    trigger: 'blur'
                  }
                ]"
              >
                <el-input
                  v-model="loginform.confirm"
                  show-password
                  placeholder="Please input confirm"
                ></el-input>
              </el-form-item>
              <el-form-item class="login_btn_box clearfix">
                <el-button
                  class="register_btn"
                  native-type="submit"
                  type="primary"
                  @click="register"
                >
                  register
                </el-button>
              </el-form-item>
              <div class="toLoginViewContainer">
                <i class="toLoginView" @click="toLoginPage">已有账号，去登录</i>
              </div>
            </el-form>
          </div>
        </el-col>
        <el-col v-else :span="8" :offset="8">
          <div class="grid-content bg-right registerSuccess">
            <p class="welcome">恭喜您成为呀码头小主</p>
            <el-button class="goRegistBtn" type="primary" @click="goToLogin">去登陆</el-button>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import { reactive, ref } from 'vue'
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ElMessage } from 'element-plus'

import userApi from '@/api/user.js'
export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const needRegisterStatus = ref(true)
    const loginform = reactive({
      account: '',
      password: '',
      confirm: ''
    })

    const register = async() => {
      if (!loginform.account || !loginform.password || !loginform.confirm) {
        return ElMessage({
          type: 'warning',
          message: '请填写注册信息以完成注册'
        })
      } else if (loginform.password !== loginform.confirm) {
        return ElMessage({
          type: 'warning',
          message: '请确认密码输入一致'
        })
      } else {
        const param = {
          user_name: loginform.account,
          password: loginform.confirm
        }
        const res = await userApi.register(param)
        if (res.message === '用户创建成功') {
          ElMessage({
            type: 'success',
            message: '注册成功'
          })
        }
        needRegisterStatus.value = false
      }
      // console.log(needRegisterStatus.value, 'qian')
      // needRegisterStatus.value = false
      // console.log(needRegisterStatus.value, 'hou')
    }

    const goToLogin = async() => {
      router.push({
        path: 'login',
        params: {
          name: 'loginform.account'
        }
      })
    }

    function toLoginPage() {
      router.push({
        path: 'login',
        params: {
          name: 'has account'
        }
      })
    }

    return { needRegisterStatus, loginform, register, goToLogin, toLoginPage }
  },
  data() {
    return {
      // bg: '#353434'
      bg: 'url(' + require('../../assets/imgs/login_bg1.jpg') + ')'
    }
  },
  created() {
    // this.bg.backgroundImage = 'url(' + require('../../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
  }
}
</script>

<style lang="scss" scoped>
.elContainer {
  height: 100%;
  background: url('../../assets/imgs/login_bg1.jpg') no-repeat;
  background-size: 100% 100%;
  .el-main {
    height: 100%;
    width: 100%;
    .el-row {
      width: 100%;
    }
  }
}
.registerClass {
  margin-top: 8%;
}
.bg-right {
  // text-align: center;
  background:rgba(255, 255, 255, .5);
  border-radius: 10px;
  // color: #fff;
}
.welcome {
  text-align: center;
  font-size: 30px;
  padding-top: 30px;
}
.loginFormClass {
  padding: 30px 60px 10px 40px;
  // .el-form--label-top .el-form-item__label {
    // color: #fff;
  // }
}
.register_btn {
  // background: rgba(255, 255, 255, .3);
  // color: #fff;
  width: 70%;
}
.goRegistBtn {
  margin: 20px auto;
}
.registerSuccess {
  text-align: center;
}
.toLoginViewContainer {
  text-align: center;
  .toLoginView {
    color: brown;
    cursor: pointer;
  }
}
</style>
