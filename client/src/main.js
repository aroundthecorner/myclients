import App from './App.vue'
import { createApp } from 'vue'
import routes from './routes.js'
import store from './store/index.js'
import '/css/reboot.css'
import '/css/material-icons.css'
import '/css/style.css'
import '/css/style-dark.css'

const app = createApp(App)

app.directive('focus', {
    mounted(el, binding, vnode) {
        el.focus()
    }
})

app.use(store)
app.use(routes)

app.mount('#app')