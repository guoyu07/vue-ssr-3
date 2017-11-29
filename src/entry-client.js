// 客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中

import { app, store } from './app';

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle

// actually mount to DOM
app.$mount('#app');
