import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';
// Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es';

Vue.use(VueRouter);
Vue.use(ElementUI, { locale } );


window.$ = window.jQuery = require('jquery');
window.Vue = Vue;
window.axios = axios;

window.axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest',
	'Accept': 'application/json',
};
