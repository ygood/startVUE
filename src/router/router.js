import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

import login from '../view/login'
import manage from '../view/manage'
import diff from '../view/workview/codemirrorDiff'
import overflowview from '../view/workview/overflowview'

const routes = [
    {
        path:'/',
        component:login
    },
    {
        path:'/manage',
        component:manage,
        children:[
            {
                path:'diff',
                component:diff,  
            },
            {
                path:'overflowview',
                component:overflowview,  
            }
        ]
    }
]

export default new Router({
	routes
})