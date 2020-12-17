import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'
import useErrorHandling from '../features/useErrorHandling.js'

class Auth
{
    /**
     * Login a user
     */
    static async login(data)
    {
        const { env } = useEnv()
        const { jsonHeaders } = useHTTP()
        const { showError } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: jsonHeaders,
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/auth.js @ login',
                }
                
                const text = await response.text()
                errorMessage.body = text

                showError(errorMessage)
                return
            }

            return await response.json()
        } catch (error) {
            alert('Error occured!')
            console.log(error)
        }
    }

    /**
     * Check if a user exists in database
     */
    static async checkUserExists(data)
    {
        const { env } = useEnv()
        const { jsonHeaders } = useHTTP()
        const { showError } = useErrorHandling()
        
        try {
            let response = await fetch(`${env('VITE_SERVER_URL')}/auth/check-user-exists`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: jsonHeaders,
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/auth.js @ checkUserExists',
                }
                
                const text = await response.text()
                errorMessage.body = text

                showError(errorMessage)
                return
            }

            response =  await response.json()
            return response.user_exists
        } catch (error) {
            alert('Error occured!')
            console.log(error)
        }
    }
}

export default Auth