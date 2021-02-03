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

    /**
     * Update the organization's subscription plan
     */
    static async update(data)
    {
        const { env } = useEnv()
        const { HTTP, authHeaders, jsonHeaders } = useHTTP()

        const response = await HTTP.patch(`${env('VITE_SERVER_URL')}/organization/subscription`, {
            headers: { ...authHeaders, ...jsonHeaders  },
            body: JSON.stringify(data),
            clientAPI: `${API} @ update`,
            returnResponse: false,
        })

        return response
    }
}

export default OrganizationSubscription