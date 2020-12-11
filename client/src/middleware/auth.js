export default function auth({ to, next, router }) {
    let user = localStorage.getItem('myclients_user')

    if (!user) {
        localStorage.setItem('myclients_path_before_login', to.path)

        return next('/login')
    }

    return next();
}