<script setup>
import FooterApp from '@/partials/FooterApp.vue';
import HeaderApp from '@/partials/HeaderApp.vue';
import SideBar from '@/partials/SideBar.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="side-bar bg-teal-100">
            <side-bar></side-bar>
        </div>
        <div class="sub-container">
            <header-app></header-app>
            <div class="content">
                <div class="router-view">
                    <router-view></router-view>
                </div>
            </div>
            <footer-app></footer-app>
        </div>
    </div>
</template>
<style scoped lang="scss">

.container{
    width: 100%;
    height: 100vh;
    display: flex;

    .side-bar{
        width: 10%;
        height: 100%;
        position: fixed;
    }
    .sub-container{
        width: 90%;
        height: 100%;
        margin-left: 10%;

        .header,
        .footer{
            width: 100%;
            height: 5%;
            background-color: whitesmoke;
        }

        .content{
            width: 100%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;

            .router-view{
                width: 95%;
                height: 95%;
                background-color: white;
                box-shadow: 1px 5px 5px black;
                border-radius: 30px;
            }

        }

    }

}

</style>