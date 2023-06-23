const Pokemon = require("../../models/pokemon")

async function update(req, res) {
    const id = req.params.id
    let updatedPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        },
    }
    console.log(req.body)
    await Pokemon.findByIdAndUpdate(id, updatedPokemon)
    res.redirect("/pokemon")
}

module.exports = update