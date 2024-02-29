const router = require("express").Router();
const contentCtl = require("../controllers/content.control");
const { addContentSchema } = require("../validations/content.validate");
const { validate } = require("../services/validate.service");
const { authorizeUser } = require("../services/authenticate.service");
const { fileUpload } = require("../services/file-upload");

router
  .route("/")
  .post(
    authorizeUser,
    fileUpload("content").fields([
      { name: "image", maxCount: 1 },
      { name: "image_ar", maxCount: 1 },
      { name: "wfile", maxCount: 1 },
      { name: "bfile", maxCount: 1 },
    ]),
    // validate(addContentSchema),
    contentCtl.addContent
  )
  .get(contentCtl.getContent);

router
  .route("/:id")
  .patch(
    authorizeUser,
    fileUpload("content").fields([
      { name: "image", maxCount: 1 },
      { name: "image_ar", maxCount: 1 },
      { name: "wfile", maxCount: 1 },
      { name: "bfile", maxCount: 1 },
    ]),
    contentCtl.updateContent
  )
  .delete(authorizeUser, contentCtl.deleteContent);

module.exports = router;
