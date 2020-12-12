import auth from './middleware/auth.js'
import AppLayout from "./views/layouts/app.vue"
import LoginLayout from "./views/layouts/login.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        component: AppLayout,

        children: [
            {
                path: '',
                name: "dashboard",
                component: () => import('./views/dashboard.vue'),
            },

            {
                path: '/calendar',
                name: "calendar",
                component: () => import('./views/calendar.vue'),
            },
        ],

        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: "/login",
        component: LoginLayout,
        children: [
            {
                path: '',
                name: "login",
                component: () => import('./views/login.vue'),
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


/**
 * Route Middleware
 */

function nextFactory(context, middleware, index)
{
    const subsequentMiddleware = middleware[index]

    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    // Middleware
    if (to.meta.middleware)
    {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = { from, next, router, to }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next();
})

export default router