/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-10-19 09:40:21
 * @LastEditors: feng
 * @LastEditTime: 2023-09-27 16:23:13
 */
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './styles/elementReset.scss'

import App from './App.vue'

// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

// import axios from 'axios'

import store from './store'
import router from './router'
// import dict from './utils/dict'

// createApp(App).mount('#app')

createApp(App)
  // .use(ViewUI)
  .use(ElementPlus, { locale })
  .use(router)
  .use(store)
  // .use(dict)
  .mount('#app')

// const app = createApp(App)
//   app.use(ElementPlus)
//   app.use(router)
//   app.use(store)
//   // app.use(ViewUI)
//   app.mount('#app')
