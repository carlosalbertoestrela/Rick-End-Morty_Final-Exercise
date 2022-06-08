const http = require('http');
const routes = require('./routes')
const port = 3344



const server = http.createServer((req, res)=>{
    const {url} = req;
    routes[url](req,res)

})

server.listen(port, ()=>{console.log(`serveridor iniciado na porta ${port}`)})