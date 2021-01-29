import useEncryption from './useEncryption.js'
import useErrorHandling  from './useErrorHandling.js'

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

    /**
     * HTTP client
     */
    const HTTP = {
        post: async function(url, options) {
            const { showError, showErrorOccured } = useErrorHandling()

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: options.body,
                    headers: options.headers,
                })

                if (!response.ok) {
                    let errorMessage = {
                        statusText: response.statusText,
                        statusCode: response.status,
                        body: '',
                        url: response.url,
                        clientAPI: options.clientAPI,
                    }
                    
                    const text = await response.text()
                    errorMessage.body = text

                    showError(errorMessage)
                    return
                }

                if (options.returnResponse) {
                    return await response.json()
                }
            } catch (error) {
                showErrorOccured()
                console.log(error)
            }
        },

        get: async function(url, options) {
            const { showError, showErrorOccured } = useErrorHandling()

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: options.headers,
                })

                if (!response.ok) {
                    let errorMessage = {
                        statusText: response.statusText,
                        statusCode: response.status,
                        body: '',
                        url: response.url,
                        clientAPI: options.clientAPI,
                    }
                    
                    const text = await response.text()
                    errorMessage.body = text

                    showError(errorMessage)
                    return
                }

                if (options.returnResponse) {
                    return await response.json()
                }
            } catch (error) {
                showErrorOccured()
                console.log(error)
            }
        },

        patch: async function(url, options) {
            const { showError, showErrorOccured } = useErrorHandling()

            try {
                const response = await fetch(url, {
                    method: 'PATCH',
                    body: options.body,
                    headers: options.headers,
                })

                if (!response.ok) {
                    let errorMessage = {
                        statusText: response.statusText,
                        statusCode: response.status,
                        body: '',
                        url: response.url,
                        clientAPI: options.clientAPI,
                    }
                    
                    const text = await response.text()
                    errorMessage.body = text

                    showError(errorMessage)
                    return
                }

                if (options.returnResponse) {
                    return await response.json()
                }
            } catch (error) {
                showErrorOccured()
                console.log(error)
            }
        }
    }

    return {
        objectToQueryString, jsonHeaders, authHeaders, HTTP
    }
}

export default useURL