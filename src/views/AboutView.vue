<script lang="js" setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useUserStore } from '@/stores/auth'
import VueCookies from 'vue-cookies'
const user = useUserStore().user

const cookie = ref('')
const handleCookie = ({ type }) => {
  const isExistCookie = VueCookies.get('nueva_cookie')
  switch (type) {
    case 'add':
      if (!isExistCookie) {
        if (cookie.value === '') {
          alert('rellena el valor de la cookie')
        } else {
          VueCookies.set('nueva_cookie', cookie.value)
          alert(`Cookie creada con el valor: ${cookie.value}`)
        }
      } else {
        alert('La cookie ya existe, puedes visualizarla o borrarla')
      }
      break
    case 'delete':
      if (isExistCookie) {
        VueCookies.remove('nueva_cookie')
        alert('La cookie se ha eliminado correctamente')
      } else {
        alert('No se puede eliminar una cookie que no existe')
      }
      break
    case 'show':
      if (isExistCookie) {
        const cookieValue = VueCookies.get('nueva_cookie')
        alert(`El valor de la cookie es: ${cookieValue}`)
      } else {
        alert('No existe la cookie')
      }
      break
    default:
      break
  }
}
</script>

<template>
  <MainLayout>
    <template v-slot:section>
      <h1 class="text-3xl font-bold underline text-center text-gray-500">
        {{ $t('message.ABOUT_VIEW_TITLE', { username: user.name }) }}
      </h1>
      <h2 class="text-gray-800 text-2xl text-center font-bold p-4">Cookies y Sesiones</h2>
      <p class="text-gray-800 py-4 font-bold">Vamos a gestionar una cookie</p>
      <div>
        <label for="cookie" class="block text-sm/6 font-medium text-gray-900">
          Dale un valor a la cookie</label
        >
        <div class="mt-2">
          <div
            class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
          >
            <input
              type="text"
              name="cookie"
              id="cookie"
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              placeholder="Valor de la cookie"
              v-model="cookie"
            />
          </div>
        </div>
        <span class="text-gray-700 text-xs"
          >*Para ver la cookie pulse f12 y situese en el apartado "aplication" y busque su
          cookie.</span
        >
      </div>
      <div class="pt-6 flex items-center justify-center gap-4">
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="handleCookie({ type: 'add' })"
        >
          Crear Cookie
        </button>
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="handleCookie({ type: 'show' })"
        >
          Ver Cookie
        </button>
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="handleCookie({ type: 'delete' })"
        >
          Borrar Cookie
        </button>
      </div>
    </template>
  </MainLayout>
</template>
