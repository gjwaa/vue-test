import Vue from 'vue'
import router from 'vue-router'
import Login from "../components/Login";
import NotFound from "../components/common/NotFound";
import Index from "../components/Index";
// import axios from "axios";
// import VueAxios from 'vue-axios'
import Regis from "../components/Regis";
import Nav from "../components/common/Nav";
import Admin from "../components/admin/Admin";
import UserInfo from "../components/admin/UserInfo";
import UserTable from "../components/admin/UserTable";

// Vue.prototype.$axios = axios;
// Vue.use(VueAxios, axios)
Vue.use(router)



export default new router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regis',
      component: Regis
    },
    {
      path: '/nav',
      component: Nav
    },
    {
      path: '/admin',
      component: Admin,
      children:[
        {path:'/admin/userInfo',component:UserInfo},
        {path:'/admin/userTable',component:UserTable},
      ]
    }
  ]
});

