import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

// import axios from 'axios'

import store from './store'
import router from './router'

// createApp(App).mount('#app')

createApp(App)
  // .use(ViewUI)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount('#app')

// const app = createApp(App)
//   app.use(ElementPlus)
//   app.use(router)
//   app.use(store)
//   // app.use(ViewUI)
//   app.mount('#app')
