const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const { ResumeCtl } = require("../controllers/resume.control");
const { validateParamsId, validate } = require("../services/validate.service");
const { addResumeSchema } = require("../validations/resume.validate");
const { fileUpload } = require("../services/file-upload");

router
  .route("/")
  .post(
    authorizeUser,
    fileUpload("resume").single("resume"),
    validate(addResumeSchema),
    ResumeCtl.addResume
  )
  .get(ResumeCtl.getResumes);

router
  .route("/:id")
  .patch(
    authorizeUser,
    validateParamsId,
    fileUpload("resume").single("resume"),
    ResumeCtl.updateResume
  )
  .delete(validateParamsId, authorizeUser, ResumeCtl.deleteResume);

module.exports = router;
