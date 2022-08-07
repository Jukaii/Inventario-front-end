import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Rol from './components/Rol.vue'
import Categorias from './components/Categorias.vue'
import Productos from './components/Productos.vue'
import ListarProductos from './components/ListarProductos.vue'
import ListarCategorias from './components/ListarCategorias.vue'

const routes = [{
        path: '/',
        name: 'root',
        component: App
  },
  {
        path: '/user/login',
        name: "login",
        component: Login
  },
  {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
  },
  {
      path: '/user/home',
      name: "home",
      component: Home
  },
  {
      path: '/user/rol',
      name: "rol",
      component: Rol
 },
 {
    path: '/user/productos',
    name: "productos",
    component: Productos
},
{
    path: '/user/categorias',
    name: "categorias",
    component: Categorias
},
{
    path: '/user/ListarProductos',
    name: "ListarProductos",
    component: ListarProductos
},
{
    path: '/user/ListarCategorias',
    name: "ListarCategorias",
    component: ListarCategorias
},        

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;