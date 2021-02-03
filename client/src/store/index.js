import app from '/@/store/app.js'
import user from '/@/store/user.js'
import { createStore } from 'vuex'
 
export default createStore({
    modules:
    {
        app, user
    }
})