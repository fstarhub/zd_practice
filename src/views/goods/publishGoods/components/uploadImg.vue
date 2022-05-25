<!--
 * @Description: 上传图片
 * @Autor: fengshuai
 * @Date: 2021-12-08 22:27:53
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-08 23:03:26
-->
<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-upload
            ref="uploadRef"
            class="upload-demo"
            :action="uploadURL"
            :auto-upload="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
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
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import { onMounted, ref } from 'vue'

import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  name: 'UploadGoods',
  props: {
    rowItem: {
      type: Object,
      default: () => {
        return {}
      }
    },
    rowIndex: {
      type: Number,
      default: null
    }
  },
  setup(props, context) {
    const uploadRef = ref()
    // const uploadURL = ref(process.env.VUE_APP_BASE_API + '/goods/upload')
    const uploadURL = ref(window.location.origin + '/goods/upload') // 跨域报错记得修改路径
    const goods_img = ref(null)

    // onMounted(() => {
    //   console.log(props.rowItem, 'props')
    // })
    const submitUpload = () => {
      uploadRef.value.submit()
    }
    const uploadSuccess = (response, file, fileList) => {
      // console.log(response, file, fileList, 'response')
      goods_img.value = response.result.goods_img
      context.emit('send-goodsImg', props.rowIndex, response.result.goods_img)
      uploadRef.value.clearFiles()
      ElMessage({
        type: 'success',
        message: response.message
      })
    }
    const uploadError = (err, file, fileList) => {
      console.log(err)
      ElMessage({
        type: 'info',
        message: err.message
      })
    }

    return { uploadRef, uploadURL, submitUpload, uploadSuccess, uploadError, goods_img }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
