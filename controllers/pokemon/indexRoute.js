const Pokemon = require("../../models/pokemon")

async function index(req, res){
    const cartoons = await Pokemon.find({})
    res.render("/pokemon/index.ejs", {pokemons})
}

module.exports = index