
const CharacterControler = require('../controllers/characters-controler')

module.exports = {
    "/personagens": CharacterControler.listCharacters,
    "/personagem-name":CharacterControler.CharacterByName,
    "/personagens-especie":CharacterControler.CharacterBySpecie,
    "/personagens-origem":()=>{},
    "/personagens-genero":()=>{},
    "/personagem-id":CharacterControler.CharacterBySpecie,
    "/locais":()=>{},
    "/":()=>{},    
}