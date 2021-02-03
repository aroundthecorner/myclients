const API = 'api/organization_subscription.js'
import useEnv from '/@/features/useEnv.js'
import useHTTP from '/@/features/useHTTP.js'

class OrganizationSubscription
{
    /**
     * Get organization's subscription
     */
    static async get(data)
    {
        const { env } = useEnv()
        const { HTTP, authHeaders, jsonHeaders } = useHTTP()

        const response = await HTTP.get(`${env('VITE_SERVER_URL')}/organization/subscription`, {
            headers: { ...authHeaders, ...jsonHeaders  },
            clientAPI: `${API} @ get`,
            returnResponse: true,
        })

        return response
    }
}

export default OrganizationSubscription