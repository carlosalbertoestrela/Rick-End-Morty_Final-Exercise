const rickMortyApi = require("../config/rickMortyApi.js")


class episode {
    
    static async listEpisodes(page) {
        const options = {
            params : {
                page: page || 1
            }
        }
        const {data} = await rickMortyApi.get('/episode', options)
        
        return data
    }

    static async episodeByName(name) {
        const options = {
            params : {
                name: name 
            }
        }
        const {data} = await rickMortyApi.get('/episode', options)
        
        return data
    }

    static async episodeByTag(tag) {
        const options = {
            params : {
                episode: tag 
            }
        }
        const {data} = await rickMortyApi.get('/episode', options)
        
        return data
    }

}

module.exports = episode;