function useURL()
{
    const jsonHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const authHeaders = {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('scaffold_app_name_user'))?.token,
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