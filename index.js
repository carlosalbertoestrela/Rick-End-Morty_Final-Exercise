const http = require('http');
const routs = require('./routs')
const port = 3333

const server = http.createServer((req, res)=>{


})

server.listen(port, ()=>{console.log(`serveridor iniciado na porta ${port}`)})