const express = require('express');

const router = express.Router()

const UserController = require("../controllers/UserControllers")
const AddressController = require("../controllers/AddressController")

const TechController = require("../controllers/TechController")



router.get("/users", UserController.index)
router.post("/users", UserController.store)

router.get("/users/:user_id/addresses", AddressController.index)
router.post("/users/:user_id/addresses", AddressController.store)

router.get("/users/:user_id/techs", TechController.index)
router.post("/users/:user_id/techs", TechController.store)
router.delete("/users/:user_id/techs", TechController.delete)

module.exports = router