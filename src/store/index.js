import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        settings: {
            view: {
                pageSize: 10
            }
        },
        items: []
    },
    actions: {
        LOAD_ACTIVE_ITEMS(context) {
            const {commit} = context;
            // mock API response
            const collection = [
                {
                    title: 'Item 1',
                    description: 'Description for item 1'
                }, {
                    title: 'Item 2',
                    description: 'Description for item 2'
                }, {
                    title: 'Item 3',
                    description: 'Description for item 3'
                }, {
                    title: 'Item 4',
                    description: 'Description for item 4'
                }, {
                    title: 'Item 5',
                    description: 'Description for item 5'
                }
            ];

            commit('SET_ACTIVE_ITEMS', collection);

            return collection;
        }
    },
    getters: {
        activeItems(state) {
            if (state.items !== null) {
                return state.items;
            }
            return [];
        },
        viewSettings(state) {
            return state.settings.view;
        }
    },
    /* eslint-disable no-param-reassign */
    mutations: {
        SET_ACTIVE_ITEMS(state, collection) {
            state.items = collection;
        }
    },
    /* eslint-enable no-param-reassign */
});

export default store;
