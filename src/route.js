import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path : '/',
        meta : {
            cleanLayout : false
        },
        component : () => import('@/views/StudentManagement.vue'),
    },
    {
        path : '/point',
        meta : {
            cleanLayout : false
        },
        component : () => import('@/views/PointManagement.vue'),
    },
    {
        path : '/:pathMatch(.*)*',
        component : () => import('@/error/NotFound.vue'),
        meta : {
            cleanLayout : true
        },
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})