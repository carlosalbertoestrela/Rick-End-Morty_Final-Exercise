const character = require('../models/character')

class CharacterControler {
    static async listCharacters(req, res){
        try {
            const {page} = req.queryParams
            const characters = await character.listCharacters(page)

            res.writeHead(200)
            res.end(JSON.stringify(characters))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }

    static async CharacterByName(req, res){
        try {
            const {name} = req.queryParams
            const characterByName = await character.getCharacterByName(name)

            res.writeHead(200)
            res.end(JSON.stringify(characterByName))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }

    static async CharacterByid(req, res){
        try {
            const {id} = req.queryParams
            const characterByName = await character.getCharactersById(id)

            res.writeHead(200)
            res.end(JSON.stringify(characterByName))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }

    static async CharacterBySpecie(req, res){
        try {
            const {species} = req.queryParams
            const characterBySpecie = await character.getCharactersBySpecie(species)

            res.writeHead(200)
            res.end(JSON.stringify(characterBySpecie))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }

    static async CharacterByOrigin(req, res){
        try {
            const {origin} = req.queryParams
            console.log(origin)
            const characterBySpecie = await character.getCharactersByOrigin(origin)
    
            res.writeHead(200)
            res.end(JSON.stringify(characterByOrigin))
    
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }
}

module.exports =  CharacterControler