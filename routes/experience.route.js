const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const { ExperienceCtl } = require("../controllers/experience.control");
const { validateParamsId, validate } = require("../services/validate.service");
const { addExperienceSchema } = require("../validations/experience.validate");
const { imageUpload } = require("../services/file-upload");
router
  .route("/")
  .post(
    authorizeUser,
    imageUpload("experience").single("logo"),
    validate(addExperienceSchema),
    ExperienceCtl.addExperience
  )
  .get(ExperienceCtl.getExperiences);

router
  .route("/:id")
  .patch(
    authorizeUser,
    validateParamsId,
    imageUpload("experience").single("logo"),
    ExperienceCtl.updateExperience
  )
  .delete(validateParamsId, authorizeUser, ExperienceCtl.deleteExperience);

module.exports = router;