<script setup>
import { RouterLink } from 'vue-router';

const menus = [
    {
        name : 'Shop',
        path : '/',
    },
    {
        name : 'Product',
        path : '/product',
    },
    {
        name : 'Food',
        path : '/food',
    },
    {
        name : 'Drink',
        path : '/drink',
    },
    {
        name : 'Category',
        path : '/category',
    },
]

</script>
<template>
    <div class="menu">
        <router-link 
            v-for="menu in menus"
            :to="menu.path"
            class="text-black-alpha-90"
        >
            {{ menu.name }}
        </router-link>
    </div>
</template>
<style scoped lang="scss">

.menu{
    display: flex;
    flex-direction: column;
    gap: 30px;

    a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 900;
        padding: 10px 20px;
    }
    .router-link-active{
        background-color: #2ECC71;
        color: white;
    }

}

</style>