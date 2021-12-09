<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-12-08 22:27:53
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-08 23:03:26
-->
<template>
  <el-container>
    <el-main>
      <el-upload
        ref="uploadRef"
        class="upload-demo"
        :action="uploadURL"
        :auto-upload="false"
      >
        <template #trigger>
          <el-button size="small" type="primary">选择文件</el-button>
        </template>
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload">上传至服务</el-button>
        <template #tip>
          <div class="el-upload__tip">
            文件格式为jpg/png，大小不能超过500kb
          </div>
        </template>
      </el-upload>

    </el-main>
  </el-container>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'UploadGoods',
  setup() {
    const uploadRef = ref()
    const uploadURL = ref(process.env.VUE_APP_BASE_API + '/goods/upload')
    const submitUpload = () => {
      uploadRef.value.submit()
    }

    return { uploadRef, uploadURL, submitUpload }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
