import { computed } from 'vue'
import store from '../store/index.js'
import UserOnline from '../api/user_online.js'

function useOnline()
{
    const lastClick = computed(() => store.state.app.lastClick)

    /**
     * Send use online ping to notify that the user is online
     * which is not the same as active.
     */
    function sendUserOnlinePing()
    {
        UserOnline.ping()

        setTimeout(() => {
            sendUserOnlinePing()
        }, 60000)
    }

    /**
     * Check if given time is older than one minute
     */
    function isOneMinuteAgo(time)
    {
        
    }

    return {
        sendUserOnlinePing
    }
}

export default useOnline