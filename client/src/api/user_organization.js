const API = 'api/user_organization.js'
import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'

class UserOrganization
{
    /**
     * Update user's profile
     */
    static async update(data)
    {
        const { env } = useEnv()
        const { HTTP, authHeaders, jsonHeaders } = useHTTP()

        const response = await HTTP.patch(`${env('VITE_SERVER_URL')}/user-settings/organization`, {
            headers: { ...authHeaders, ...jsonHeaders  },
            body: JSON.stringify(data),
            clientAPI: `${API} @ update`,
            returnResponse: true,
        })

        return response
    }
}

export default UserOrganization