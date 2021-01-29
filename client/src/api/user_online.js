const API = 'api/user_online.js'
import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'

class UserOnline
{
    /**
     * Ping that the user is online
     */
    static async ping()
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders, authHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/user-online`, {
            headers: { ...jsonHeaders, ...authHeaders },
            clientAPI: `${API} @ ping`,
            returnResponse: false,
        })

        return response
    }

    /**
     * Notify the server that the user has been active
     * in the last 1 minute.
     */
    static async isActive()
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders, authHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/user-is-active`, {
            headers: { ...jsonHeaders, ...authHeaders },
            clientAPI: `${API} @ isActive`,
            returnResponse: false,
        })

        return response
    }
}

export default UserOnline