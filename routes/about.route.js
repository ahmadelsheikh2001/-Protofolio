const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const aboutCtl = require("../controllers/about.control");
const { validateParamsId, validate } = require("../services/validate.service");
const { addAboutSchema } = require("../validations/about.validate");
const { imageUpload } = require("../services/file-upload");

router
  .route("/")
  .post(
    authorizeUser,
    imageUpload("about").single("image"),
    validate(addAboutSchema),
    aboutCtl.addAbout
  )
  .get(aboutCtl.getAbout);

router
  .route("/:id")
  .patch(
    authorizeUser,
    imageUpload("about").single("image"),
    validateParamsId,
    aboutCtl.updateAbout
  )
  .delete(validateParamsId, authorizeUser, aboutCtl.deleteAbout);

module.exports = router;
