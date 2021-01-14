import auth from './middleware/auth.js'
import AppLayout from "./views/layouts/app.vue"
import AuthLayout from "./views/layouts/auth.vue"
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

            {
                path: '/settings/profile',
                name: 'profileSettings',
                component: () => import('./views/settings/profile.vue'),
            },

            {
                path: '/settings/organization',
                name: 'organizationSettings',
                component: () => import('./views/settings/organization.vue'),
            },

            {
                path: '/settings/users',
                name: 'usersSettings',
                component: () => import('./views/settings/users.vue'),
            },

            {
                path: '/settings/plan-billing',
                name: 'usersPlanBilling',
                component: () => import('./views/settings/plan-billing.vue'),
            },

            {
                path: '/admin-panel/chat',
                name: 'adminPanelChat',
                component: () => import('./views/admin-panel/chat.vue'),
            },

            {
                path: '/admin-panel/screen',
                name: 'adminPanelScreen',
                component: () => import('./views/admin-panel/screen.vue'),
            },

            {
                path: '/admin-panel/clients-users/clients',
                name: 'adminPanelClientsUsersClients',
                component: () => import('./views/admin-panel/clients-users-clients.vue'),
            },

            {
                path: '/admin-panel/clients-users/users',
                name: 'adminPanelClientsUsersUsers',
                component: () => import('./views/admin-panel/clients-users-users.vue'),
            },
        ],

        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: "/login",
        component: AuthLayout,
        children: [
            {
                path: '',
                name: "login",
                component: () => import('./views/auth/login.vue'),
            }
        ],
    },

    {
        path: "/register",
        component: AuthLayout,
        children: [
            {
                path: '',
                name: "register",
                component: () => import('./views/auth/register.vue'),
            }
        ],
    },

    {
        path: "/forgot-password",
        component: AuthLayout,
        children: [
            {
                path: '',
                name: "forgotPassword",
                component: () => import('./views/auth/forgot-password.vue'),
            }
        ],
    },

    {
        path: "/reset-password",
        component: AuthLayout,
        children: [
            {
                path: '',
                name: "resetPassword",
                component: () => import('./views/auth/reset-password.vue'),
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