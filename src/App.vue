<!--
 * @Description: 入口文件
 * @Autor: fengshuai
 * @Date: 2021-10-19 09:40:21
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-03 09:48:03
-->

<template>
  <div id="app">
    <router-view />
    <!-- <div v-loading="isShowLoading" class="global-loading" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      // isShowLoading: false
    }
  },
  computed: {
    ...mapState(['isShowLoading'])
  },
  methods: {

  }
}
</script>

<style lang="scss">
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

li,
ul,
p,
div,
body,
html,
table {
  margin: 0;
  padding: 0;
  // box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

li {
  list-style: none;
}

#app {
  height: 100%;
}

/* loading */
.global-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background: rgba(255, 255, 255, .5); */
    display: flex;
    justify-content: center;
    align-items: center;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.el-container {
  // height: 100%;
  width: 100%;
  text-align: left;
  // line-height: normal;
  .el-main {
    padding: 0px;
    // line-height: 0;
  }
}
</style>
