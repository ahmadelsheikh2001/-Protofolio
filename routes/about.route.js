const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const aboutCtl = require("../controllers/about.control");
const { validateParamsId, validate } = require("../services/validate.service");
const { addAboutSchema } = require("../validations/about.validate");

router
  .route("/")
  .post(authorizeUser, validate(addAboutSchema), aboutCtl.addAbout)
  .get(aboutCtl.getAbout);

router
  .route("/:id")
  .patch(authorizeUser, validateParamsId, aboutCtl.updateAbout)
  .delete(validateParamsId,authorizeUser, aboutCtl.deleteAbout);

module.exports = router;
