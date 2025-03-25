<script lang="ts" setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue'

const props = defineProps({ title: String, content: String })
const emits = defineEmits(['sayHi'])

const message = ref('')

const handleClick = () => {
  emits('sayHi', message.value)
}

const updateMessage = () => {
  message.value = 'hola'
}

defineExpose({ updateMessage })
</script>

<template>
  <h1>Este es el componente hijo, que recibe props del padre</h1>
  <h2>{{ props.title }}</h2>
  <p>{{ props.content }}</p>
  <input type="text" v-model="message" />
  <button @click="handleClick">Click</button>
  <button @click="updateMessage">Actualizar</button>

  <p>{{ message }}</p>
</template>

<style scoped></style>
