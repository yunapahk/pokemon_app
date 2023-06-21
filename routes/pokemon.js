const Router = require("express").Router
const controller = require("../controllers/pokemon")

const router = Router()

            // ROUTES //

// INDEX //
router.get("/", controllers.index)

// NEW //
router.get("/new", controllers.new)

// DESTROY //
router.delete("/:id", controllers.destroy)

// UPDATE //
router.put("/:id", controllers.update)

// CREATE //
router.post("/", controllers.create)

//  EDIT //
router.get("/:id/edit", controllers.edit)

// SHOW //
router.get("/:id", controllers.show)

module.exports = router