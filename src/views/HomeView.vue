<script lang="js" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { ref } from 'vue'

const lazyOptions = ref({
  src: 'https://picsum.photos/1280/800',
  lifecycle: {
    loading: (el) => {
      console.log('cargando imagen', el)
    },
    error: (el) => {
      console.log('error cargando imagen', el)
    },
    loaded: (el) => {
      console.log('imagen cargada', el)
    },
  },
})
</script>

<template>
  <MainLayout>
    <template v-slot:section>
      <h1 class="text-3xl font-bold underline text-center text-gray-500">Home View</h1>
      <div class="flex justify-center w-full p-8">
        <img
          lazy="loading"
          v-lazy="{
            src: lazyOptions.src,
            lifecycle: lazyOptions.lifecycle,
            delay: 200,
          }"
        />
      </div>
    </template>
  </MainLayout>
</template>

<style scoped>
img[lazy='loading'] {
  background-color: rgba(0, 0, 255, 0.383);
  width: 520px;
}
</style>
