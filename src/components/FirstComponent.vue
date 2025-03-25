<script setup>
import { computed, ref } from 'vue'
const count = ref(0)
const handleClick = () => {
  count.value++
}
const doubleCount = computed(() => count.value * 2)
</script>

<template>
  <h1>Este es mi primer componente</h1>
  <div>
    <p>Contador: {{ count }}</p>
    <p>Contador doble computado: {{ doubleCount }}</p>
    <button @click="handleClick">Incrementar</button>
  </div>
</template>

<style scoped>
div {
  color: white;
}
</style>
