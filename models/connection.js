const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL, {})

mongoose.connection
    .on("open", () => {console.log("Mongo is connected")})
    .on("close", () => {console.log("Mongo is disconnected")})
    .on("error", () => {console.log("Error")});

module.exports = mongoose
