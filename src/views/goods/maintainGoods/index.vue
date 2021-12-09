<template>
  <el-container>
    <el-main>
      <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
      </el-form> -->
      <el-table :data="tableData" border style="width: 100%" fit :header-cell-style="{'text-align': 'center'}">
        <el-table-column type="index" label="序号" width="50" align="center" />        
        <!-- <el-table-column prop="goods_name" label="商品名称" /> -->
        <el-table-column label="商品名称">
          <template #default="scope">
            <el-input v-model="scope.row.goods_name"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="商品编号" align="right" />
        <!-- <el-table-column prop="goods_price" label="商品价格(元)" align="right" /> -->
        <el-table-column label="商品价格">
          <template #default="scope">
            <el-input v-model="scope.row.goods_price"></el-input>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="goods_num" label="剩余数量" align="right" /> -->
        <el-table-column label="商品数量">
          <template #default="scope">
            <el-input v-model="scope.row.goods_num"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="上架时间" :formatter="formatTime" align="center" />
        <el-table-column prop="updatedAt" label="更新时间" :formatter="formatTime" align="center" />
        <el-table-column prop="deletedAt" label="商品状态" :formatter="formatDel" align="center" />
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <!-- <el-button size="mini" type="warning" :disabled="scope.row.deletedAt ? true : false" @click="offShelfGoods(scope.$index, scope.row)">下架</el-button>
            <el-button size="mini" type="primary" :disabled="!scope.row.deletedAt" @click="onShelfGoods(scope.$index, scope.row)">上架</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除商品</el-button> -->
            <el-button size="mini" type="primary" @click="updateGoods(scope.$index, scope.row)">更新商品</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage"
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
import { ref, reactive, onMounted } from 'vue'

import { ElMessageBox, ElMessage } from 'element-plus'
import goodsApi from '@/api/goods.js'

import moment from 'moment'
export default {
  name: 'AllGoods',
  setup(props) {
    const formInline = reactive({
      user: '',
      region: ''
    })
    const tableData = ref([])
    const currentPage = ref(1)
    const pageSize = ref(10)
    const total = ref(0)

    onMounted(() => {
      onSubmit()
    })
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

    const formatTime = (row, column, cellValue, index) => {
      // console.log(column, 'column')
      if (column.property) {
        return moment(row[column.property]).format('YYYY-MM-DD')
      }
    }

    const formatDel = (row, column, cellValue, index) => {
      if (row.deletedAt) {
        return '已下架'
      } else {
        return '上架中'
      }
    }

    const offShelfGoods = (index, row) => {
      ElMessageBox.confirm(
        '确认下架当前商品吗吗？',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async() => {
          const res = await goodsApi.offShelf(row.id)
          if (res.message === '商品下架成功') {
            ElMessage({
              type: 'success',
              message: res.message
            })
            onSubmit()
          } else {
            ElMessage({
              type: 'warning',
              message: res.message
            })
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        })
    }

    const onShelfGoods = (index, row) => {
      ElMessageBox.confirm(
        '确认下架当前商品吗？',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async() => {
          const res = await goodsApi.onShelf(row.id)
          if (res.message === '商品上架成功') {
            ElMessage({
              type: 'success',
              message: res.message
            })
            onSubmit()
          } else {
            ElMessage({
              type: 'warning',
              message: res.message
            })
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        })
    }

    const handleDelete = (index, row) => {
      ElMessageBox.confirm(
        '确认删除当前商品吗？',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async() => {
          const res = await goodsApi.delGoods(row.id)
          if (res.message === '删除商品成功') {
            ElMessage({
              type: 'success',
              message: res.message
            })
            onSubmit()
          } else {
            ElMessage({
              type: 'warning',
              message: res.message
            })
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        }) 
    }

    const updateGoods = (index, row) => {
      console.log('row', row)
      ElMessageBox.confirm(
        '确认更新当前商品吗？',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async() => {
          const param = {
            goods_name: row.goods_name,
            goods_price: Number.parseFloat(row.goods_price),
            goods_num: Number.parseFloat(row.goods_num),
            goods_img: row.goods_img
          }
          const res = await goodsApi.updateOne(row.id, param)
          if (res.message === '修改商品成功') {
            ElMessage({
              type: 'success',
              message: res.message
            })
            onSubmit()
          } else {
            ElMessage({
              type: 'warning',
              message: res.message
            })
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消'
          })
        }) 
    }

    return { formInline, tableData, currentPage, pageSize, total, onSubmit, handleSizeChange, handleCurrentChange, formatTime, formatDel, offShelfGoods, onShelfGoods, handleDelete, updateGoods }
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
