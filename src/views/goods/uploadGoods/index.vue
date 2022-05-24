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
        <el-col :span="6" :offset="9">
          <el-form :model="goodsForm" label-width="120px">
            <el-form-item label="商品名称：">
              <el-input v-model="goodsForm.goodsName" />
            </el-form-item>
            <el-form-item label="商品价格：">
              <el-input v-model="goodsForm.goodsPrice" />
            </el-form-item>
            <el-form-item label="商品库存：">
              <el-input v-model="goodsForm.goodsNum" />
            </el-form-item>
            <el-form-item label="商品图片：">
              <el-upload
                ref="uploadRef"
                class="upload-demo"
                :action="uploadURL"
                :auto-upload="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :data="goodsForm"
              >
                <template #trigger>
                  <el-button size="small" type="primary">选择文件</el-button>
                </template>
                <!-- <el-button
                  style="margin-left: 10px"
                  size="small"
                  type="success"
                  @click="submitUpload">上传至服务</el-button> -->
                <template #tip>
                  <div class="el-upload__tip">
                    文件格式为jpeg/png，大小不能超过500kb
                  </div>
                </template>
                <el-button
                  style="margin-left: 10px"
                  size="small"
                  type="success"
                  @click="submitUpload">提交</el-button>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import { reactive, ref } from 'vue'

import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  name: 'UploadGoods',
  setup() {
    const uploadRef = ref()
    const uploadURL = ref(process.env.VUE_APP_BASE_API + '/goods/upload')
    const submitUpload = () => {
      uploadRef.value.submit()
    }
    const uploadSuccess = (response, file, fileList) => {
      // console.log(response, file, fileList, 'response')
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

    const goodsForm = reactive({
      goodsName: '',
      goodsPrice: '',
      goodsNum: '',
    })

    return { uploadRef, uploadURL, goodsForm, submitUpload, uploadSuccess, uploadError }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
