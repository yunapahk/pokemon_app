const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

function middleware(app){

    // LOGGING //
    app.use(morgan("dev")) 

    // METHOD OVERRIDING //
    app.use(methodOverride("_method"))

    // PUBLIC FOLDER AS STATIC SERVER //
    app.use(express.static("public"))

    // PARSE URLENCODED
    app.use(express.urlencoded({extended: false})) 

}

module.exports = middleware