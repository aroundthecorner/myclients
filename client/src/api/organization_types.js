import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'
import useErrorHandling from '../features/useErrorHandling.js'

class OrganizationTypes
{
    /**
     * Retrieve organization types
     */
    static async get(data = null)
    {
        const { env } = useEnv()
        const { jsonHeaders } = useHTTP()
        const { showError, showErrorOccured } = useErrorHandling()

        try {
            const response = await fetch(`${env('VITE_SERVER_URL')}/organization-types`, {
                method: 'GET',
                headers: jsonHeaders,
            })

            if (!response.ok) {
                let errorMessage = {
                    statusText: response.statusText,
                    statusCode: response.status,
                    body: '',
                    url: response.url,
                    clientAPI: 'api/organization_types.js @ get',
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

export default OrganizationTypes