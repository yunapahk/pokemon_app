const Pokemon = require("./pokemon.js")
const mongoose = require("./connection")
const Pokemons = require("./seedData")

async function seed(){
    await Pokemon.deleteMany({})
    
    const createdPokemons = await Pokemon.create(pokemons)
    console.log(createdPokemons.length)
    console.log(createdPokemons[0])
}

mongoose.connection.on("open", () => {seed()})