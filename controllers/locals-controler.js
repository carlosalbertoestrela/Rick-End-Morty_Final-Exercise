const location = require('../models/location')

class LocationControler{
    static async listLocations(req, res){
        try {
            const {page} = req.queryParams
            const locarions = await location.listLocations(page)

            res.writeHead(200)
            res.end(JSON.stringify(locarions))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }
    
    static async locationsByType(req, res){
        try {
            const {type} = req.queryParams
            const locations = await location.locationsByType(type)

            res.writeHead(200)
            res.end(JSON.stringify(locations))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }

    static async locationsByDimension(req, res){
        try {
            const {dimension} = req.queryParams
            const locations = await location.locationsByDimension(dimension)

            res.writeHead(200)
            res.end(JSON.stringify(locations))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }

    static async locationsByName(req, res){
        try {
            const {name} = req.queryParams
            const locations = await location.locationsByName(name)

            res.writeHead(200)
            res.end(JSON.stringify(locations))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }

}

module.exports =  LocationControler