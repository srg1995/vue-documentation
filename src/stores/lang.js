import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'es',
  }),
  actions: {
    setLanguage(lang) {
      this.locale = lang
      localStorage.setItem('locale', lang)
    },
  },
})
