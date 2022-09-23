import HTTP from '../http'
import router from '../router'
export default {
    namespaced: true,
    state: {
        registerEmail: 'user',
        registerPassword: 'password',
        registerError: null,
        loginEmail: 'user',
        loginPassword: 'password',
        loginError: null,
        token: null,
    },
    actions: {
        logout({commit}) {
            commit('setToken', null);
            router.push('/login');
        },
        register({commit, state }) {
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
            })
            .then(({data}) => {
                commit('setToken', data.token);
                router.push('/');
            })
            .catch(() => {
                commit('setRegisterError', 'An error has occured trying to register your account.');
            });
        },
        login ({commit, state }) {
            commit('setLoginError', null);
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            })
            .then(({data}) => {
                commit('setToken', data.token);
                router.push('/');
            })
            .catch(() => {
                commit('setLoginError', 'An error has occured trying to login.');
            });
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
    },
};