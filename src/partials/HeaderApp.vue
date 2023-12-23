<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

</script>
<template>
    <div class="header flex justify-content-between align-items-center px-6">
        <h2>{{ router.currentRoute.value.name }}</h2>
        <h5>Pheap CHANSOPHEA</h5>
    </div>
</template>