<template>
  <el-container>
    <el-header>
      {{ user }}, 欢迎主人回来~
    </el-header>
    <el-container>
      <el-aside width="200px">
        菜单栏
      </el-aside>
      <el-main>
        主页啦
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'BasicLayout',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-container {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

// body > .el-container {
//   margin-bottom: 40px;
// }
</style>
