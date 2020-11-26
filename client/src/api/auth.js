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
}

export default Auth