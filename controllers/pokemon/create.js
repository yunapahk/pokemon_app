const Pokemon = require("../../models/pokemon")

async function create(req, res){
    const pokemon = Pokemon.create(req.body)
    res.redirect("/pokemon")
}

module.exports = create