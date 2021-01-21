import { computed } from 'vue'
import useEnv from './useEnv.js'
import store from '../store/index.js'

function useWebsocket()
{
    let ws
    const host = window.location.hostname
    const data = computed(() => store.state.app.websocketData)

    /**
     * Establish a websocket connection
     */
    function connect()
    {
        ws = null
        let protocol = (window.location.protocol == 'http:') ? 'ws' : 'wss'

        const appEnv = env('VITE_APP_ENV')

        if (appEnv == 'dev') {
            ws = new WebSocket(`${protocol}://${host}:46295`)
        } else {
            ws = new WebSocket(`${protocol}://${host}/ws/`)
        }

        /* 
         * Keep the connection open as Cloudflare and others close it after
         * 60 - 100 seconds of inactivity.
         */
        setInterval(() => {
            ws.send('ping')
        }, 30000)

        /* 
         * Reconnect when lost connection
         */
        ws.onclose = () => {
            console.log('Reconnecting websocket...')

            setTimeout(() => {
                connect()
            }, 5000)
        }

        listen()
    }

    /**
     * Listen for incoming messages
     */
    function listen()
    {
        ws.addEventListener('message', event => {
            store.dispatch('app/setWebsocketData', event.data)
        })
    }

    /**
     * Send a message
     */
    function send(message)
    {
        ws.send(message)
    }

    return {
        connect, data, send
    }
}

export default useWebsocket