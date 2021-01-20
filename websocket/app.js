const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 46295 })

wss.on('connection', ws => {
	ws.on('message', data => {
		wss.clients.forEach(client => {
			client.send(data)
		})
	})
})