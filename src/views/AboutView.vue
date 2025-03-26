<script lang="js" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useUserStore } from '@/stores/auth'
const user = useUserStore().user
</script>

<template>
  <MainLayout>
    <template v-slot:section>
      <h1 class="text-3xl font-bold underline text-center text-gray-500">
        {{ $t('message.ABOUT_VIEW_TITLE', { username: user.name }) }}
      </h1>
    </template>
  </MainLayout>
</template>
