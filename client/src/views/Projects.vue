<script>
  import Projects from '@/components/Projects.vue';
import { mapGetters } from 'vuex';
import router from '../router';

  export default {
    components: {
      Projects,
    },
    mounted() {
      if (!this.isLoggedIn) {
        return router.push('/login');
      }
    },
    computed: {
      ...mapGetters('authentication', [
        'isLoggedIn'
      ])
    },
  }
</script>

<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects></Projects>
      </v-flex>
      <v-flex xs8 class="pl-4">
        <Panel title="Tasks">
          <h1>TASKS</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
