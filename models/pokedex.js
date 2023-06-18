const mongoose = require("./connection")

const {Schema, model} = mongoose

const pokemonSchema = new Schema({
    name: String,
    img: 
    type: String,
})

const Pokemon = model("Pokemon", pokemonSchema)

module.exports = Pokemon
console.log(Pokemon)