import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'
import AccountView from '../views/AccountView.vue'
import BikeList from '../views/BikeList.vue'

import { supabase } from '../lib/supabaseClient'
import BikeListVue from '@/views/BikeList.vue'

let localUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
	  meta: { requiresAuth: true }
    },
	{
      path: '/login',
	  name: 'login',
	  component: LoginView
	},
	{
		path: '/bikes',
		name: 'bikes',
		component: BikeList
	},
	{
	  path: '/unauthorized',
	  name: 'unauthorized',
	  component: UnauthorizedView
	}
  ]
})

async function getUser(next) {
	localUser = await supabase.auth.getSession();
	if (localUser.data.session == null) {
		next('/unauthorized')
	}
	else {
		next();
	}
}


router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		getUser(next);
	}
	else {
		next();
	}
})



export default router
