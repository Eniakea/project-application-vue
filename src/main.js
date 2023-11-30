import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import axios from 'axios';

import App from './App.vue'
import Project from './views/Project.vue';
import ProjectCreationPage from './views/ProjectCreationPage.vue';
import Home from  './views/Home.vue';
import Login from './views/Login.vue'

const app = createApp(App);

axios.defaults.baseURL = 'https://localhost:7046';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/project/:id', component: Project },
        { path: '/project/create', component: ProjectCreationPage },
        { path: '/login', component: Login }
    ],
});


router.beforeEach((to, from, next) => {
    console.log(`Переход с: ${from.path} на: ${to.path}`);
    next();
});

router.afterEach((to, from) => {
    console.log(`Переход завершен: ${from.path} на: ${to.path}`);
});


app.use(router);
app.config.globalProperties.$http = axios;
app.mount('#app')
