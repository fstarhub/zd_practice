<!--
 * @Description: 视频播放入口
 * @Autor: fengshuai
 * @Date: 2024-02-01 14:17:43
 * @LastEditors: fengshuai
 * @LastEditTime: 2024-02-02 10:48:18
-->
<template>
  <div class="container">
    <div class="ifreamClass">
      <iframe :src="sourceObj.activeSource" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <div class="operateClass">
      <el-dropdown trigger="click">
        <el-button type="primary">
          切换观看平台<el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in sourceObj.sourceList" :key="item.id" @click="changeChannel(item)">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { ArrowDown } from '@element-plus/icons'

const sourceObj = reactive({
  activeSource: '',
  sourceList: [],
})
const getSourceList = () => {
  sourceObj.sourceList = [
    { id: 1, name: '哔哩哔哩', src: 'https://uviewui.com/' },
    { id: 2, name: '爱奇艺', src: 'http://www.chinadaily.com.cn/' },
    { id: 3, name: '直播间二', src: 'https://live.polyv.cn/watch/4627591' },
  ]
  const roundNum = Math.floor(Math.random() * 4)
  sourceObj.activeSource = sourceObj.sourceList[roundNum].src?? ''
}
const changeChannel = (item) => {
  sourceObj.activeSource = item.src
}
onMounted(() => {
  getSourceList()
})
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .ifreamClass {
    width: 100vw;
    height: 100vh;
  }
  .operateClass {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.el-button {
  font-size: 18px;
  background-color: red;
  border-color: red;
}
</style>
