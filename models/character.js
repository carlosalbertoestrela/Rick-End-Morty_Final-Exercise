const rickMortyApi = require("../config/rickMortyApi.js")

class Character {
    static async listCharacters() {
        rickMortyApi.get("/characters")
    }

    static async getCharactersByName(name){

    }
    static async getCharactersById(id){

    }

}
module.exports = Character;