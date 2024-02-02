<!--
 * @Description: 跳转页签播放
 * @Autor: fengshuai
 * @Date: 2024-02-01 16:17:21
 * @LastEditors: fengshuai
 * @LastEditTime: 2024-02-02 11:11:55
-->
<template>
  <div class="container">
    <div class="optionsRow">
      <div class="optionsItem" :class="{'actived': sourceObj.activeId == item.id}" v-for="item in sourceObj.sourceList" :key="item.id" @click="changeChannel(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'

const sourceObj = reactive({
  activeSource: '',
  sourceList: [],
  activeId: null
})
const getSourceList = () => {
  sourceObj.sourceList = [
    { id: 1, name: '直播间', src: 'http://v.ouchn.cn/live/v/Dx8nxE1H' },
    { id: 2, name: '哔哩哔哩', src: 'https://www.bilibili.com/' },
    { id: 3, name: '爱奇艺', src: 'https://www.iqiyi.com/' },
    { id: 6, name: '备选直播间', src: 'https://live.polyv.cn/watch/4627591' },
  ]
  // const roundNum = Math.floor(Math.random() * 5)
  // sourceObj.activeSource = sourceObj.sourceList[roundNum].src
}
const changeChannel = (item) => {
  sourceObj.activeId = item.id
  window.open(item.src, '_blank')
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
  background: url('../../assets/videoImg/mainBG.png') center center no-repeat;
  background-size: 100% 100%;
  .optionsRow {
    height: 86px;
    width: 845px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    .optionsItem {
      width: 190px;
      height: 86px;
      text-align: center;
      line-height: 86px;
      border-radius: 8px;
      box-shadow: 0px 0px 13px 0px rgba(162,3,2,0.35) inset;
      font-size: 28px;
      font-family: Alibaba PuHuiTi, Alibaba PuHuiTi-Bold;
      font-weight: 700;
      background: #d95153;
      color: #ffdede;
      cursor: pointer;
    }
    .actived {
      color: #a70404;
      background: #fff5f5;
    }
  }
}
</style>
