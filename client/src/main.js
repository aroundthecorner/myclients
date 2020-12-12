import App from './App.vue'
import { createApp } from 'vue'
import routes from './routes.js'
import store from './store/index.js'
import VueProgressBar from "@aacassandra/vue3-progressbar"
import '/css/reboot.css'
import '/css/material-icons.css'
import '/css/line-awesome.min.css'
import '/css/style.css'
import '/css/style-dark.css'

const app = createApp(App)

app.use(store)
app.use(routes)

/** The v-focus directive gives an element an initial focus */
app.directive('focus', {
    mounted(el, binding, vnode) {
        el.focus()
    }
})

/** App progress bar */
app.use(VueProgressBar, {
    color: "#73ccec",
    failedColor: "#874b4b",
    thickness: "5px",
    autoFinish: false,
})

app.provide('progressBar', app.config.globalProperties.$Progress)

/** Mount the application */
app.mount('#app')