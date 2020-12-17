export default {
    namespaced: true,

    state()
    {
        return {
            theme: 'aconite',
            app_name: 'myclients',
            
            serverError: {
                show: false,
                statusText: '',
                statusCode: '',
                body: '',
                url: '',
                clientAPI: '',
            },

            notificationMessage: {
                show: false,
                'icon': '',
                'title': '',
                'body': '',
                'hideDelay': '',
            }
        }
    },

    actions: 
    {
        showServerError({ commit }, errorMessage)
        {
            commit('showServerError', errorMessage)
        },

        hideServerError({ commit })
        {
            commit('hideServerError')
        },

        showNotificationMessage({ commit }, notificationMessage)
        {
            commit('showNotificationMessage', notificationMessage)
        },

        hideNotificationMessage({ commit })
        {
            commit('hideNotificationMessage')
        },
    },

    mutations:
    {
        showServerError(state, errorMessage)
        {
            state.serverError = {
                ...errorMessage
            }

            state.serverError.show = true
        },

        showNotificationMessage(state, notificationMessage)
        {
            state.notificationMessage = {
                ...notificationMessage
            }

            state.notificationMessage.show = true
        },

        hideServerError(state)
        {
            state.serverError.show = false
        },

        hideNotificationMessage(state)
        {
            state.notificationMessage.show = false
        },
    },
}