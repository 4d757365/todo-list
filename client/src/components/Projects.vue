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

}
</script>
<template>
    <Panel title="Projects">
        <div v-for="project in projects" :key="project.id" class="project mt-2">
            <v-layout>
                <v-flex xs9 class="text-xs-left">
                    <span v-if="!project.isEditMode">
                        {{project.title}}
                    </span>
                    <v-text-field autofocus v-if="project.isEditMode"  :value="project.title" @input="setProjectTitle({project, title: $event})" @keyup.enter="saveProject(project)">
                        
                    </v-text-field>
                </v-flex>
                <v-flex flex>
                    <v-icon class="mr-6" @click="setEditMode(project)" v-if="!project.isEditMode">mdi-pencil</v-icon>
                    <v-icon class="mr-6" @click="saveProject(project)" v-if="project.isEditMode">mdi-check</v-icon>
                    <v-icon @click="removeProject(project)">mdi-delete</v-icon>
                </v-flex>
            </v-layout>


        </div>
        <v-layout row wrap class="mt-4 pl-6 pb-6">
            <v-flex xs8>
                <v-text-field placeholder="New project name..." @input="setNewProjectName" :value="newProjectName" @keyup.enter="createProject">
                </v-text-field>
            </v-flex>
            <v-flex xs8>
                <v-btn class="mt-3 -4" color="primary" @click="createProject">
                    <v-icon class="mr-2">mdi-folder-plus</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<style>
    .project {
        font-size: 18px;
    }
    .icon {
        cursor: pointer;
    }
</style>