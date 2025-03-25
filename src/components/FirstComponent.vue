<script setup>
import { ref } from 'vue'
const count = ref(0)
const handleClick = () => {
  count.value++
}
</script>

<template>
  <h1>Este es mi primer componente</h1>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="handleClick">Incrementar</button>
  </div>
</template>

<style scoped>
div {
  color: white;
}
</style>
