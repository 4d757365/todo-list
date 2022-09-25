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
                'toggleCompleted'
            ]),
            checkClicked(task) {
                this.toggleCompleted(task);
                this.saveTask(task);
            }
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
                @onRemove="removeTask(task)" 
                >
                <v-icon @click="checkClicked(task)">
                    {{task.completed ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'}}
                </v-icon>

                </Edit>
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

.mdi {
    cursor: pointer;
}
</style>
