
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import LoginComponent from './pages/Login/LoginComponent.vue';
import HomeComponent from './pages/Home/HomeComponent.vue';
import ClientesComponent from './pages/Clientes/ClientesComponent';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

axios.defaults.baseURL = 'http://localhost:8000/api';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: ClientesComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
