<script setup>

import {ref} from 'vue'

const id = ref(10)
</script>

<template>
  <h1>
    <router-link to="/">Hello World |</router-link> 
    <router-link :to="`/world/${id}`">Hi World1 |</router-link>
    <router-link :to="`/world`">Hi World2 |</router-link>
    <router-link to="/notfound">Not Found</router-link>
  </h1>
</template>
