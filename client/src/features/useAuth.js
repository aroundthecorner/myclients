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
    const isResetLinkSent = ref(false)

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
    async function register()
    {
        isLoading.value = true
        
        try {
            const result = await Auth.register({
                email: email.value,
                name: name.value,
                password: password.value,
                organizationTypeId: selectedOrganizationType.value.id,
                organizationName: organizationName.value,
            })

            if (result.success) {
                login()
            }
        } catch (error) {
            isLoading.value = false
            return
        }
    }

    /**
     * Send a reset password link
     */
    async function sendResetPasswordLink()
    {
        isLoading.value = true
        
        try {
            const result = await Auth.sendResetPasswordLink({
                email: email.value,
            })

            if (result.status == 'success') {
                isResetLinkSent.value = true
            } else {
                isResetLinkSent.value = false
            }

            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            return
        }
    }

    /**
     * Change password
     */
    async function resetPassword()
    {
        isLoading.value = true
        
        try {
            const result = await Auth.resetPassword({
                email: email.value,
                password: password.value,
                token: router.currentRoute.value.query.token,
            })

            if (result.status == 'success') {
                login()
            } else {
                store.dispatch('app/showNotificationMessage', {
                    icon: 'img/warning.png',
                    title: 'Wrong email or token',
                    body: 'The email or token is incorrect or expired.',
                    hideDelay: 3,
                })
            }

            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            return
        }
    }

    return {
        login, email, name, password, isLoading, userLoggedIn, restoreSession,
        checkUserExists, userExists, logout, register, organizationType,
        selectedOrganizationType, organizationName, sendResetPasswordLink,
        resetPassword, isResetLinkSent
    }
}

export default useAuth