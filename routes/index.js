
const CharacterControler = require('../controllers/characters-controler')

module.exports = {
    "/personagens": CharacterControler.listCharacters,
    "/personagem-nome": CharacterControler.CharacterByName,
    "/personagens-especie": CharacterControler.CharacterBySpecie,
    "/personagens-origem": CharacterControler.CharacterByOrigin,
    "/personagens-genero":()=>{},
    "/personagem-id": CharacterControler.CharacterBySpecie,
    "/locais":()=>{},
    "/":()=>{},    
}