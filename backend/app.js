const http = require('http')
const serveStatic = require('serve-static')
const path = require('path')
const router = require('./src/router')

const frontendPath = path.resolve(__dirname, '../frontend/')
const serve = serveStatic(frontendPath, {
    index: ['index.html']
})

const server = http.createServer((req, res) => {
    serve(req, res, () => {
        router.lookup(req, res)
    })
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server listining for 127.0.0.1:3000')
})