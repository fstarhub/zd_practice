<!--
 * @Description: 代办模块
 * @Autor: fengshuai
 * @Date: 2021-12-03 09:39:38
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-03 10:08:00
-->
<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="6" @click="handleSetLineChartData('newVisitis')">
          <div class="grid-content bg-purple">
            累计销售物品：<span class="saleNum">3.12</span> 万件
          </div>
        </el-col>
        <el-col :span="6" @click="handleSetLineChartData('messages')">
          <div class="grid-content bg-purple">
            库存物品：<span class="stockNum">3429</span> 件商品
          </div>
        </el-col>
        <el-col :span="6" @click="handleSetLineChartData('purchases')">
          <div class="grid-content bg-purple">
            代发货：<span class="deliverNum">46</span> 件
          </div>
        </el-col>
        <el-col :span="6" @click="handleSetLineChartData('shoppings')">
          <div class="grid-content bg-purple">
            周平均销量：<span class="aveSaleNum">5657</span> 件
          </div>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'TodoList',
  data() {
    return {
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  cursor: pointer;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
  line-height: 100px;
  font-size: 20px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: 100px;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.saleNum {
  color: darkorchid;
  font-weight: 800;
}
.stockNum {
  color: deepskyblue;
  font-weight: 800;
}
.deliverNum {
  color: deeppink;
  font-weight: 800;
}
.aveSaleNum {
  color: darkturquoise;
  font-weight: 800;
}
</style>

