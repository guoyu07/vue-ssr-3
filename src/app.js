/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction 创建根 Vue 实例，并直接挂载到 DOM
*/

import Vue from 'vue'
import { sync } from 'vuex-router-sync';
import App from './App.vue'
import router from './router';
import store from './store';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue(Vue.util.extend({
    router,
    store,
}, App));

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };
