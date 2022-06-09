const rickMortyApi = require("../config/rickMortyApi.js")

class Character {
    static async listCharacters(page) {
        const options = {
            params : {
                page: page || 1
            }
        }
        const {data} = await rickMortyApi.get('/character', options)
        
        return data


    }

    static async getCharacterByName(name){
        const options = {
            params : {
                name: name
            }
        }

        const {data} = await rickMortyApi.get(`/character`,options)
        return data.results
    }

    static async getCharactersById(id){
        
        const {data} = await rickMortyApi.get(`/character/${id}`)
        return data
        
    }
    static async getCharactersBySpecie(species){
        const options = {
            params : {
                species: species
            }
        }
        
        const {data} = await rickMortyApi.get('/character', options)
        return data
        
    }

}
module.exports = Character;