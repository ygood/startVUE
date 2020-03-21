import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

import login from '../components/login'

const routes = [
    {
        path:'/',
        component:login
    }
]

export default new Router({
	routes
})