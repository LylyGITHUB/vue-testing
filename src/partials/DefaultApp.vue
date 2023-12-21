<script setup>

import { RouterView } from 'vue-router';
import FooterApp from '../layout/FooterApp.vue';
import HeaderApp from '../layout/HeaderApp.vue';
import SideBar from '../layout/SideBar.vue';

</script>
<template>
    <div>
        <side-bar></side-bar>
        <div>
            <header-app></header-app>
            <div>
                <router-view></router-view>
            </div>
            <footer-app></footer-app>
        </div>
    </div>
</template>