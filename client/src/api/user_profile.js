const API = 'api/user_profile.js'
import useEnv from '/@/features/useEnv.js'
import useHTTP from '/@/features/useHTTP.js'

class UserProfile
{
    /**
     * Upload user's profile picture
     */
    static async uploadProfilePicture(data)
    {
        const { env } = useEnv()
        const { HTTP, authHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/user-settings/profile-picture`, {
            headers: { ...authHeaders, 'Accept': 'application/json' },
            body: data,
            clientAPI: `${API} @ uploadProfilePicture`,
            returnResponse: true,
        })

        return response
    }

    /**
     * Update user's profile
     */
    static async update(data)
    {
        const { env } = useEnv()
        const { HTTP, authHeaders, jsonHeaders } = useHTTP()

        const response = await HTTP.patch(`${env('VITE_SERVER_URL')}/user-settings/profile`, {
            headers: { ...authHeaders, ...jsonHeaders  },
            body: JSON.stringify(data),
            clientAPI: `${API} @ update`,
            returnResponse: true,
        })

        return response
    }
}

export default UserProfile