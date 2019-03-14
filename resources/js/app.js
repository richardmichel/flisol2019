require('./main');
import App from './components/views/layout/App.vue';
// Router and routes
import VueRouter from 'vue-router';
import {routes} from './routes.js';


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});



window.confApp = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});






