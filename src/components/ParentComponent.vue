<script lang="ts" setup>
import ChildComponent from './ChildComponent.vue'
import { ref } from 'vue'

const datamodified = ref(null)
const posts = [
  { title: 'este es el titulo 1', content: 'este es el contenido 1' },
  { title: 'este es el titulo 2', content: 'este es el contenido 2' },
]
const showAlert = (message) => {
  alert(message)
}

const modifyChildren = () => {
  datamodified.value.updateMessage()
}
</script>

<template>
  <h1>
    Este es el componente padre que acede a la informacion del hijo mediante los emits tambien puede
    y el hijo puede delegar el control al padre mediante el defineExpose referenciando al hijo y sin
    poder pasarle parametros en la funcion que exponemos del hijo
  </h1>
  <ChildComponent
    ref="datamodified"
    v-for="post in posts"
    :title="post.title"
    :content="post.content"
    :key="post.title"
    @say-hi="showAlert"
  />
  <button @click="modifyChildren">Moficar hijo desde el padre</button>
</template>

<style scoped></style>
