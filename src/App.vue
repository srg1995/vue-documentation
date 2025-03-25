<script setup>
import { ref } from 'vue'
const isVisible = ref(false)
const users = ref([])
users.value = [
  {
    name: 'usuario 1',
    email: 'email@prueba.es',
  },
  {
    name: 'usuario 2',
    email: 'email@prueba.es',
  },
  {
    name: 'usuario 3',
    email: 'email@prueba.es',
  },
]

const name = ref('')
const email = ref('')

const handleUsers = () => {
  users.value = [
    ...users.value,
    {
      name: name.value,
      email: email.value,
    },
  ]
}
</script>

<template>
  <h1>Directivas</h1>

  <h2>v-if</h2>
  <div>
    <p v-if="isVisible">Este texto es visible</p>
  </div>

  <h2>v-show</h2>
  <div>
    <p v-show="isVisible">Este texto es visible</p>
  </div>

  <h2>v-on</h2>
  <button @click="isVisible = !isVisible">Cambiar visibilidad</button>

  <h2>v-bind</h2>
  <p :class="{ hasError: !isVisible }">
    Este texto es un bind y si esta en rojo indica que la clase no esta visible
  </p>

  <h2>v-for</h2>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Email</th>
    </tr>
    <tr v-for="user in users" :key="user.name">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </table>

  <h2>v-model</h2>
  <form>
    <input type="text" v-model="name" placeholder="nombre" />
    <input type="text" v-model="email" placeholder="email" />
    <button @click.prevent="handleUsers">Añadir usuario</button>
  </form>
</template>

<style scoped>
h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
div {
  border: solid 1px;
  height: 30px;
}
.hasError {
  color: red;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
}
</style>
