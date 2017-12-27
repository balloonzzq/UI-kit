const http = require('http')
const fs = require("fs")
const data = fs.readFileSync('./docs/index.html')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(data)
}).listen(8081)
console.log('server runing on: http://39.108.217.94:8081 ')