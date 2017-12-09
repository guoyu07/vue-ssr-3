/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction 首页 getters
*/

export const getters = {
    activeItems(state) {
        if (state.items !== null) {
            return state.items;
        }
        return [];
    },
    viewSettings(state) {
        return state.settings.view;
    }
}