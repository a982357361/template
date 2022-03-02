import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/view/login'),
        },
        {
            path: '/',
            name: 'home',
            component: () => import('@/view/layout/layout'),
            children: [
                {
                    path: '/',
                    name: 'welcome',
                    component: () => import('@/view/welcome'),
                },
                {
                    path: '/welcome',
                    name: 'welcome',
                    component: () => import('@/view/welcome'),
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('@/view/user'),
                },
                {
                    path: '/project',
                    name: 'project',
                    component: () => import('@/view/project'),
                },
                {
                    path: '/design',
                    name: 'design',
                    component: () => import('@/view/design'),
                },
                {
                    path: '/other',
                    name: 'other',
                    component: () => import('@/view/other'),
                },

            ]
        },

    ]
})