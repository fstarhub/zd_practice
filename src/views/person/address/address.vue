<!--
 * @Description: 地图测试
 * @Autor: fengshuai
 * @Date: 2022-05-23 14:10:22
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-09-01 15:00:39
-->
<template>
  <el-container>
    <el-main>
      <div id="mapContainer">
      </div>
      <div class="opreateContainer">
        <el-radio-group v-model="radio1" class="ml-4">
          <el-radio label="1" size="large">提示经纬度值</el-radio>
          <el-radio label="2" size="large">获取当前行政区</el-radio>
          <el-radio label="3" size="large">添加图层</el-radio>
        </el-radio-group>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: 'Adderss',
  data() {
    return {
      radio1: '1'
    }
  },
  mounted() {
    this.showMap()
  },
  methods: {
    showMap() {
      AMapLoader.load({
      "key": "b887f33e10afd70e5e0384535705a3ac",              // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins:['AMap.Scale','AMap.ToolBar']          // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        this.map = new AMap.Map('mapContainer', {
          zoom:12,//级别
          center: [115.3513742879033, 29.370369544945337],//中心点坐标
          viewMode: '2D',  //设置地图模式
          lang:'zh_cn',  //设置地图语言类型
          isHotspot: true
        });
        this.map.addControl(new AMap.Scale())
        this.map.addControl(new AMap.ToolBar())
        this.map.add(new AMap.Marker({
            position: this.map.getCenter()
        }));
        this.map.addControl(new AMap.MapType({
          defaultType: 1
        }))
      }).catch(e => {
          console.log(e);
      })
    },
  }
}
</script>

<style lang="scss" scoped>

.el-main {
  position: relative;
}
#mapContainer {
  height: 100%;
  width: 100%;
  background: pink;
}
.opreateContainer {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 380px;
  height: 40px;
  background: white;
  box-shadow: 0 2px 6px 0 rgb(114 124 245 / 50%);
  padding: 8px 16px;
}
</style>
