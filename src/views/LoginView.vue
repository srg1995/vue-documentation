<script lang="js" setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useUserStore } from '@/stores/auth'

const user = useUserStore()

const email = ref('prueba@prueba.com')
const password = ref('123456')

const handleLogin = async () => {
  await user.login({
    email: email.value,
    password: password.value,
  })
}
</script>

<template>
  <MainLayout>
    <template v-slot:section>
      <div class="flex justify-center">
        <form class="w-1/2 mx-auto">
          <h2 class="text-2xl font-bold text-center text-gray-900 m-4">Login</h2>
          <div class="space-y-12">
            <div class="pb-4">
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-12">
                  <label for="username" class="block text-sm/6 font-medium text-gray-900"
                    >Usuario</label
                  >
                  <div class="mt-2">
                    <div
                      class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                    >
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="Usuario"
                        v-model="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-12">
                  <label for="username" class="block text-sm/6 font-medium text-gray-900"
                    >Contraseña</label
                  >
                  <div class="mt-2">
                    <div
                      class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                    >
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="block mt-4 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="********"
                        v-model="password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-center">
            <button
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="handleLogin"
            >
              Accede
            </button>
          </div>
        </form>
      </div>
    </template>
  </MainLayout>
</template>
