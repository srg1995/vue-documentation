import { getUser } from '@/services/getUser'
import { defineStore } from 'pinia'
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      token: '',
    },
  }),
  getters: {
    getName: (state) => state.user.name,
    getEmail: (state) => state.user.email,
    getInfo: (state) => {
      state.user.name, state.user.email
    },
    getToken: (state) => state.user.token,
  },
  actions: {
    async login({ email, password }) {
      const response = await getUser(email, password)
      if (response.status === 200) {
        console.log(response.data)
        this.user = response.data
        router.push({ name: 'about' })
      } else {
        alert('Error', response.error)
      }
    },
  },
  persist: {
    key: 'user',
    storage: localStorage,
    paths: ['user'],
  },
})
