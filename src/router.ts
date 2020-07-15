import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Proposals from '@/views/Proposals.vue';
import Proposal from '@/views/Proposal.vue';
import Create from '@/views/Create.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    beforeEnter: (to, from, next) => next('/balancer')
  },
  { path: '/:key/proposal/:id', name: 'proposal', component: Proposal },
  { path: '/:key/create', name: 'create', component: Create },
  { path: '/:key', name: 'proposals', component: Proposals },
  { path: '/*', name: 'error-404', beforeEnter: (to, from, next) => next('/') }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
