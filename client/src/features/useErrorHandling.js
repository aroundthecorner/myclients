import store from '../store/index.js'
import useLanguage from '../features/useLanguage.js'

const { lang } = useLanguage()

function useErrorHandling()
{
    /**
     *  Show erorr notification
     */
    function showError(errorMessage)
    {
        const response = JSON.parse(errorMessage.body)

        if (errorMessage.statusCode == 422)
        {
            store.dispatch('app/showNotificationMessage', {
                icon: 'img/warning.png',
                title: lang('Incorrect data'),
                body: lang('The data you provided was incorrect. Please try again!'),
                hideDelay: 5,
            })

            return
        }

        if (response.message == 'IP address banned. Too many login attempts.') {
            store.dispatch('app/showNotificationMessage', {
                icon: 'img/warning.png',
                title: lang('IP address banned'),
                body: lang('Your IP address has been banned. Too many failed login attempts.'),
                hideDelay: 5,
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
            title: lang('Error occured'),
            body: lang('An error has occured, please try again later!'),
            hideDelay: 5,
        })
    }

    return {
        showError, showErrorOccured
    }
}

export default useErrorHandling