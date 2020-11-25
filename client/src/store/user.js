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
        },
    },

    mutations:
    {
        setUser(state, user)
        {
            Object.assign(state, { ...user });

            localStorage.setItem('myclients_user', JSON.stringify(user))
        },
    },
}