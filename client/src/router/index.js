import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import Register from '../views/Register.vue'


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    }
  ]
});


