import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

import login from '../components/login'
import manage from '../components/manage'

const routes = [
    {
        path:'/',
        component:login
    },
    {
        path:'/manage',
        component:manage
    }
]

export default new Router({
	routes
})