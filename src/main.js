import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './store/index';
import { currency } from './lib/currency';

import '../src/assets/css/base.css'; // 初始化样式
import './assets/scss/index.scss'; // 初始化引入 scss
import '../src/assets/icon/iconfont'; // 引入svg iconfont js 
import './assets/icon/iconfont.css'; // 引入 iconfont.css
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.filter('currency', currency);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
