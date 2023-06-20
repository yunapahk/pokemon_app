const Pokemon = require("../../models/pokemon")

async function update(req, res) {
    const id = req.params.id
    await Pokemon.findByIdAndUpdate(id, req.body)
    res.render("/pokemon", {pokemon})
}

module.exports = update