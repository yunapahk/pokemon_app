const express    = require('express');
const app        = express();
const Pokemon    = require('../models/pokemon.js');

app.get('/data', (req, res) => {
    const data = {name: Yuna}
    res.json(data);
});


// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// LISTENER
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT` ${PORT})
})