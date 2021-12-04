<!--
 * @Description: 首页
 * @Autor: fengshuai
 * @Date: 2021-10-19 16:08:10
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-03 09:50:15
-->

<template>
  <el-container>
    <el-main>
      <el-row>
        <TodoList @handleSetLineChartData="handleSetLineChartData" />
      </el-row>
      
      <el-row class="elRow">
        <LineChart :chart-data="lineChartData" />
      </el-row>
      <el-row class="elRow" :gutter="30">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <RaddarChart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import TodoList from './components/TodoList'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
export default {
  name: 'Home',
  components: {
    TodoList,
    BarChart,
    RaddarChart,
    PieChart,
    LineChart
  },
  
  data() {
    return {
      AlllineChartData: {
        newVisitis: {
          expectedData: [100, 120, 161, 134, 105, 160, 165],
          actualData: [120, 82, 91, 154, 162, 140, 145]
        },
        messages: {
          expectedData: [200, 192, 120, 144, 160, 130, 140],
          actualData: [180, 160, 151, 106, 145, 150, 130]
        },
        purchases: {
          expectedData: [80, 100, 121, 104, 105, 90, 100],
          actualData: [120, 90, 100, 138, 142, 130, 130]
        },
        shoppings: {
          expectedData: [130, 140, 141, 142, 145, 150, 160],
          actualData: [120, 82, 91, 154, 162, 140, 130]
        }
      },
      lineChartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = this.AlllineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  text-align: center;
}
.elRow {
  width: 100%;
  margin-top: 30px;
}
.chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

  @media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
