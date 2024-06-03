import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import Blog from './pages/Blog.vue';
import About from './pages/About.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({

  history: createWebHistory(),

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/Blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404,
    },
  ]
})

export { router }