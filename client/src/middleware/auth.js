export default function auth({ to, next, router }) {
    let user = localStorage.getItem('scaffold_app_name_user')

    if (!user) {
        return next('/login')
    }

    return next();
}