const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const feedbackCtl = require("../controllers/feedback.control");
const { validateParamsId, validate } = require("../services/validate.service");
const { addFeedbackSchema } = require("../validations/feedback.validate");
const {imageUpload} = require("../services/file-upload")

router
  .route("/")
  .post(imageUpload("feedback").single("image") , feedbackCtl.addFeedback)
  .get(feedbackCtl.getFeedabacks);

router
  .route("/:id")
  .patch(authorizeUser, validateParamsId, feedbackCtl.updateFeedback)
  .delete(authorizeUser, feedbackCtl.deleteFeedback);

module.exports = router;
