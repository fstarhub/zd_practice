<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="商品名称">
          <el-input v-model="formInline.user" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品编号">
          <el-select v-model="formInline.region" placeholder="请输入商品编号">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border style="width: 100%" fit :header-cell-style="{'text-align': 'center'}">
        <el-table-column type="index" width="50" align="center" />        
        <el-table-column prop="goods_name" label="商品名称" />
        <el-table-column prop="id" label="商品编号" align="right" />
        <el-table-column prop="goods_price" label="商品价格(yua)" align="right" />
        <el-table-column prop="goods_num" label="剩余数量" align="right" />
        <el-table-column prop="createdAt" label="上架时间" align="center" />
        <el-table-column prop="updatedAt" label="更新时间" align="center" />
        <el-table-column prop="deletedAt" label="是否下架" align="center" />
      </el-table>
      <el-pagination
        :currentPage="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-main>
  </el-container>
</template>
<script>
import { ref, reactive } from 'vue'

import { ElMessageBox, ElMessage } from 'element-plus'
import goodsApi from '@/api/goods.js'
export default {
  name: 'PublishGoods',
  setup(props) {
    const formInline = reactive({
      user: '',
      region: ''
    })
    const tableData = ref([])
    const currentPage = ref(1)
    const pageSize = ref(10)
    const total = ref(0)

    const onSubmit = async() => {
      const param = {
        pageNum: currentPage.value,
        pageSize: pageSize.value
      }
      // console.log(param, 'param')
      const res = await goodsApi.findAllGoods(param)
      // console.log(res, 'res')
      if (res.message === 'Success') {
        tableData.value = res.result.list
        total.value = Number.parseInt(res.result.total)
        pageSize.value = Number.parseInt(res.result.pageSize)
        currentPage.value = Number.parseInt(res.result.pageNum)
      } else {
        ElMessage({
          type: 'warning',
          message: res.message
        })
      }
    }

    const handleSizeChange = (val) => {
      pageSize.value = val
      onSubmit()
    }
    const handleCurrentChange = (val) => {
      currentPage.value = val
      onSubmit()
    }
    return { formInline, tableData, currentPage, pageSize, total, onSubmit, handleSizeChange, handleCurrentChange }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/el_pagination.scss'
</style>
