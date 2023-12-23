<script setup>

import CleanLayout from './layout/CleanLayout.vue';
import DefaultApp from './layout/DefaultApp.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <div v-if="!router.currentRoute.value.meta.cleanLayout">
    <default-app></default-app>
  </div>
  <div v-else>
    <clean-layout></clean-layout>
  </div>
</template>