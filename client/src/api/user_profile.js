import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'
import useErrorHandling from '../features/useErrorHandling.js'

class UserProfile
{
    /**
     * Upload user's profile picture
     */
    static async uploadProfilePicture(data)
    {
        const { env } = useEnv()
        const { authHeaders, jsonHeaders } = useHTTP()
        const { showError, showErrorOccured } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/user-settings/profile-picture`, {
                method: 'POST',
                body: data,
                headers: { ...authHeaders, 'Accept': 'application/json' }
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/user_profile.js @ uploadProfilePicture',
                }
                
                const text = await response.text()
                errorMessage.body = text

                showError(errorMessage)
                return
            }

            return await response.json()
        } catch (error) {
            showErrorOccured()
            console.log(error)
        }
    }

    /**
     * Update user's profile
     */
    static async update(data)
    {
        const { env } = useEnv()
        const { authHeaders } = useHTTP()
        const { showError, showErrorOccured } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/user-settings/profile`, {
                method: 'PATCH',
                body: data,
                headers: { ...authHeaders, ...jsonHeaders  }
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/user_profile.js @ update',
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

export default UserProfile