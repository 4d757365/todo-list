import Vue from 'vue';
import HTTP from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        projects: [],
        currentProject: null,
        newProjectName: null,
    },
    actions: {
        createProject({ commit, state }) {
            return HTTP().post('/projects', {
              title: state.newProjectName,
            })
              .then(({ data }) => {
                commit('appendProject', data);
                commit('setNewProjectName', null);
              });
          },
        fetchProjects({commit}) {
            return HTTP().get('/projects')
                .then(({ data }) => {
                  commit('setProjects', data);
                });
        },
        saveProject({commit}, project)
        {
            return HTTP().patch(`projects/${project.id}`, project)
            .then(() => {
                commit('unsetEditMode', project);
            });
        },
        removeProject({commit}, project)
        {
            return HTTP().delete(`projects/${project.id}`)
            .then(() => {
                commit('deleteProject', project);
            });
        },

    },
    getters: {
    },
    mutations: {
        setCurrentProject(state, project)
        {
            state.currentProject = project;
        },
        setNewProjectName(state, name)
        {
            state.newProjectName = name;
        },
        appendProject(state, project)
        {
            state.projects.push(project);
        },
        setProjects(state, projects)
        {
            state.projects = projects;
        },
        setProjectTitle(state, {project, title})
        {
            project.title = title;
        },
        setEditMode(state, project)
        {
            Vue.set(project, 'isEditMode', true);
        },
        unsetEditMode(state, project)
        {
            Vue.set(project, 'isEditMode', false);
        },
        deleteProject(state, project)
        {
            state.projects.splice(state.projects.indexOf(project), 1);
        }
    },
};