<script>
    import { mapMutations, mapState, mapActions } from 'vuex';
    import Create from './Create.vue';
    import Edit from './Edit.vue';
    export default {
        computed: {
            ...mapState ('tasks', [
                'tasks',
                'newTaskName',
                
            ]),
        },
        methods: {
            ...mapActions('tasks', [
                'createTask',
                'removeTask',
                'saveTask',

            ]),
            ...mapMutations('tasks', [
                'setNewTaskName',
                'setTaskDescription',
                'setEditMode',
            ])
        },
        components: {
            Create,
            Edit
        }

    }
</script>

<template>
    <Panel title="Tasks">
        <div v-for="task in tasks" :key="task.id" class="task mt-2">
            <Edit :isEditMode="task.isEditMode" 
                :title="task.description"
                @onInput="setTaskDescription({task, description: $event})" 
                @onEdit="setEditMode(task)"
                @onSave="saveTask(task)" 
                @onRemove="removeTask(task)" />
        </div>

        <Create placeholder="Tasks: " 
                @onInput="setNewTaskName" 
                :value="newTaskName"
                @create="createTask" />
    </Panel>
</template>



<style>
.task {
    font-size: 18px;
}

.icon {
    cursor: pointer;
}
</style>
