import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '../routes.js'
import Auth from '../api/auth.js'

function useAuth()
{
    const store = useStore()
    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)
    const userExists = ref(false)
    const name = ref('')
    const organizationName = ref('')
    const organizationType = ref('')
    const selectedOrganizationType = ref('')

    /**
     * Perform user login
     */
    async function login()
    {
        isLoading.value = true

        const result = await Auth.login({
            email: email.value,
            password: password.value,
        })

        isLoading.value = false

        if (loginSuccessful(result)) {
            setUserInStore(result.user, result.access_token)
            goToRouteBeforeLogin()
        } else {
            store.dispatch('app/showNotificationMessage', {
                icon: 'img/warning.png',
                title: 'Wrong username or password',
                body: 'The username or password you entered is not correct.',
                hideDelay: 3,
            })
        }
    }

    /**
     * Log out a user
     */
    async function logout()
    {
        localStorage.removeItem('myclients_user')
        window.location = '/login'
    }

    /**
     * Check if login was successful
     * 
     * @param result json
     * @return boolean
     */
    function loginSuccessful(result)
    {
        return result !== undefined && result.status_code == 200
    }

    /**
     * Save the logged in user in store
     * 
     * @param user object
     * @param access_token string
     */
    function setUserInStore(user, access_token)
    {
        store.dispatch('user/setUser', {
            ...user,
            token: access_token,
        })
    }

    /**
     * Go to route after login
     * 
     * @param route string
     */
    function goToRouteBeforeLogin()
    {
        router.push({
            path: localStorage.getItem('myclients_path_before_login')
        })
    }

    /**
     * Check if user is logged in
     * 
     * @return boolean
     */
    function userLoggedIn()
    {
        return localStorage.getItem('myclients_user') !== null
    }

    /**
     * Restore session after page reload
     */
    function restoreSession()
    {
        let user = localStorage.getItem('myclients_user')

        if (user) {
            store.dispatch('user/setUser', JSON.parse(user))
        }
    }

    /**
     * Check if user exists
     */
    async function checkUserExists()
    {
        const result = await Auth.checkUserExists({
            email: email.value,
        })

        userExists.value = result
    }

    /**
     * Register new user
     */
    async function register() {
        const result = await Auth.register({
            email: email.value,
            name: name.value,
            password: password.value,
            organizationName: organizationName.value,
            selectedOrganizationType: selectedOrganizationType.value,
        })

        alert('Registered, now you can sign them in!')
    }

    return {
        login, email, password, isLoading, userLoggedIn, restoreSession,
        checkUserExists, userExists, logout, register,
    }
}

export default useAuth