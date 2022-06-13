const character = require('../models/character')
const fs = require("fs")

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

    static async CharacterDonloadByName(req, res){
        try {
            const {name} = req.queryParams
            const characterDownload = await character.getCharacterByName(name)
            const characterName = (characterDownload[0].name).replace(" ","-");

            fs.writeFile(`./tmp/${characterName}.txt`, JSON.stringify(characterDownload), 
            erro=> erro ? console.log(erro) : console.log('sucess'))

            res.writeHead(201)
            res.end(`Arquivo com as informações de ${characterName} salvos em "./tmp"`)

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }

    static async CharacterById(req, res){
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
            const characterByOrigin = await character.getCharactersByOrigin(origin)
    
            res.writeHead(200)
            res.end(JSON.stringify(characterByOrigin))
    
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }

    static async CharacterByStatus(req, res){
        try {
            const {status} = req.queryParams
            console.log(status)
            const characterBystatus = await character.getCharactersByStatus(status)
    
            res.writeHead(200)
            res.end(JSON.stringify(characterBystatus))
    
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }

    static async CharacterByGender(req, res){
        try {
            const {gender} = req.queryParams
            console.log(gender)
            const characterBygender = await character.getCharactersByGender(gender)
    
            res.writeHead(200)
            res.end(JSON.stringify(characterBygender))
    
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
            
        }
    }
}

module.exports =  CharacterControler