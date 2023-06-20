require("dotenv").config()
const express = require('express');
const middleware = require("./utils/middleware")
const registerContollers = require("./utils/registercontrollers")


// REGISTER APPLICATION OBJECT //
const app = express();


// REGISTER MIDDLEWARE //
middleware(app)


// REGISTER ROUTES/CONTROLLERS //
registerContollers(app)


// LISTENER //
app.listen(process.env.PORT, () => {
    console.log("Listening on port:", process.env.PORT)
})