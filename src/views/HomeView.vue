<script lang="js" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <template v-slot:section>
      <h1 class="text-3xl font-bold underline text-center text-gray-500">
        {{ $t('message.HOME_VIEW_TITLE') }}
      </h1>
    </template>
  </MainLayout>
</template>
