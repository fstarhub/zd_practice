<!--
 * @Description: 左侧边栏
 * @Autor: fengshuai
 * @Date: 2021-11-01 10:05:46
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-03 09:03:52
-->

<template>
  <el-container>
    <el-main>
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group> -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="4" @click="goHomePage">
          <el-icon><document /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品</span>
          </template>
          <el-menu-item index="1-1" @click="allGoodsPageMenu">所有商品</el-menu-item>
          <!-- <el-menu-item index="1-2" @click="UploadPageMenu">上传商品</el-menu-item> -->
          <el-menu-item index="1-3" @click="publishPageMenu">商品发布</el-menu-item>
          <el-menu-item index="1-4" @click="maintainPageMenu">商品维护</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>与我相关</span>
          </template>
          <el-menu-item index="2-1">收获地址</el-menu-item>
          <el-menu-item index="2-2">订单信息</el-menu-item>
          <!-- <el-menu-item index="2-3">商品3</el-menu-item> -->
        </el-sub-menu>
      </el-menu>
    </el-main>
  </el-container>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons'
export default {
  name: 'Aside',
  components: {
    Location,
    IconMenu,
    Document
  },
  setup() {
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const router = useRouter()

    const goHomePage = () => {
      router.push({
        path: '/basicLayout',
        query: 'home'
      })
    }

    const allGoodsPageMenu = () => {
      router.push({
        path: '/basicLayout/allGoods',
        query: 'publish'
      })
    }

    const UploadPageMenu = () => {
      router.push({
        path: '/basicLayout/uploadGoods',
        query: 'upload'
      })
    }

    const publishPageMenu = () => {
      router.push({
        path: '/basicLayout/publishGoods',
        query: 'publish'
      })
    }

    const maintainPageMenu = () => {
      router.push({
        path: '/basicLayout/maintainGoods',
        query: 'maintain'
      })
    }

    return { isCollapse, handleOpen, handleClose, allGoodsPageMenu, goHomePage, UploadPageMenu, publishPageMenu, maintainPageMenu }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.el-radio-group {
  margin: 10px auto 10px 10px;
}
.el-menu-item-group__title {
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
  min-height: auto;
  background-color:#87CEEB;
}
::v-deep.el-main {
  background: #AFEEEE;
}
::v-deep.el-sub-menu .el-menu {
  background-color: #AFEEEE;
}
</style>

