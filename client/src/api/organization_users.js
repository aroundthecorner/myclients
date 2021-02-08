const API = 'api/organization_users.js'
import useEnv from '/@/features/useEnv.js'
import useHTTP from '/@/features/useHTTP.js'

class OrganizationUsers
{
    /**
     * Get organization's users
     */
    static async get(data)
    {
        const { env } = useEnv()
        const { HTTP, authHeaders, jsonHeaders } = useHTTP()

        const response = await HTTP.get(`${env('VITE_SERVER_URL')}/organization/${data.organizationId}/users/?perPage=${data.perPage}&search=${data.search}&orderBy=${data.orderBy}&sortDirection=${data.sortDirection}`, {
            headers: { ...authHeaders, ...jsonHeaders  },
            clientAPI: `${API} @ get`,
            returnResponse: true,
        })

        return response
    }
}

export default OrganizationUsers