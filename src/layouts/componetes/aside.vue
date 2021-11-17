<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-11-01 10:05:46
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-11-17 11:04:14
-->

<template>
  <el-container>
    <el-main>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>我的发布</span>
          </template>
          <el-menu-item index="1-1">已发布</el-menu-item>
          <el-menu-item index="1-2">未发布</el-menu-item>
          <el-menu-item index="1-3">发布设置</el-menu-item>
          <el-menu-item index="1-4">发布提醒</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>我的商品</span>
          </template>
          <el-menu-item index="2-1">商品1</el-menu-item>
          <el-menu-item index="2-2">商品2</el-menu-item>
          <el-menu-item index="2-3">商品3</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-main>
  </el-container>
</template>
<script>
import { ref } from 'vue'
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons'
export default {
  name: 'Aside',
  components: {
    Location,
    IconMenu
  },
  setup() {
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return { isCollapse, handleOpen, handleClose }
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
}
.el-main {
  background: burlywood;
}
</style>

