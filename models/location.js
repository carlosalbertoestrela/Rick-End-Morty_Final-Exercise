const rickMortyApi = require("../config/rickMortyApi.js")

class location {

    static async listLocations(page) {
        const options = {
            params : {
                page: page || 1
            }
        }
        const {data} = await rickMortyApi.get('/location', options)
        
        return data


    }

    static async locationsByType(type) {
        const options = {
            params : {
                type: type 
            }
        }
        const {data} = await rickMortyApi.get('/location', options)
        
        return data


    }
    
    static async locationsByDimension(dimension) {
        const options = {
            params : {
                dimension: dimension 
            }
        }
        const {data} = await rickMortyApi.get('/location', options)
        
        return data


    }

    static async locationsByName(name) {
        const options = {
            params : {
                name: name 
            }
        }
        const {data} = await rickMortyApi.get('/location', options)
        
        return data


    }

}

module.exports = location