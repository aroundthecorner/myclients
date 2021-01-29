const API = 'api/auth.js'
import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'

class Auth
{
    /**
     * Login a user
     */
    static async login(data)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/login`, {
            headers: { ...jsonHeaders },
            body: JSON.stringify(data),
            clientAPI: `${API} @ login`,
            returnResponse: true,
        })

        return response
    }

    /**
     * Logout a user
     */
    static async logout(logoutType)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders, authHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/logout/${logoutType}`, {
            headers: { ...jsonHeaders, ...authHeaders },
            body: '',
            clientAPI: `${API} @ logout`,
            returnResponse: false,
        })

        return response
    }

    /**
     * Regiseter a new user
     */
    static async register(data)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/register`, {
            headers: { ...jsonHeaders },
            body: JSON.stringify(data),
            clientAPI: `${API} @ register`,
            returnResponse: true,
        })

        return response
    }

    /**
     * Check if a user exists in database
     */
    static async checkUserExists(data)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/check-user-exists`, {
            headers: { ...jsonHeaders },
            body: JSON.stringify(data),
            clientAPI: `${API} @ checkUserExists`,
            returnResponse: true,
        })

        return response.user_exists
    }

    /**
     * Check if an organization exists in database
     */
    static async checkOrganizationExists(data)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/check-organization-exists`, {
            headers: { ...jsonHeaders },
            body: JSON.stringify(data),
            clientAPI: `${API} @ checkOrganizationExists`,
            returnResponse: true,
        })

        return response.organization_exists
    }

    /**
     * Send reset password link
     */
    static async sendResetPasswordLink(data)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/forgot-password`, {
            headers: { ...jsonHeaders },
            body: JSON.stringify(data),
            clientAPI: `${API} @ sendResetPasswordLink`,
            returnResponse: true,
        })

        return response.organization_exists
    }

    /**
     * Change password
     */
    static async resetPassword(data)
    {
        const { env } = useEnv()
        const { HTTP, jsonHeaders } = useHTTP()

        const response = await HTTP.post(`${env('VITE_SERVER_URL')}/reset-password`, {
            headers: { ...jsonHeaders },
            body: JSON.stringify(data),
            clientAPI: `${API} @ resetPassword`,
            returnResponse: true,
        })

        return response.organization_exists
    }
}

export default Auth