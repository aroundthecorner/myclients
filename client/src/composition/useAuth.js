import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '../routes.js'
import Auth from '../api/auth.js'

function useAuth()
{
    const store = useStore()
    const username = ref('admin')
    const password = ref('password')
    const isLoading = ref(false)

    /**
     * Perform user login
     */
    async function login()
    {
        isLoading.value = true

        const result = await Auth.login({
            username: username.value,
            password: password.value,
        })

        isLoading.value = false

        if (loginSuccessful(result)) {
            setUserInStore(result.user, result.access_token)
            goToRoute('home')
        } else {
            showErrorMessage(result?.message ?? 'Error')
        }
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
    function goToRoute(route)
    {
        router.push({
            name: "home"
        })
    }

    /**
     * Check if user is logged in
     * 
     * @return boolean
     */
    function userLoggedIn()
    {
        return localStorage.getItem('scaffold_app_name_user') !== null
    }

    /**
     * Show error if login was unsuccessful
     * 
     * @param message string
     */
    function showErrorMessage(message)
    {
        if (message == 'Unauthorized') {
            alert('Wrong username or password')
        } else {
            alert('Something went wrong')
        }
    }

    /**
     * Restore session after page reload
     */
    function restoreSession()
    {
        let user = localStorage.getItem('scaffold_app_name_user')

        if (user) {
            store.dispatch('user/setUser', JSON.parse(user))
        }
    }

    return {
        login, username, password, isLoading, userLoggedIn, restoreSession
    }
}

export default useAuth