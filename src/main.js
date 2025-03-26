import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { messages } from './lang/messages'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'es',
  legacy: false,
  fallbackLocale: 'es',
  messages,
})

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
