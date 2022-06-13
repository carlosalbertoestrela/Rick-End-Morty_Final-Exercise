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
    
    static async getCharactersByOrigin(origin){
        const options = {
            params : {
                origin: origin
            }
        }
        
        const {data} = await rickMortyApi.get('/character')
        const originFiltered = data.results.filter(data => data.origin.name.includes(origin))

        return originFiltered
        
    }
    
    static async getCharactersByStatus(status){
        const options = {
            params : {
                status: status
            }
        }
        
        const {data} = await rickMortyApi.get('/character')
        const statusFiltered = data.results.filter(data => data.status === status)

        return statusFiltered
        
    }

    static async getCharactersByGender(gender){
        const options = {
            params : {
                gender: gender
            }
        }
        
        const {data} = await rickMortyApi.get('/character')
        const genderFiltered = data.results.filter(data => data.gender === gender)

        return genderFiltered
        
    }
}
module.exports = Character;