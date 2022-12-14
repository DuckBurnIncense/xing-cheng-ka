import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        phone: '',
        places: '广西壮族自治区南宁市'
    },
    getters: {
    },
    mutations: {
        phone(state, value) {
            state.phone = value;
        },
        places(state, value) {
            state.places = value;
        },
    },
    actions: {
    },
    modules: {
    }
});
