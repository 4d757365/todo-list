<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('authentication', [
            'isLoggedIn',
        ]),
    },
};
</script>
<template>
    <v-app>
        <v-card class="pa-2" color="white" flat height="200px" tile>
            <v-toolbar dense fixed>
                <v-toolbar-title class="mr-4 font-weight-black font-italic blue--text">TODO&#8482;</v-toolbar-title>
                <v-toolbar-items>
                    <v-btn class="mx-2" color="primary" v-if="isLoggedIn">
                        <v-icon>mdi-playlist-check</v-icon>
                        Projects
                    </v-btn>
                </v-toolbar-items>

                <v-spacer></v-spacer>

                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn class="mx-2" color="primary" to="/register" v-if="!isLoggedIn">
                        <v-icon>mdi-account-plus</v-icon>
                        Register
                    </v-btn>

                    <v-btn class="mx-2" color="primary" v-if="!isLoggedIn">
                        <v-icon>mdi-login</v-icon>
                        Login
                    </v-btn>

                    <v-btn class="mx-2" color="primary" v-if="isLoggedIn">
                        <v-icon>mdi-logout</v-icon>
                        Logout
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-card>
    </v-app>
</template>

<style lang="sass">
    .v-application--wrap
        min-height: 0
        gap: 4rem
        

</style>