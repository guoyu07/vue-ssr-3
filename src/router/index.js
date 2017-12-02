import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// route-level code splitting
const Home = () => import('../views/home.vue')
const About = () => import('../views/about.vue')

export default new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/about',
            component: About
        }
    ]
});
