import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { messages } from './lang/messages'
import { createI18n } from 'vue-i18n'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import VueCookies from 'vue-cookies'
import { CoHome, CoPeople } from 'oh-vue-icons/icons'
import {} from 'oh-vue-icons/icons'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

addIcons(CoHome, CoPeople)

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'es',
  legacy: false,
  fallbackLocale: 'es',
  messages,
})

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueCookies, { expire: '500ms' })
app.component('VIcon', OhVueIcon)

app.mount('#app')
