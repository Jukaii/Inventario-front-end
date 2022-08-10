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
import ListarRoles from './components/ListarRoles.vue'
import ActualizarProductos from './components/ActualizarProductos.vue'
import ActualizarCategorias from './components/ActualizarCategorias.vue'
import ActualizarRoles from './components/ActualizarRoles.vue'
import RegistrarRol from './components/RegistrarRol.vue'
import BorrarProductos from './components/BorrarProductos.vue'
import BorrarCategoria from './components/BorrarCategoria.vue'
import BorrarRol from './components/BorrarRol.vue'

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
    path: '/user/RegistrarRol',
    name: "RegistrarRol",
    component: RegistrarRol
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
{
    path: '/user/ListarRoles',
    name: "ListarRoles",
    component: ListarRoles
},
{
    path: '/productos/ActualizarProductos/:id',
    name: "ActualizarProductos",
    component: ActualizarProductos
},
{
    path: '/categorias/ActualizarCategorias/:id',
    name: "ActualizarCategorias",
    component: ActualizarCategorias
},
{
    path: '/rol/ActualizarRoles/:id',
    name: "ActualizarRoles",
    component: ActualizarRoles
},
{
    path: '/productos/BorrarProductos/:id',
    name: "BorrarProductos",
    component: BorrarProductos
},
{
    path: '/categorias/BorrarCategoria/:id',
    name: "BorrarCategoria",
    component: BorrarCategoria
},
{
    path: '/rol/BorrarRol/:id',
    name: "BorrarRol",
    component: BorrarRol
},
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;