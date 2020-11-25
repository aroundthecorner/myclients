import app from './app.js'
import user from './user.js'
import { createStore } from 'vuex'
 
export default createStore({
    modules:
    {
        app, user
    }
})