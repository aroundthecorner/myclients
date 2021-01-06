import useEncryption from './useEncryption.js'

function useURL()
{
    const { decrypt } = useEncryption()

    const jsonHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const user = decrypt(localStorage.getItem('myclients_user'))
    const token = (user) ? JSON.parse(user)?.token : ''

    const authHeaders = {
        'Authorization': 'Bearer ' + token,
    }

    /**
     * Construct query string from object
     */
    function objectToQueryString(obj)
    {
        return Object.keys(obj).map(key => key + '=' + obj[key]).join('&')
    }

    return {
        objectToQueryString, jsonHeaders, authHeaders
    }
}

export default useURL