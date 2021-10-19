import { createApp } from 'vue'
import App from './App.vue'

// import axios from 'axios'
// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
// import router from ''

import store from './store'
import router from './router'


// createApp(App).mount('#app')

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')

// const app = createApp(App)
//   app.use(router)
//   app.mount('#app')
