<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { computed } from 'vue';
export default {
    computed: {
        ...mapState('authentication', [
            'loginEmail',
            'loginPassword',
            'loginError',
        ]),
    },
    methods: {
        ...mapMutations('authentication', [
            'setLoginEmail',
            'setLoginPassword',
        ]),
        ...mapActions('authentication', [
            'login',
        ]),
    }
};
</script>
<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <h1>Login</h1>
                <v-text-field label="Email" placeholder="Email" :value="loginEmail" @input="setLoginEmail">
                </v-text-field>
                <v-text-field label="Password" placeholder="Password" type="password" autocomplete="new-password" :value="loginPassword" @input="setLoginPassword"> 
                </v-text-field>
                <v-alert color="primary" type="error" :value="loginError">{{loginError}}</v-alert>
                <v-btn color="primary" @click="login">
                    <v-icon class="px-2">mdi-fingerprint</v-icon>
                    Login
                </v-btn>
                <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
</template>



