<script lang="js" setup>
import MainLayout from '@/layouts/MainLayout.vue'

import useMouse from '@/composables/useMouse'
const { x, y } = useMouse()
</script>

<template>
  <MainLayout>
    <template v-slot:section>
      <h1 class="text-3xl font-bold underline text-center text-gray-500">Home View</h1>
      <div class="bg-grey-500 w-full flex gap-4 justify-center p-8">
        <p class="border border-gray-500 p-2 text-center text-gray-600">
          Mouse position(x): {{ x }}
        </p>
        <p class="background border border-gray-500 p-2 text-center text-gray-600">
          Mouse position(y): {{ y }}
        </p>
      </div>
    </template>
  </MainLayout>
</template>
