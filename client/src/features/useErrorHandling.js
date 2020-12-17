import store from '../store/index.js'

function useErrorHandling()
{
    /**
     *  Show erorr notification
     */
    function showError(errorMessage)
    {
        store.dispatch('app/showServerError', errorMessage)
    }

    return {
        showError
    }
}

export default useErrorHandling