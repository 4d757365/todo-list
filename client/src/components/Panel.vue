<script>
    export default {
        props: {
            title: String,
        }
    };
</script>

<template>
    <div class="white elevation-2">
        <v-toolbar class="white--text" color="primary">
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>No content defined.</slot>
        </div>
    </div>
</template>