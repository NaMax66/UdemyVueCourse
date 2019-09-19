import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },

        stringCounter(state) {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        /*like setters*/
        increment:(state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }

    },
    actions: {
        /*increment: context => {
            context.commit('increment');
        }*/
        //es6 way
        increment: ({ commit }, payload) => {
            commit('increment', payload)
        },
        decrement: ({ commit }) => {
            commit('decrement')
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.by)
            },payload.duration)
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            },payload.duration)
        }
    }
});
