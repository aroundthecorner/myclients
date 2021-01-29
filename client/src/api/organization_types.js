const API = 'api/languages.js'
import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'

class OrganizationTypes
{
    /**
     * Retrieve organization types
     */
    static async get()
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.get(`${env('VITE_SERVER_URL')}/organization-types`, {
            headers: { ...jsonHeaders },
            clientAPI: `${API} @ get`,
            returnResponse: true,
        })

        return response
    }
}

export default OrganizationTypes