<script>
import { computed } from 'vue'
import Toolbar from '@/components/Toolbar.vue';
export default {
  components: {
    Toolbar,
  },
};
</script>



<template>
  <v-app>
    <Toolbar/>
    <router-view></router-view>
  </v-app>
</template>

