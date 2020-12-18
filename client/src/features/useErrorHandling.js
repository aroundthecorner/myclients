import store from '../store/index.js'

function useErrorHandling()
{
    /**
     *  Show erorr notification
     */
    function showError(errorMessage)
    {
        if (errorMessage.statusCode == 422)
        {
            store.dispatch('app/showNotificationMessage', {
                icon: 'img/warning.png',
                title: 'Incorrect data',
                body: 'The data you provided was incorrect. Please try again!',
                hideDelay: 5,
            })

            return
        }

        store.dispatch('app/showServerError', errorMessage)
    }

    return {
        showError
    }
}

export default useErrorHandling