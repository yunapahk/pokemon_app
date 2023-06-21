const Pokemon = require("../../models/pokemon")

async function update(req, res) {
    const id = req.params.id
    const pokemon = await Pokemon.findByIdAndUpdate(id, req.body)
    res.render("/pokemon")
}

module.exports = update