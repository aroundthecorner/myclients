import useEncryption from '../features/useEncryption.js'

export default function auth({ to, next, router }) {
    let user = localStorage.getItem('myclients_user')

    if (!user) {
        const { encrypt } = useEncryption()

        localStorage.setItem('myclients_path_before_login', encrypt(to.path))

        return next('/login')
    }

    return next();
}