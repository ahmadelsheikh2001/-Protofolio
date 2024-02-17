const express = require("express")
const router = express.Router()
const {authorizeUser} =require("../services/authenticate.service")
const userCtl =require("../controllers/user.control")
const {validateParamsId , validate} = require("../services/validate.service")
const {changePasswordSchema , updateSchema} = require("../validations/user.validate")

router.get("/data", authorizeUser , userCtl.getUserData)
router.patch("/:id", authorizeUser , validate(updateSchema)  , validateParamsId, userCtl.updateUser)
router.post("/change-password", authorizeUser  , validate(changePasswordSchema) , userCtl.changePassword)


module.exports = router
