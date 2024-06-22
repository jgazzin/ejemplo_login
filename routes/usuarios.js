const express = require('express')
const router = express.Router()
const userController = require('../controller/user_controller')

router.get("/", userController.obtenerUser)
router.get("/:id", userController.obtenerUserID)
router.post("/", userController.createUser)
router.put("/:id", userController.modificarUser)
router.delete("/:id", userController.borrarUser)

module.exports = router;