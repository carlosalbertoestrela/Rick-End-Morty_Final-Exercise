
const CharacterControler = require('../controllers/characters-controler')
const LocationControler = require('../controllers/locals-controler')
const EpisodeControler = require('../controllers/episodes-controler')

module.exports = {
    // personagens
    "/personagem-download": CharacterControler.CharacterDownloadByName,
    "/personagens": CharacterControler.listCharacters,
    "/personagem-id": CharacterControler.CharacterById,
    "/personagem-nome": CharacterControler.CharacterByName,
    "/personagens-status":CharacterControler.CharacterByStatus,
    "/personagens-especie": CharacterControler.CharacterBySpecie,
    "/personagens-origem": CharacterControler.CharacterByOrigin,
    "/personagens-genero":CharacterControler.CharacterByGender,
    // locais
    "/locais": LocationControler.listLocations, 
    "/locais-tipo":LocationControler.locationsByType, 
    "/locais-dimensao":LocationControler.locationsByDimension, 
    "/locais-nome":LocationControler.locationsByName, 
    // Episódios
    "/episodios":EpisodeControler.listEpisodes,  
    "/episodios-nome":EpisodeControler.episodesByName,  
    "/episodios-tag":EpisodeControler.episodesByTag 

}