
import Home from '../views/Home.vue'
var index =[
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../views/Login.vue')
    },
    {
        path: '/login_in',
        name: 'login_in',
        component: ()=>import('../views/LoginIn.vue')
    },
    {
        path: '/posts',
        name: 'posts',
        component: ()=>import('../views/post/index.vue')
    },
]
export default index