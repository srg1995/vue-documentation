import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import vueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(vueLazyLoad, {})
app.use(pinia)
app.use(router)

app.mount('#app')
