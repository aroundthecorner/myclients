import { computed } from 'vue'
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
        ws = new WebSocket(`ws://${host}:46295`)

        ws.onclose = () => {
            console.error('ws connection lost. reconnecting...')

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