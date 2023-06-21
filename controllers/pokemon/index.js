const index = require("./indexRoute");
const newPokemon = require("./new");
const show = require("./show")

module.exports = {
    index, 
    new: newPokemon,
    show,
    create,
    edit,
    update,
    destroy
};

module.exports = router