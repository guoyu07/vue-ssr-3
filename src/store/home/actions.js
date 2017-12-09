/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction 首页 actions
*/

export const actions = {
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
}