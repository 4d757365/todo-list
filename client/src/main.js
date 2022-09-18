import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuetify from 'vuetify'

import store from './stores/index'

import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false;

import './assets/main.css'

Vue.use(Vuetify);
sync(store, router);

new Vue({
  router,
  vuetify : new Vuetify(),
  store,
  render: (h) => h(App),
}).$mount('#app')
