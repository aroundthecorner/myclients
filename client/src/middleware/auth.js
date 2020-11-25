export default function auth({ to, next, router }) {
    let user = localStorage.getItem('myclients_user')

    if (!user) {
        return next('/login')
    }

    return next();
}