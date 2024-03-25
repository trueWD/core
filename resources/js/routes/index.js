import { createRouter, createWebHistory } from 'vue-router'

import { loginStore } from '@/stores/auth/login.js';
import { appStore } from "@/stores/App.js";

const routes = [
    // authentication routes
    {
        path: '/login',
        name: 'Login',
        meta: { title: 'Login' },
        component: () => import('@/modules/auth/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: { title: 'Register' },
        component: () => import('@/modules/auth/register.vue')
    },
    {
        path: '/forget-password',
        meta: { title: 'Forget Password' },
        component: () => import('@/modules/account/forgot-password.vue')
    },
    {
        path: '/reset-password/:token',
        meta: { title: 'Reset Password' },
        component: () => import('@/modules/account/reset-password.vue')
    },



    /*

    // Custom Mulules

    */

    {
        path: '/',
        name: "Dashboard",
        meta: { title: 'Dashboard', authRequired: true },
        component: () => import("@/modules/dashboard/index.vue"),
    },
    {
        path: "/admin/roles",
        name: "Roles",
        meta: { title: "Roles", authRequired: true },
        component: () => import("@/modules/admin/roles.vue"),
    },
    {
        path: "/admin/users",
        name: "Users",
        meta: { title: "Users", authRequired: true },
        component: () => import("@/modules/admin/users.vue"),
    },
    {
        path: "/account/myacount",
        name: "MyAcount",
        meta: { title: "Users", authRequired: true },
        component: () => import("@/modules/account/index.vue"),
    }








]



const router = createRouter({
    history: createWebHistory(),
    routes
})




router.beforeEach(async (to, from, next) => {
    const useAppStore = appStore();
    const useLogin = loginStore()


    if(to.name == 'Login'){
      console.log('Merhaba Login:', to);
    }
    console.log('Yönlendirilen Rota:', to);

    if (to.meta.authRequired) { // Eğer sayfa giriş yapmayı gerektiriyorsa
      console.log('ilk ifin içinde');
      if (useAppStore.user) { // Kullanıcı zaten oturum açmışsa
        console.log('ikinci ifin içinde');
        next(); // Doğrudan sayfaya yönlendir
      } else {
        console.log('else in içinde');
        try {
          const reseponse = await useLogin.getUserInfo(); // Kullanıcı bilgilerini almayı dene
          next(); // Başarılıysa sayfaya yönlendir
        } catch (error) {
          next('/login'); // Giriş sayfasına yönlendir
        }
      }
    } else {
      next(); // Giriş yapma gerektirmeyen sayfalara izin ver
    }
  });




export default router;
