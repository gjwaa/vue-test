import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import './assets/css/Global.css'
import Axios from "axios";
import VueAxios from 'vue-axios'

Vue.prototype.$axios = Axios;
Axios.defaults.baseURL='api';


Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


