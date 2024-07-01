import { createApp } from 'vue';
import App from './App.vue';
import LoginComponent from './pages/Login/LoginComponent.vue';
import HomeComponent from './pages/Home/HomeComponent.vue';
import ProdutosComponent from './pages/Produtos/ProdutosComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

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
    path: '/produtos',
    name: 'Produtos',
    component: ProdutosComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
