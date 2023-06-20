const pokemonRoutes = require("../routes/pokemon")

function registerContollers(app){
    app.use("/pokemon", pokemonRoutes)
}

module.exports = registerContollers