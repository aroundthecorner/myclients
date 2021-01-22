import { computed } from 'vue'
import store from '../store/index.js'
import useAuth from '../features/useAuth.js'
import UserOnline from '../api/user_online.js'

function useOnline()
{
    const { isLoggedIn } = useAuth()

    const lastClick = computed(() => store.state.app.lastClick)

    /**
     * Send user online ping to notify that the user is online
     * which is not the same as active.
     */
    function sendUserOnlinePing()
    {
        if (isLoggedIn()) {
            UserOnline.ping()
        }

        setTimeout(() => {
            sendUserOnlinePing()
        }, 60000)
    }

    /**
     * Notifiy the server that the user is active
     */
    function sendUserActive()
    {
        if (isLoggedIn()) {
            UserOnline.isActive()
        }
    }

    /**
     * Check if given time is older than one minute
     */
    function isOneMinuteAgo(time)
    {
        const MINUTE     = 60000
        const MINUTE_AGO = Date.now() - MINUTE

        if (time.value === '') return true

        if (time.value <= MINUTE_AGO) {
            return true
        }
    }

    /**
     * Register a user active listener
     */
    function registerUserActiveListener()
    {
        document.addEventListener('click', event => {
            if (isOneMinuteAgo(lastClick)) {
                sendUserActive()
                store.dispatch('app/updateLastClick')
            }
        })
    }

    return {
        sendUserOnlinePing, registerUserActiveListener
    }
}

export default useOnline