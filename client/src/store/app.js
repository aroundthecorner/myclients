import Languages from '../api/languages.js'

export default {
    namespaced: true,

    state()
    {
        return {
            theme: 'aconite',
            app_name: 'myclients',
            language: 'en',
            
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
            },

            messageGlobal: {
                show: true,
                body: 'Test',
            },

            languages: [],
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

        showMessageGlobal({ commit }, message)
        {
            commit('showMessageGlobal', message)
        },

        hideMessageGlobal({ commit })
        {
            commit('hideMessageGlobal')
        },

        async fetchLanguages({ commit })
        {
            const languages = await Languages.get()

            commit('setLanguages', languages)
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
        
        hideNotificationMessage(state)
        {
            state.notificationMessage.show = false
        },

        showMessageGlobal(state, message)
        {
            state.messageGlobal = {
                ...message
            }

            state.messageGlobal.show = true
        },
        
        hideMessageGlobal(state)
        {
            state.messageGlobal.show = false
        },

        hideServerError(state)
        {
            state.serverError.show = false
        },

        setLanguages(state, languages)
        {
            state.languages = languages
        },
    },
}