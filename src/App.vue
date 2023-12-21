<script setup>
import { useRoute } from 'vue-router';
import DefaultApp from '@/partials/DefaultApp.vue';
import CleanLayout from '@/partials/CleanLayout.vue';
import { computed } from 'vue';

const router = useRoute()

</script>

<template>
  <div v-if="!router.meta.cleanLayout">
    <default-app></default-app>
  </div>
  <div v-if="router.meta.cleanLayout === true">
    <clean-layout></clean-layout>
  </div>
</template>
