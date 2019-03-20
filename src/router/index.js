import Vue from 'vue';
import Router from 'vue-router';
// import main from '_v/main'; // 主页

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        // component: main
        component: resolve => require(['_v/main'], resolve)
    }]
});
