// Vue, Vuex, Router and Axios


import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from "vue-router";
import axios from 'axios';
import wysiwyg from "vue-wysiwyg";
import VueCookie from "vue-cookie";
import VueProgressBar from 'vue-progressbar';
import VueYoutube from 'vue-youtube';
import './utils/filters.js';
import './directives/directives.js';


// Custom CSS
require('normalize.css');
require('../css/app.css');
require('../css/fonts.css');
// Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
require('../css/element-ui-theme/index.css');
import locale from 'element-ui/lib/locale/lang/es';
import VueNumeric from 'vue-numeric'


// Font Awesome Icons
require('../css/pro/css/fontawesome-all.css');
require('../css/font-awesome/css/fontawesome-all.min.css');
import 'animate.css'

// Moment JS with Spanish Translation
import moment from 'moment';

//charts

import VueChartkick from 'vue-chartkick'
import Highcharts from 'highcharts'
import loadExporting from 'highcharts/modules/exporting';
import 'highcharts/modules/offline-exporting';


require( 'moment/locale/es');
Vue.use(VueProgressBar, {
    color: '#2cbb44',
    failedColor: '#fbbd08',
    height: '10px'
});



Vue.use(VueCookie);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI, { locale } );
Vue.use(require('vue-moment') );
Vue.use (wysiwyg, {});
Vue.use(VueYoutube);
Vue.use(VueNumeric);

loadExporting(Highcharts);
Vue.use(VueChartkick, {adapter: Highcharts});

import 'd3/dist/d3.js';
import 'c3/c3.css';
import 'c3/c3.js';

window.$ = window.jQuery = require('jquery');
require("jquery-ui");
require('../resources/jquery.timers/jquery.timers');

window.Vue = Vue;
window.axios = axios;
window.moment = moment;
window._ = require('lodash');

window.axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest',
	'Accept': 'application/json',
   // 'cache-control':'no-cache'
};


if (window.localStorage.getItem('spc_token')) {
	window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('spc_token');
	//
}

//window.axios.defaults.baseURL = 'https://spcqa.sre.gob.mx';

//window.axios.defaults.baseURL = 'http://172.18.7.95:8000';




