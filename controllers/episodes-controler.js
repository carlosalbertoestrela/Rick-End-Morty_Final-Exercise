const Episode = require('../models/episode')

class EpisodeControler {

    static async listEpisodes(req, res){
        try {
            const {page} = req.queryParams
            const epsodes = await Episode.listEpisodes(page)

            res.writeHead(200)
            res.end(JSON.stringify(epsodes))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }

    static async episodesByName(req, res){
        try {
            const {name} = req.queryParams
            const episode = await Episode.episodeByName(name)

            res.writeHead(200)
            res.end(JSON.stringify(episode))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }

    static async episodesByTag(req, res){
        try {
            const {tag} = req.queryParams
            const epsodes = await Episode.episodeByTag(tag)

            res.writeHead(200)
            res.end(JSON.stringify(epsodes))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'server error')
        }
    }
}

module.exports = EpisodeControler;