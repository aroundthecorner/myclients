import useEncryption from '../features/useEncryption.js'

const { encrypt } = useEncryption()

export default {
    namespaced: true,

    state()
    {
        return {
            
        }
    },

    actions:
    {
        setUser({ commit }, user)
        {
            commit('setUser', user)
            commit('app/setLanguage', user.language, { root: true })
        },
    },

    mutations:
    {
        setUser(state, user)
        {
            Object.assign(state, { ...user })

            localStorage.setItem('myclients_user', encrypt(JSON.stringify(user)))
        },
    },
}