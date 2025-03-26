<script lang="js" setup>
import { useUserStore } from '@/stores/auth'
const isAuthenticated = !!useUserStore().user.token
</script>

<template>
  <header className="h-[10vh] p-4 text-center">
    <div className="flex justify-center align-bottom h-full">
      <nav class="shadow-md p-4 flex items-center justify-center m-4">
        <div class="m-1 p-2 cursor-pointer">
          <router-link to="/">Home</router-link>
        </div>
        <div v-if="isAuthenticated">|</div>
        <div class="m-1 p-2 cursor-pointer" v-if="isAuthenticated">
          <router-link to="/about">About</router-link>
        </div>
        <div v-if="!isAuthenticated">|</div>
        <div class="m-1 p-2 cursor-pointer" v-if="!isAuthenticated">
          <router-link to="/login">Login</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
