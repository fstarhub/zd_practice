<template>
  <el-container>
    <el-main>
      <el-row>
        <el-button size="mini" type="primary" @click="addOne">添加发布商品</el-button>
      </el-row>
      <el-table :data="tableData" border style="width: 100%" fit :header-cell-style="{'text-align': 'center'}">
        <el-table-column type="index" width="50" label="序号" align="center" />        
        <el-table-column prop="goods_name" label="商品名称">
          <template #default="scope">
            <el-input v-model="scope.row.goods_name" placeholder="请输入商品名称" />
          </template>
        </el-table-column>
        <el-table-column prop="goods_price" label="商品价格">
          <template #default="scope">
            <el-input v-model="scope.row.goods_price" type="number" placeholder="请输入商品价格" />
          </template>
        </el-table-column>
        <el-table-column prop="goods_num" label="商品数量">
          <template #default="scope">
            <el-input v-model="scope.row.goods_num" type="number" placeholder="请输入商品数量" />
          </template>
        </el-table-column>
        <el-table-column prop="goods_img" label="图片地址">
          <template #default="scope">
            <span>{{ scope.row.goods_img }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button size="mini" type="danger" @click="deleteItem(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="primary" @click="uploadImg(scope.$index, scope.row)">上传图片</el-button>
            <el-button size="mini" type="primary" :disabled="!scope.row.goods_img" @click="publishItem(scope.$index, scope.row)">发布商品</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog v-model="uploadDialogVisible" :title="titleName" width="30%" center>
        <Upload :row-item="rowItem" :row-index="rowIndex" @send-goodsImg="getGoodsImg" />
        <template #footer>
          <span class="dialog-footer">
            <!-- <el-button @click="personDialogVisible = false">Cancel</el-button> -->
            <!-- <el-button type="primary" @click="personDialogVisible = false">确 定</el-button> -->
          </span>
        </template>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
import { ref, reactive, onMounted } from 'vue'

import { ElMessageBox, ElMessage } from 'element-plus'

import Upload from './components/uploadImg.vue'

import goodsApi from '@/api/goods.js'
export default {
  name: 'PublishGoods',
  components: { Upload },
  setup() {
    const tableData = ref([])
    const uploadDialogVisible = ref(false)
    const titleName = ref('')
    const rowItem = ref(null)
    const rowIndex = ref(null)

    const deleteItem = (index, row) => {
      tableData.value.splice(index, 1)
    }
    const uploadImg = (index, row) => {
      if (row.goods_name === '') {
        titleName.value = '请上传当前商品的图片'
      } else {
        titleName.value = `请上传${row.goods_name}图片`
      }
      rowItem.value = row
      rowIndex.value = index
      // console.log(rowItem.value, 'value')
      uploadDialogVisible.value = true
    }

    const publishItem = async(index, row) => {
      const param = {
        goods_name: row.goods_name,
        goods_price: Number.parseFloat(row.goods_price),
        goods_num: Number.parseFloat(row.goods_num),
        goods_img: row.goods_img
      }
      const res = await goodsApi.publishItemGoods(param)
      console.log(res, 'ress')
      if (res.message === '发布商品成功') {
        tableData.value.splice(index, 1)
        ElMessage({
          type: 'success',
          message: res.message
        })
      } else {
        ElMessage({
          type: 'warning',
          message: res.message
        })
      }
    }

    const addOne = () => {
      tableData.value.push({
        goods_name: '',
        goods_price: null,
        goods_num: null,
        goods_img: null
      })
    }

    const getGoodsImg = (index, goods_img) => {
      uploadDialogVisible.value = false
      const goodsImgArr = goods_img.split('.')
      // console.log(index, goods_img, goodsImgArr, 'aaaaa')
      tableData.value[index].goods_img = goodsImgArr[0]
    }

    return { tableData, uploadDialogVisible, addOne, uploadImg, deleteItem, publishItem, rowItem, rowIndex, titleName, getGoodsImg }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
}

</style>
