<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Create from './Create.vue';
import Edit from './Edit.vue';
export default {
    mounted() {
        this.fetchProjects();
    },
    computed: {
        ...mapState("projects", [
            "newProjectName",
            "projects",
        ])
    },
    methods: {
        ...mapMutations("projects", [
            "setNewProjectName",
            "setEditMode",
            "unsetEditMode",
            "setProjectTitle",
        ]),
        ...mapActions("projects", [
            "createProject",
            "fetchProjects",
            "saveProject",
            "removeProject",
        ]),
    },
    components: {
        Create,
        Edit
    }
}
</script>
<template>
    <Panel title="Projects">
        <div v-for="project in projects" :key="project.id" class="project mt-2">
            <Edit :isEditMode="project.isEditMode" :title="project.title"
                @onInput="setProjectTitle({project, title: $event})" @onEdit="setEditMode(project)"
                @onSave="saveProject(project)" @onRemove="removeProject(project)" />
        </div>
        <Create placeholder="New project" @onInput="setNewProjectName" :value="newProjectName"
            @create="createProject" />
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