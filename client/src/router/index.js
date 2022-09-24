import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue' 
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
});


