<script lang="js" setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <section className="flex-grow p-4 flex-1 bg-white">
      <slot name="section"></slot>
    </section>

    <AppFooter />
  </div>
</template>
