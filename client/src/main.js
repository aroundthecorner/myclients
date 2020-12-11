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

app.directive('focus', {
    mounted(el, binding, vnode) {
        el.focus()
    }
})

app.use(store)
app.use(routes)

app.use(VueProgressBar, {
    color: "#ff0000",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
})

app.mount('#app')