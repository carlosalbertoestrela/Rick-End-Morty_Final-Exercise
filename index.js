const http = require('http');
const urlEncod = require('url')
const qs = require('querystring')
const routes = require('./routes')
const log = require('./utils/logs')
const port = 3344



const server = http.createServer((req, res)=>{

    try {
        const {url} = req;
        const { pathname, query} = urlEncod.parse(url)
        const queryParsed = qs.parse(query)

        req.queryParams = queryParsed
        routes[pathname](req, res)
        log.requestLog(url)
        
    } catch (error) {
        console.log(error)
    }

})

server.listen(port, ()=>{console.log(`server running at port ${port}`)})