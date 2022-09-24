<script>
    import { mapMutations, mapState, mapActions } from 'vuex';
    export default {
        mounted() {
            this.fetchProjects();
        },
        computed: {
            ...mapState('projects', [
                'newProjectName',
                'projects',
            ])
        },
        methods: {
            ...mapMutations('projects', [
                'setNewProjectName',
                'setEditMode',
                'unsetEditMode',
                'setProjectTitle',
            ]),
            ...mapActions('projects', [
                'createProject',
                'fetchProjects',
                'saveProject',
                'removeProject',
            ]),
        },
        props: [
            'placeholder',
            'value',
        ]
            
        
    
    }
</script>
<template>
    <v-layout row wrap class="mt-4 pl-6 pb-6">
            <v-flex xs8>
                <v-text-field :placeholder="placeholder" :value="value" @input="$emit('onInput', $event)" @keyup.enter="$emit('create')">
                </v-text-field>
            </v-flex>
            <v-flex xs8 >
                <v-btn class="mt-3 -4" color="primary" @click="$emit('create')">
                    <v-icon class="mr-2">mdi-folder-plus</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
</template>
