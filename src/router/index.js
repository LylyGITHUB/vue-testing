import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path : '/',
        name : 'Shop',
        component : () => import('@/views/ShopView.vue'),
    },
    {
        path : '/product',
        name : 'Product',
        component : () => import('@/views/ProductView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name : 'NotFound',
        component : () => import('@/error/NotFound.vue'),
        meta : {
            cleanLayout : true,
        }
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})