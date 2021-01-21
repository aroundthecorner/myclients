import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'
import useErrorHandling from '../features/useErrorHandling.js'

class UserOnline
{
    /**
     * Ping that the user is online
     */
    static async ping(data = null)
    {
        const { env } = useEnv()
        const { jsonHeaders, authHeaders } = useHTTP()
        const { showError, showErrorOccured } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/user-online`, {
                method: 'POST',
                headers: { ...jsonHeaders, ...authHeaders },
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/user_online.js @ ping',
                }
                
                const text = await response.text()
                errorMessage.body = text

                showError(errorMessage)
                return
            }
        } catch (error) {
            showErrorOccured()
            console.log(error)
        }
    }

    /**
     * Notify the server that the user has been active
     * in the last 1 minute.
     */
    static async isActive(data = null)
    {
        const { env } = useEnv()
        const { jsonHeaders, authHeaders } = useHTTP()
        const { showError, showErrorOccured } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/user-is-active`, {
                method: 'POST',
                headers: { ...jsonHeaders, ...authHeaders },
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/user_online.js @ isActive',
                }
                
                const text = await response.text()
                errorMessage.body = text

                showError(errorMessage)
                return
            }
        } catch (error) {
            showErrorOccured()
            console.log(error)
        }
    }
}

export default UserOnline