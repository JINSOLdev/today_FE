import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import Signup from '@/pages/Signup.vue';
import Mypage from '@/pages/Mypage.vue';
import CreateEvent from '@/pages/CreateEvent.vue';


const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/mypage', component: Mypage },
    { path: '/create-event', component: CreateEvent },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
