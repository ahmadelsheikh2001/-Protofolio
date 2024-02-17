const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const designTypesCtl = require("../controllers/designTypes.controller");
const { validateParamsId, validate } = require("../services/validate.service");
const { addDesignTypeSchema } = require("../validations/designTypes.validate");

router
  .route("/")
  .post(authorizeUser, validate(addDesignTypeSchema), designTypesCtl.addDesignType)
  .get(designTypesCtl.getDesignTypes);

router
  .route("/:id")
  .patch(authorizeUser, validateParamsId, designTypesCtl.updateDesignType)
  .delete(authorizeUser, designTypesCtl.deleteDesignType);

module.exports = router;
