const Pokemon = require("../../models/pokemon")

async function create(req, res){
    let newPokemon = {
        name: req.body.name,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            sped: req.body.sped,
        }


    }
    const pokemon = Pokemon.create(newPokemon)
    console.log(newPokemon, req.body)
    res.redirect("/pokemon")
}

module.exports = create