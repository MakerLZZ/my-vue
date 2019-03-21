import Vue from 'vue';
import router from './router'; // 路由
import store from './store/index'; // 状态管理

import ElementUI from 'element-ui'; // element-ui
import 'element-ui/lib/theme-chalk/index.css'; // element-ui 样式
Vue.use(ElementUI); // 引用element

import '../src/assets/css/base.css'; // 初始化样式

import { currency } from './lib/currency'; // 过滤器的引用
Vue.filter('currency', currency); // 过滤器 处理货币小数问题

Vue.config.productionTip = false; // 阻止显示启动信息

import App from './App';
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
