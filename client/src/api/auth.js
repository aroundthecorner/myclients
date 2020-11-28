import useEnv from '../features/useEnv.js'
import useHTTP from '../features/useHTTP.js'

class Auth
{
    static async login(data)
    {
        const { env } = useEnv()
        const { jsonHeaders } = useHTTP()

        try {
            const response = await fetch(`${env('VITE_API_URL')}/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: jsonHeaders,
            })

            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }

    static async checkUserExists(data)
    {
        const { env } = useEnv()
        const { jsonHeaders } = useHTTP()

        try {
            let response = await fetch(`${env('VITE_API_URL')}/auth/check-user-exists`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: jsonHeaders,
            })

            response =  await response.json()
            return response.user_exists
        } catch (error) {
            console.log(error)
        }
    }
}

export default Auth