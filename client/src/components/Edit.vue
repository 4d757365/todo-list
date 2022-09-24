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
            'isEditMode',
            'title',
            'item',
        ]    
    }
</script>
<template>
     <v-layout>
                <v-flex xs9 class="text-xs-left">
                    <span v-if="!isEditMode" @click="$emit('onClick')">
                        {{title}}
                    </span>
                    <v-text-field autofocus v-if="isEditMode" :value="title"
                        @input="$emit('onInput', $event)" @keyup.enter="$emit('onSave')">

                    </v-text-field>
                </v-flex>
                <v-flex flex>
                    <v-icon class="mr-6" @click="$emit('onEdit')" v-if="!isEditMode">mdi-pencil</v-icon>
                    <v-icon class="mr-6" @click="$emit('onSave')" v-if="isEditMode">mdi-check</v-icon>
                    <v-icon @click="$emit('onRemove')">mdi-delete</v-icon>
                </v-flex>
            </v-layout>
</template>
