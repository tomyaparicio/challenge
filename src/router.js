import Vue from 'vue';
import Router from 'vue-router';
import LoginPet from './view/LoginPet.vue';
import RegisterPet from './view/RegisterPet.vue';
import RecoverPasswordPet from './view/RecoverPasswordPet.vue';
import DashboardPrincipal from './view/DashboardPrincipal.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPet
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPet
    },
    {
      path: '/recover-password',
      name: 'RecoverPassword',
      component: RecoverPasswordPet
    },
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardPrincipal,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
