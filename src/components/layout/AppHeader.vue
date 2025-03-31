<script lang="js" setup>
import { useUserStore } from '@/stores/auth'
import { useLangStore } from '@/stores/lang'
import { useI18n } from 'vue-i18n'

const isAuthenticated = !!useUserStore().user.token
const langStore = useLangStore()
const { locale } = useI18n()

const changeLanguage = (event) => {
  const selectedLang = event.target.value
  langStore.setLanguage(selectedLang)
  locale.value = selectedLang // Actualizar el locale global de i18n
}
</script>

<template>
  <header className="h-[10vh] p-4 text-center">
    <div className="flex justify-between align-bottom h-full my-4">
      <nav class="shadow-md p-4 flex items-center justify-center m-4">
        <div class="m-1 p-2 cursor-pointer">
          <router-link class="text-green-600 hover:text-green-300 hover:underline p-4" to="/">
            <VIcon name="co-home" class="text-4xl" />
            {{ $t('message.HEADER_MENU1') }}</router-link
          >
        </div>
        <div v-if="isAuthenticated">|</div>
        <div class="m-1 p-2 cursor-pointer" v-if="isAuthenticated">
          <router-link class="text-green-600 hover:text-green-300 hover:underline p-4" to="/about">
            <VIcon name="co-people" class="text-4xl" />
            {{ $t('message.HEADER_MENU2') }}</router-link
          >
        </div>
        <div v-if="!isAuthenticated">|</div>
        <div class="m-1 p-2 cursor-pointer" v-if="!isAuthenticated">
          <router-link class="text-green-400 hover:text-green-800 hover:underline p-4" to="/login">
            {{ $t('message.HEADER_MENU3') }}</router-link
          >
        </div>
      </nav>
      <div>
        <select id="language" @change="changeLanguage($event)" class="p-2 border rounded">
          <option value="en" :selected="locale === 'en'">
            🇬🇧 {{ $t('message.HEADER_LANG1') }}
          </option>
          <option value="es" :selected="locale === 'es'">
            🇪🇸 {{ $t('message.HEADER_LANG2') }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>
