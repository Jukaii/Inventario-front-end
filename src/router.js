import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Rol from './components/Rol.vue'

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
 }     
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;