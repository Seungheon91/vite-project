import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";


createApp(App).use(createPinia()).use(router).use(Antd).mount('#app')
