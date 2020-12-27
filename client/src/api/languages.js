import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'
import useErrorHandling from '../features/useErrorHandling.js'

class Languages
{
    /**
     * Retrieve languages and translations
     */
    static async get(data = null)
    {
        const { env } = useEnv()
        const { jsonHeaders } = useHTTP()
        const { showError, showErrorOccured } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/languages`, {
                method: 'GET',
                headers: jsonHeaders,
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/languages.js @ get',
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
}

export default Languages