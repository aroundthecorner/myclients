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

        if (errorMessage.body.includes('IP address banned. Too many login attempts')) {
            store.dispatch('app/showNotificationMessage', {
                icon: 'img/warning.png',
                title: 'IP address banned',
                body: 'Your IP address has been banned. Too many failed login attempts.',
                hideDelay: 3,
            })

            return
        }

        store.dispatch('app/showServerError', errorMessage)
    }

    /**
     *  Show erorr occured notification
     */
    function showErrorOccured()
    {
        store.dispatch('app/showNotificationMessage', {
            icon: 'img/warning.png',
            title: 'Error occured',
            body: 'An error has occured, please try again later!',
            hideDelay: 5,
        })
    }

    return {
        showError, showErrorOccured
    }
}

export default useErrorHandling